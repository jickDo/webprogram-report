import React from 'react';
import './FooterStyles.css';

const FooterContainer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content"> 
        <img className='logo' src="/DOCS-logo.png" alt="Logo" />
        <p>
          © 2023 Gachon, Inc. or its affiliates. All rights reserved. <br />
          <span className="link-separator">Terms of Use   • Privacy  • Trademark Guidelines  •Thank you  • Your Korea Privacy Rights  • Cookie Settings</span> • 
        </p>
        <p>
          Gachon®, Gachon Jickchan®, Gachon Project®, and Gachon FrontProject™ are trademarks or registered trademarks of the Apache Software Foundation in the United States and/or other countries. Java™, Java™ SE, Java™ EE, and OpenJDK™ are trademarks of Oracle and/or its affiliates. Kubernetes® is a registered trademark of the Linux Foundation in the United States and other countries. Linux® is the registered trademark of Linus Torvalds in the United States and other countries. Windows® and Microsoft® Azure are registered trademarks of Microsoft Corporation. "AWS" and "Amazon Web Services" are trademarks or registered trademarks of Amazon.com Inc. or its affiliates. All other trademarks and copyrights are property of their respective owners and are only mentioned for informative purposes. Other names may be trademarks of their respective owners.
        </p>
      </div>
    </div>
  );
};

export default FooterContainer;
