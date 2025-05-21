// Cookie names
export const COOKIE_CONSENT_KEY = 'supernova-cookie-consent';
export const TERMS_CONSENT_KEY = 'supernova-terms-consent';
export const PRIVACY_CONSENT_KEY = 'supernova-privacy-consent';

// Check if a cookie exists
export const hasCookie = (name: string): boolean => {
  if (typeof window === 'undefined') return false;
  
  const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  return cookies.some(cookie => cookie.startsWith(`${name}=`));
};

// Set a cookie with an expiration date
export const setCookie = (name: string, value: string, expirationDays: number = 365): void => {
  if (typeof window === 'undefined') return;
  
  const date = new Date();
  date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
};

// Delete a cookie
export const deleteCookie = (name: string): void => {
  if (typeof window === 'undefined') return;
  
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax`;
};

// Set consent for a specific policy
export const setConsentFor = (policyKey: string): void => {
  setCookie(policyKey, 'true');
};

// Check if user has given consent to a specific policy
export const hasConsentFor = (policyKey: string): boolean => {
  return hasCookie(policyKey);
};

// Set consent for all policies
export const setAllConsents = (): void => {
  setConsentFor(COOKIE_CONSENT_KEY);
  setConsentFor(TERMS_CONSENT_KEY);
  setConsentFor(PRIVACY_CONSENT_KEY);
};

// Check if first-time visitor (no consents set)
export const isFirstTimeVisitor = (): boolean => {
  return !hasCookie(COOKIE_CONSENT_KEY) && 
         !hasCookie(TERMS_CONSENT_KEY) && 
         !hasCookie(PRIVACY_CONSENT_KEY);
}; 