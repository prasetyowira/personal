// Vercel Serverless Function for Turnstile verification
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }
  
  try {
    // Get token from request
    const formData = await parseFormData(req);
    const token = formData['cf-turnstile-response'];
    
    // Return error if no token provided
    if (!token) {
      return res.status(400).json({
        success: false,
        error: 'Turnstile token is missing'
      });
    }

    // Get secret key from environment variable
    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    
    if (!secretKey) {
      console.error('TURNSTILE_SECRET_KEY is not defined');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error'
      });
    }

    // Verify the token with Cloudflare API
    const verificationResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          secret: secretKey,
          response: token,
        })
      }
    );

    const verificationResult = await verificationResponse.json();

    // Return response based on verification result
    if (verificationResult.success) {
      return res.status(200).json({
        success: true,
        message: 'Turnstile verification successful'
      });
    } else {
      console.error('Turnstile verification failed:', verificationResult);
      return res.status(400).json({
        success: false,
        error: 'Turnstile verification failed',
        details: verificationResult['error-codes']
      });
    }
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error during verification'
    });
  }
}

// Helper function to parse form data from request
async function parseFormData(req) {
  return new Promise((resolve) => {
    const data = {};
    
    // Handle form data in body
    if (req.body) {
      // If body is already parsed as JSON
      if (typeof req.body === 'object') {
        return resolve(req.body);
      }
      
      // If body is a string, try to parse as JSON
      if (typeof req.body === 'string') {
        try {
          return resolve(JSON.parse(req.body));
        } catch (e) {
          // Not JSON, might be URL encoded form
          const params = new URLSearchParams(req.body);
          params.forEach((value, key) => {
            data[key] = value;
          });
          return resolve(data);
        }
      }
    }
    
    // Simple handling for multipart form data
    if (req.headers['content-type']?.includes('multipart/form-data')) {
      // We'd need a more robust parser for multipart form data
      // This is just a simple implementation
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        // Extract the token from multipart form data
        const match = body.match(/name="cf-turnstile-response"\r\n\r\n([^\r\n]+)/);
        if (match && match[1]) {
          data['cf-turnstile-response'] = match[1];
        }
        resolve(data);
      });
    } else {
      // If none of the above, return empty object
      resolve(data);
    }
  });
} 