import React from 'react';
import { usePolicies } from './PolicyProvider';

type PolicyType = 'terms' | 'privacy' | 'cookies';

interface PolicyButtonProps {
  type: PolicyType;
  className?: string;
  children?: React.ReactNode;
}

const PolicyButton: React.FC<PolicyButtonProps> = ({ 
  type, 
  className = '',
  children 
}) => {
  const { showTerms, showPrivacy, showCookies } = usePolicies();

  const handleClick = () => {
    switch (type) {
      case 'terms':
        showTerms();
        break;
      case 'privacy':
        showPrivacy();
        break;
      case 'cookies':
        showCookies();
        break;
      default:
        break;
    }
  };

  const getDefaultText = (): string => {
    switch (type) {
      case 'terms':
        return 'Terms of Service';
      case 'privacy':
        return 'Privacy Policy';
      case 'cookies':
        return 'Cookie Policy';
      default:
        return '';
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`appearance-none bg-transparent border-0 p-0 m-0 cursor-pointer ${className}`}
    >
      {children || getDefaultText()}
    </button>
  );
};

export default PolicyButton; 