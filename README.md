# Walt Waitlist Signup

A Next.js landing page with waitlist signup functionality using Vercel and Resend Audiences.

## Overview

Walt is the open source alternative to Google Wallet and Google Pay. This repository contains the waitlist signup page with integrated email collection.

## Setup Instructions

### 1. Resend Configuration

1. Create account at [Resend](https://resend.com)
2. Get API key from [API Keys page](https://resend.com/api-keys)
3. Create an audience at [Audiences page](https://resend.com/audiences)
4. Copy the audience ID from the audience settings

### 2. Environment Variables

1. Copy `.env.example` to `.env.local`
2. Fill in your Resend API key and audience ID:
```
RESEND_API_KEY=re_xxxxxxxxx
RESEND_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### 3. Development

```bash
# Install dependencies
npm install

# Start Next.js development server
npm run dev

# The site will be available at http://localhost:3000
```

### 4. Deployment to Vercel

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Add environment variables in Vercel project settings:
   - `RESEND_API_KEY`
   - `RESEND_AUDIENCE_ID`
4. Deploy!

## Features

- ✅ Responsive Next.js application
- ✅ AJAX form submission without page reload  
- ✅ Email validation and duplicate prevention
- ✅ Success/error user feedback
- ✅ Loading states
- ✅ Next.js API routes for serverless API
- ✅ Direct integration with Resend Audiences

## API Endpoint

`POST /api/subscribe`
- Validates email format
- Prevents duplicate subscriptions
- Creates contact in Resend audience
- Returns JSON response with success/error status

## File Structure

```
walt-signup/
├── pages/
│   ├── _app.js               # Next.js app configuration
│   ├── index.js              # Main landing page
│   └── api/
│       └── subscribe.js      # API route for form submissions
├── styles/
│   └── globals.css           # Global styles
├── next.config.js            # Next.js configuration
├── vercel.json               # Vercel configuration
├── package.json              # Dependencies
└── .env.example              # Environment variables template
```
