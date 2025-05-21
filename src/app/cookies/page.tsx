import React from 'react';
import CookiePolicy from '../../../components/policies/CookiePolicy';

export const metadata = {
  title: 'Cookie Policy | Supernova',
  description: 'Supernova Cookie Policy - how we use cookies and similar technologies on our website',
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <CookiePolicy />
      </div>
    </div>
  );
} 