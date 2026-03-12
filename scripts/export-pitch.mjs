/**
 * Export slide decks as PDF and PPTX from the live web-based deck.
 *
 * Prerequisites:
 *   npm install puppeteer pptxgenjs pdf-lib
 *   Dev server running (npm run dev -- -p 3099)
 *
 * Usage:
 *   node scripts/export-pitch.mjs                # exports both decks
 *   node scripts/export-pitch.mjs pitch          # exports investor deck only
 *   node scripts/export-pitch.mjs reading-deck   # exports reading deck only
 *
 * Output:
 *   public/pitch/pitch-deck.pdf
 *   public/pitch/walt-pitch.pptx
 *   public/reading-deck/reading-deck.pdf
 *   public/reading-deck/walt-reading-deck.pptx
 */

import puppeteer from "puppeteer";
import PptxGenJS from "pptxgenjs";
import { PDFDocument } from "pdf-lib";
import fs from "fs";
import path from "path";

const PORT = 3099;
const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;

const DECKS = {
  pitch: {
    url: `http://localhost:${PORT}/pitch`,
    slideCount: 9,
    outputDir: path.resolve("public/pitch"),
    screenshotsDir: path.resolve("/tmp/pitch-slides"),
    pdfName: "pitch-deck.pdf",
    pptxName: "walt-pitch.pptx",
    title: "Walt Presentation Deck",
    subject: "Walt Presentation Deck",
  },
  "reading-deck": {
    url: `http://localhost:${PORT}/reading-deck`,
    slideCount: 12,
    outputDir: path.resolve("public/reading-deck"),
    screenshotsDir: path.resolve("/tmp/reading-deck-slides"),
    pdfName: "reading-deck.pdf",
    pptxName: "walt-reading-deck.pptx",
    title: "Walt Reading Deck",
    subject: "Walt Reading Deck",
  },
};

async function captureSlides(deck) {
  fs.mkdirSync(deck.screenshotsDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: SLIDE_WIDTH, height: SLIDE_HEIGHT, deviceScaleFactor: 2 });

  console.log(`Navigating to ${deck.url}...`);
  await page.goto(deck.url, { waitUntil: "networkidle0", timeout: 30000 });

  // Enter presentation mode by clicking the first slide thumbnail
  console.log("Entering presentation mode...");
  await page.click(".deck-grid-item");
  await page.waitForSelector(".deck-presentation", { timeout: 5000 });

  // Wait for fonts and rendering
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 1000));

  // Hide presentation UI chrome (counter, dots, arrows, close button)
  await page.addStyleTag({
    content: `
      .deck-pres-counter,
      .deck-pres-dots,
      .deck-pres-arrow,
      .deck-pres-close { display: none !important; }
    `,
  });

  const screenshots = [];

  for (let i = 0; i < deck.slideCount; i++) {
    console.log(`Capturing slide ${i + 1}/${deck.slideCount}...`);
    await new Promise((r) => setTimeout(r, 500));

    // Screenshot the slide element (.ps) inside the presentation content
    const slideEl = await page.$(".deck-pres-content > .ps");
    const filePath = path.join(deck.screenshotsDir, `slide-${String(i + 1).padStart(2, "0")}.png`);

    if (slideEl) {
      await slideEl.screenshot({ path: filePath, type: "png" });
    } else {
      const fallback = await page.$(".deck-pres-content");
      if (fallback) {
        await fallback.screenshot({ path: filePath, type: "png" });
      } else {
        await page.screenshot({ path: filePath, type: "png" });
      }
    }

    screenshots.push(filePath);

    if (i < deck.slideCount - 1) {
      await page.keyboard.press("ArrowRight");
      await new Promise((r) => setTimeout(r, 300));
    }
  }

  await browser.close();
  console.log(`Captured ${screenshots.length} slides.`);
  return screenshots;
}

async function generatePDF(deck, screenshots) {
  console.log("Generating PDF...");
  const pdfDoc = await PDFDocument.create();

  for (const imgPath of screenshots) {
    const imgBytes = fs.readFileSync(imgPath);
    const image = await pdfDoc.embedPng(imgBytes);

    const pageWidth = 960;
    const pageHeight = 540;
    const page = pdfDoc.addPage([pageWidth, pageHeight]);

    const scaled = image.scaleToFit(pageWidth, pageHeight);
    const x = (pageWidth - scaled.width) / 2;
    const y = (pageHeight - scaled.height) / 2;

    page.drawImage(image, { x, y, width: scaled.width, height: scaled.height });
  }

  fs.mkdirSync(deck.outputDir, { recursive: true });
  const pdfBytes = await pdfDoc.save();
  const outPath = path.join(deck.outputDir, deck.pdfName);
  fs.writeFileSync(outPath, pdfBytes);
  console.log(`PDF saved: ${outPath} (${(pdfBytes.length / 1024 / 1024).toFixed(2)} MB)`);
}

async function generatePPTX(deck, screenshots) {
  console.log("Generating PPTX...");
  const pptx = new PptxGenJS();

  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Walt";
  pptx.company = "Embedded Engineering ApS";
  pptx.subject = deck.subject;
  pptx.title = deck.title;

  for (const imgPath of screenshots) {
    const slide = pptx.addSlide();
    const imgData = fs.readFileSync(imgPath);
    const base64 = imgData.toString("base64");
    const dataUri = `image/png;base64,${base64}`;

    slide.addImage({
      data: dataUri,
      x: 0,
      y: 0,
      w: "100%",
      h: "100%",
      sizing: { type: "contain", w: "100%", h: "100%" },
    });
  }

  fs.mkdirSync(deck.outputDir, { recursive: true });
  const outPath = path.join(deck.outputDir, deck.pptxName);
  await pptx.writeFile({ fileName: outPath });
  console.log(`PPTX saved: ${outPath}`);
}

async function exportDeck(deckId) {
  const deck = DECKS[deckId];
  if (!deck) {
    console.error(`Unknown deck: ${deckId}. Use: ${Object.keys(DECKS).join(", ")}`);
    process.exit(1);
  }

  console.log(`\n=== Exporting ${deck.title} ===\n`);
  const screenshots = await captureSlides(deck);
  await generatePDF(deck, screenshots);
  await generatePPTX(deck, screenshots);
  console.log(`\nDone! Files updated in ${deck.outputDir}/`);
}

async function main() {
  const arg = process.argv[2];

  if (arg) {
    await exportDeck(arg);
  } else {
    for (const deckId of Object.keys(DECKS)) {
      await exportDeck(deckId);
    }
  }
}

main().catch((err) => {
  console.error("Export failed:", err);
  process.exit(1);
});
