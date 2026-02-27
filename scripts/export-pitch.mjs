/**
 * Export pitch deck slides as PDF and PPTX from the live web-based deck.
 *
 * Prerequisites:
 *   npm install puppeteer pptxgenjs pdf-lib
 *   Dev server running (npm run dev -- -p 3099)
 *
 * Usage:
 *   node scripts/export-pitch.mjs
 *
 * Output:
 *   public/pitch/pitch-deck.pdf
 *   public/pitch/walt-pitch.pptx
 */

import puppeteer from "puppeteer";
import PptxGenJS from "pptxgenjs";
import { PDFDocument } from "pdf-lib";
import fs from "fs";
import path from "path";

const BASE_URL = "http://localhost:3099/pitch";
const SLIDE_COUNT = 10;
const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;
const OUTPUT_DIR = path.resolve("public/pitch");
const SCREENSHOTS_DIR = path.resolve("/tmp/pitch-slides");

async function captureSlides() {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: SLIDE_WIDTH, height: SLIDE_HEIGHT });

  console.log("Navigating to pitch page...");
  await page.goto(BASE_URL, { waitUntil: "networkidle0", timeout: 30000 });

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

  for (let i = 0; i < SLIDE_COUNT; i++) {
    console.log(`Capturing slide ${i + 1}/${SLIDE_COUNT}...`);
    await new Promise((r) => setTimeout(r, 500));

    // Screenshot the slide element (.ps) inside the presentation content
    const slideEl = await page.$(".deck-pres-content > .ps");
    const filePath = path.join(SCREENSHOTS_DIR, `slide-${String(i + 1).padStart(2, "0")}.png`);

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

    if (i < SLIDE_COUNT - 1) {
      await page.keyboard.press("ArrowRight");
      await new Promise((r) => setTimeout(r, 300));
    }
  }

  await browser.close();
  console.log(`Captured ${screenshots.length} slides.`);
  return screenshots;
}

async function generatePDF(screenshots) {
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

  const pdfBytes = await pdfDoc.save();
  const outPath = path.join(OUTPUT_DIR, "pitch-deck.pdf");
  fs.writeFileSync(outPath, pdfBytes);
  console.log(`PDF saved: ${outPath} (${(pdfBytes.length / 1024 / 1024).toFixed(2)} MB)`);
}

async function generatePPTX(screenshots) {
  console.log("Generating PPTX...");
  const pptx = new PptxGenJS();

  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Walt";
  pptx.company = "Embedded Engineering ApS";
  pptx.subject = "Walt Pitch Deck";
  pptx.title = "Walt - Private Tap-to-Pay";

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

  const outPath = path.join(OUTPUT_DIR, "walt-pitch.pptx");
  await pptx.writeFile({ fileName: outPath });
  console.log(`PPTX saved: ${outPath}`);
}

async function main() {
  console.log("=== Walt Pitch Deck Export ===\n");

  const screenshots = await captureSlides();
  await generatePDF(screenshots);
  await generatePPTX(screenshots);

  console.log("\nDone! Files updated in public/pitch/");
}

main().catch((err) => {
  console.error("Export failed:", err);
  process.exit(1);
});
