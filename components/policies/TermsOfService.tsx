import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="terms-content prose dark:prose-invert max-w-none">
      <h2>Terms of Service</h2>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h3>1. Introduction</h3>
      <p>
        Welcome to Supernova ("we," "our," or "us"). By accessing or using our website, services, applications, or any other content we provide (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). Please read these Terms carefully.
      </p>

      <h3>2. Definitions</h3>
      <p>
        <strong>"Blockchain"</strong> refers to the Supernova blockchain network, a proof-of-work blockchain implementation written in Rust.
      </p>
      <p>
        <strong>"Content"</strong> means any information, text, graphics, photos, or other materials uploaded, downloaded, or appearing on the Services.
      </p>
      <p>
        <strong>"User," "you," or "your"</strong> refers to any individual or entity using our Services.
      </p>

      <h3>3. Acceptance of Terms</h3>
      <p>
        By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
      </p>

      <h3>4. Eligibility</h3>
      <p>
        You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you have the legal capacity to enter into these Terms.
      </p>

      <h3>5. Services Description</h3>
      <p>
        Supernova is a production-grade proof-of-work blockchain implementation written in Rust. It leverages Rust's safety features and performance characteristics to provide a secure, efficient, and modular blockchain platform.
      </p>

      <h3>6. User Accounts</h3>
      <p>
        Some features of our Services may require you to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
      </p>
      <p>
        You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
      </p>

      <h3>7. Intellectual Property Rights</h3>
      <p>
        Unless otherwise indicated, the Services and all content and other materials contained therein, including, without limitation, the Supernova logo and all designs, text, graphics, pictures, information, data, software, and other files are the proprietary property of Supernova or our licensors and are protected by international intellectual property laws.
      </p>

      <h3>8. User Content</h3>
      <p>
        You retain ownership of any intellectual property rights that you hold in content you submit to the Services. By submitting content to the Services, you grant us a worldwide, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the content in connection with the Services.
      </p>

      <h3>9. Prohibited Conduct</h3>
      <p>
        You agree not to:
      </p>
      <ul>
        <li>Violate any applicable law or regulation</li>
        <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation</li>
        <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
        <li>Attempt to gain unauthorized access to any portion of the Services</li>
        <li>Use the Services for any illegal or unauthorized purpose</li>
        <li>Engage in any activity that could disable, overburden, or impair the proper working of the Services</li>
      </ul>

      <h3>10. Disclaimer of Warranties</h3>
      <p>
        THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
      </p>

      <h3>11. Limitation of Liability</h3>
      <p>
        IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
      </p>

      <h3>12. Indemnification</h3>
      <p>
        You agree to defend, indemnify, and hold harmless Supernova and its officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from your use of the Services.
      </p>

      <h3>13. Governing Law</h3>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Supernova is incorporated, without regard to its conflict of law provisions.
      </p>

      <h3>14. Changes to Terms</h3>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
      </p>

      <h3>15. Contact Us</h3>
      <p>
        If you have any questions about these Terms, please contact us at legal@supernovanetwork.xyz.
      </p>
    </div>
  );
};

export default TermsOfService; 