import { Resend } from 'resend';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;
    
    // Debug: Log environment variables (first 4 characters only for security)
    console.log('Environment check:', {
      hasApiKey: !!process.env.RESEND_API_KEY,
      apiKeyPrefix: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 4) + '...' : 'undefined',
      hasAudienceId: !!process.env.RESEND_AUDIENCE_ID,
      audienceIdPrefix: process.env.RESEND_AUDIENCE_ID ? process.env.RESEND_AUDIENCE_ID.substring(0, 8) + '...' : 'undefined',
      nodeEnv: process.env.NODE_ENV
    });

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please provide a valid email address' 
      });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return res.status(500).json({ 
        success: false, 
        error: 'Server configuration error - API key missing' 
      });
    }

    if (!process.env.RESEND_AUDIENCE_ID) {
      console.error('RESEND_AUDIENCE_ID not configured');
      return res.status(500).json({ 
        success: false, 
        error: 'Server configuration error - audience ID missing' 
      });
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Create contact in Resend audience
    const { data, error } = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
      unsubscribed: false,
    });

    if (error) {
      console.error('Resend API error:', error);
      
      // Check if contact already exists
      if (error.message && error.message.includes('already exists')) {
        return res.status(200).json({ 
          success: true, 
          message: 'You are already on the waitlist!' 
        });
      }
      
      return res.status(400).json({ 
        success: false, 
        error: 'Failed to add email to waitlist. Please try again.' 
      });
    }

    console.log('Contact created successfully:', data);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Successfully joined the waitlist!',
      contactId: data.id 
    });

  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'An unexpected error occurred. Please try again.' 
    });
  }
}