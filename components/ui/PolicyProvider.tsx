import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  COOKIE_CONSENT_KEY, 
  TERMS_CONSENT_KEY, 
  PRIVACY_CONSENT_KEY,
  setConsentFor,
  hasConsentFor,
  isFirstTimeVisitor
} from '../../lib/policyConsent';
import PolicyModal from './PolicyModal';
import CookiePolicy from '../policies/CookiePolicy';
import TermsOfService from '../policies/TermsOfService';
import PrivacyPolicy from '../policies/PrivacyPolicy';
import PolicyButton from './PolicyButton';
import styles from '../layout/MainLayout.module.scss';

interface PolicyContextType {
  showTerms: () => void;
  showPrivacy: () => void;
  showCookies: () => void;
  hasTermsConsent: boolean;
  hasPrivacyConsent: boolean;
  hasCookieConsent: boolean;
  acceptAllPolicies: () => void;
}

const PolicyContext = createContext<PolicyContextType | undefined>(undefined);

export const usePolicies = () => {
  const context = useContext(PolicyContext);
  if (!context) {
    throw new Error('usePolicies must be used within a PolicyProvider');
  }
  return context;
};

interface PolicyProviderProps {
  children: React.ReactNode;
}

export const PolicyProvider: React.FC<PolicyProviderProps> = ({ children }) => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isCookiesOpen, setIsCookiesOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [hasTermsConsent, setHasTermsConsent] = useState(false);
  const [hasPrivacyConsent, setHasPrivacyConsent] = useState(false);
  const [hasCookieConsent, setHasCookieConsent] = useState(false);

  // Check consent status on mount
  useEffect(() => {
    setHasTermsConsent(hasConsentFor(TERMS_CONSENT_KEY));
    setHasPrivacyConsent(hasConsentFor(PRIVACY_CONSENT_KEY));
    setHasCookieConsent(hasConsentFor(COOKIE_CONSENT_KEY));
    
    // Show cookie banner for first-time visitors
    setShowCookieBanner(isFirstTimeVisitor());
  }, []);

  const acceptTerms = () => {
    setConsentFor(TERMS_CONSENT_KEY);
    setHasTermsConsent(true);
  };

  const acceptPrivacy = () => {
    setConsentFor(PRIVACY_CONSENT_KEY);
    setHasPrivacyConsent(true);
  };

  const acceptCookies = () => {
    setConsentFor(COOKIE_CONSENT_KEY);
    setHasCookieConsent(true);
    setShowCookieBanner(false);
  };

  const acceptAllPolicies = () => {
    acceptTerms();
    acceptPrivacy();
    acceptCookies();
    setShowCookieBanner(false);
  };

  const showTerms = () => setIsTermsOpen(true);
  const showPrivacy = () => setIsPrivacyOpen(true);
  const showCookies = () => setIsCookiesOpen(true);

  return (
    <PolicyContext.Provider
      value={{
        showTerms,
        showPrivacy,
        showCookies,
        hasTermsConsent,
        hasPrivacyConsent,
        hasCookieConsent,
        acceptAllPolicies,
      }}
    >
      {children}

      {/* Terms of Service Modal */}
      <PolicyModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Terms of Service"
        onAccept={acceptTerms}
      >
        <TermsOfService />
      </PolicyModal>

      {/* Privacy Policy Modal */}
      <PolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="Privacy Policy"
        onAccept={acceptPrivacy}
      >
        <PrivacyPolicy />
      </PolicyModal>

      {/* Cookie Policy Modal */}
      <PolicyModal
        isOpen={isCookiesOpen}
        onClose={() => setIsCookiesOpen(false)}
        title="Cookie Policy"
        onAccept={acceptCookies}
      >
        <CookiePolicy />
      </PolicyModal>

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-3/4 mb-4 lg:mb-0">
              <p>
                This website uses cookies to ensure you get the best experience. By using our website, you agree to our{' '}
                <PolicyButton type="terms" className={styles.footerLink}>Terms of Service</PolicyButton>,{' '}
                <PolicyButton type="privacy" className={styles.footerLink}>Privacy Policy</PolicyButton>, and{' '}
                <PolicyButton type="cookies" className={styles.footerLink}>Cookie Policy</PolicyButton>.
              </p>
            </div>
            <div className="w-full lg:w-1/4 flex justify-end space-x-4">
              <button
                onClick={() => setShowCookieBanner(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Decline
              </button>
              <button
                onClick={acceptAllPolicies}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </PolicyContext.Provider>
  );
};

export default PolicyProvider; 