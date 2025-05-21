import React from 'react';
import PrivacyPolicy from '../../../components/policies/PrivacyPolicy';

export const metadata = {
  title: 'Privacy Policy | Supernova',
  description: 'Supernova Privacy Policy - how we collect, use, and protect your personal information',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <PrivacyPolicy />
      </div>
    </div>
  );
} 