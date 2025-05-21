import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-content prose dark:prose-invert max-w-none">
      <h2>Privacy Policy</h2>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h3>1. Introduction</h3>
      <p>
        Supernova ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
      </p>
      <p>
        Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
      </p>

      <h3>2. Information We Collect</h3>
      
      <h4>2.1 Personal Information</h4>
      <p>
        We may collect personal information that you voluntarily provide to us when you:
      </p>
      <ul>
        <li>Create an account or user profile</li>
        <li>Subscribe to our newsletter</li>
        <li>Contact us for support or other inquiries</li>
        <li>Participate in community forums or discussions</li>
        <li>Use our blockchain services</li>
      </ul>
      <p>
        This information may include your name, email address, username, wallet address, and other information you choose to provide.
      </p>

      <h4>2.2 Automatically Collected Information</h4>
      <p>
        When you access or use our Services, we may automatically collect certain information, including:
      </p>
      <ul>
        <li>Device information such as your IP address, browser type, operating system</li>
        <li>Usage data such as pages visited, time spent on pages, links clicked</li>
        <li>Blockchain transaction data that is publicly visible on the Supernova blockchain</li>
        <li>Cookies and similar tracking technologies (see our Cookie Policy for more details)</li>
      </ul>

      <h3>3. How We Use Your Information</h3>
      <p>
        We may use the information we collect for various purposes, including:
      </p>
      <ul>
        <li>Providing, maintaining, and improving our Services</li>
        <li>Processing and completing blockchain transactions</li>
        <li>Sending administrative information, updates, and security alerts</li>
        <li>Responding to your comments, questions, and requests</li>
        <li>Monitoring and analyzing trends, usage, and activities</li>
        <li>Detecting, preventing, and addressing technical issues and fraudulent activities</li>
        <li>Complying with legal obligations</li>
      </ul>

      <h3>4. Sharing Your Information</h3>
      <p>
        We may share your information in the following situations:
      </p>
      <ul>
        <li><strong>Public Blockchain Data:</strong> Transactions on the Supernova blockchain are public and visible to anyone with access to the blockchain.</li>
        <li><strong>Service Providers:</strong> We may share information with third-party vendors and service providers who perform services on our behalf.</li>
        <li><strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities.</li>
        <li><strong>Business Transfers:</strong> We may share information in connection with a merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
        <li><strong>With Your Consent:</strong> We may share information with your consent or at your direction.</li>
      </ul>

      <h3>5. Data Security</h3>
      <p>
        We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h3>6. Your Privacy Rights</h3>
      <p>
        Depending on your location, you may have certain rights regarding your personal information:
      </p>
      <ul>
        <li>Access to your personal information</li>
        <li>Correction of inaccurate or incomplete information</li>
        <li>Deletion of your personal information</li>
        <li>Restriction of processing of your personal information</li>
        <li>Data portability</li>
        <li>Objection to processing of your personal information</li>
        <li>Withdrawal of consent</li>
      </ul>
      <p>
        To exercise these rights, please contact us at privacy@supernovanetwork.xyz.
      </p>

      <h3>7. International Data Transfers</h3>
      <p>
        Your information may be transferred to, and maintained on, computers located outside your state, province, country, or other governmental jurisdiction where data protection laws may differ. If you are located outside the United States and choose to provide information to us, we may transfer your information to the United States and process it there.
      </p>

      <h3>8. Children's Privacy</h3>
      <p>
        Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us.
      </p>

      <h3>9. Changes to This Privacy Policy</h3>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
      </p>

      <h3>10. Contact Us</h3>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <p>
        Email: privacy@supernovanetwork.xyz
      </p>
    </div>
  );
};

export default PrivacyPolicy; 