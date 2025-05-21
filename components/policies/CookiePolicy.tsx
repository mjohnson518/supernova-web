import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="cookie-content prose dark:prose-invert max-w-none">
      <h2>Cookie Policy</h2>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h3>1. Introduction</h3>
      <p>
        This Cookie Policy explains how Supernova ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
      </p>

      <h3>2. What are Cookies?</h3>
      <p>
        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
      </p>
      <p>
        Cookies set by the website owner (in this case, Supernova) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., analytics, advertising, and interactive content).
      </p>

      <h3>3. Why Do We Use Cookies?</h3>
      <p>
        We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons for our website to operate (essential cookies), while others are used to track and target the interests of visitors to our website to enhance the experience on our website (performance and functionality cookies, analytics cookies, targeting and advertising cookies). The specific types of cookies we use are explained below.
      </p>

      <h3>4. Types of Cookies We Use</h3>
      
      <h4>4.1 Essential Cookies</h4>
      <p>
        These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms. These cookies do not store any personally identifiable information.
      </p>
      <p>
        Examples of essential cookies we use:
      </p>
      <ul>
        <li>Authentication cookies to remember your login status</li>
        <li>Security cookies to prevent cross-site request forgery attacks</li>
        <li>Cookie consent cookies to remember your cookie preferences</li>
      </ul>

      <h4>4.2 Performance and Functionality Cookies</h4>
      <p>
        These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous.
      </p>
      <p>
        Examples of performance and functionality cookies we use:
      </p>
      <ul>
        <li>Load balancing cookies</li>
        <li>Website feature preference cookies</li>
        <li>Session state cookies</li>
      </ul>

      <h4>4.3 Analytics Cookies</h4>
      <p>
        These cookies allow us to understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the way our website works.
      </p>
      <p>
        Examples of analytics cookies we use:
      </p>
      <ul>
        <li>Google Analytics cookies to track user engagement and website usage</li>
        <li>Heatmap tracking cookies to understand user behavior on pages</li>
      </ul>

      <h4>4.4 Targeting and Advertising Cookies</h4>
      <p>
        These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device.
      </p>

      <h3>5. How Can You Control Cookies?</h3>
      <p>
        You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner.
      </p>
      
      <p>
        You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
      </p>

      <h4>Browser Settings</h4>
      <p>
        Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
      </p>
      <p>
        To opt out of being tracked by Google Analytics across all websites, visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
      </p>

      <h3>6. How Often Will We Update This Cookie Policy?</h3>
      <p>
        We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
      </p>
      <p>
        The date at the top of this Cookie Policy indicates when it was last updated.
      </p>

      <h3>7. Where Can You Get Further Information?</h3>
      <p>
        If you have any questions about our use of cookies or other technologies, please contact us at:
      </p>
      <p>
        Email: privacy@supernovanetwork.xyz
      </p>
    </div>
  );
};

export default CookiePolicy; 