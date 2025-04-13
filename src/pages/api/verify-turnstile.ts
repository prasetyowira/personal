import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const token = data.get('cf-turnstile-response');

    // Return error if no token provided
    if (!token) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Turnstile token is missing'
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Get secret key from environment variable
    const secretKey = import.meta.env.TURNSTILE_SECRET_KEY;
    
    if (!secretKey) {
      console.error('TURNSTILE_SECRET_KEY is not defined');
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Server configuration error'
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
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
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Turnstile verification successful'
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } else {
      console.error('Turnstile verification failed:', verificationResult);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Turnstile verification failed',
          details: verificationResult['error-codes']
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Server error during verification'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}; 