import React from 'react';
import TermsOfService from '../../../components/policies/TermsOfService';

export const metadata = {
  title: 'Terms of Service | Supernova',
  description: 'Supernova Terms of Service - legal agreement governing your use of our platform',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <TermsOfService />
      </div>
    </div>
  );
} 