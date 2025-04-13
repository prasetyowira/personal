/**
 * Type definitions for Cloudflare Turnstile
 */

// Globals added by Cloudflare Turnstile script
declare global {
  interface Window {
    turnstile: TurnstileObject;
  }
}

export interface TurnstileObject {
  /**
   * Renders a Turnstile widget to the given container
   */
  render: (container: string | HTMLElement, options: TurnstileOptions) => string;
  
  /**
   * Resets a Turnstile widget with the given widget ID
   */
  reset: (widgetId?: string) => void;
  
  /**
   * Returns the response token from the Turnstile widget
   */
  getResponse: (widgetId?: string) => string | undefined;
  
  /**
   * Removes a Turnstile widget with the given widget ID
   */
  remove: (widgetId: string) => void;
}

export interface TurnstileOptions {
  /**
   * Your Turnstile site key
   */
  sitekey: string;
  
  /**
   * A custom callback function that is invoked when the user completes a challenge
   */
  callback?: (token: string) => void;
  
  /**
   * Theme of the widget
   */
  theme?: 'light' | 'dark' | 'auto';
  
  /**
   * Language of the widget
   */
  language?: string;
  
  /**
   * Custom data to pass to the verification API endpoint
   */
  'cData'?: string;
  
  /**
   * Custom data to pass to the verification API endpoint
   */
  action?: string;
  
  /**
   * A callback function that is called when errors occur
   */
  'error-callback'?: () => void;
  
  /**
   * A callback function that is invoked when the token expires
   */
  'expired-callback'?: () => void;
  
  /**
   * Whether to automatically refresh the token when it expires
   */
  'refresh-expired'?: 'auto' | 'manual' | 'never';
  
  /**
   * A callback function that is invoked when the widget is closed without completion
   */
  'timeout-callback'?: () => void;
}

export interface TurnstileVerificationResponse {
  /**
   * Whether the verification was successful
   */
  success: boolean;
  
  /**
   * A list of error codes if the verification failed
   */
  'error-codes'?: string[];
  
  /**
   * The challenge timestamp
   */
  challenge_ts?: string;
  
  /**
   * The hostname of the site where the challenge was solved
   */
  hostname?: string;
  
  /**
   * The Turnstile action
   */
  action?: string;
  
  /**
   * The Turnstile cData
   */
  cdata?: string;
} 