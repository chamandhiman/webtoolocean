import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [copyText, setCopyText] = useState('Copy email address');

  const handleCopyEmail = async () => {
    const email = 'webtoolocean@gmail.com';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
        setCopyText('Copied!');
      } else {
        // Fallback for non-https/legacy contexts
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopyText('Copied!');
      }
    } catch {
      setCopyText(email);
    }

    setTimeout(() => {
      setCopyText('Copy email address');
    }, 2000);
  };

  return (
    <section id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="build rv">
          <div>
            <h2>We build products. Got an idea?</h2>
            <p>
              If there’s a tool you wish existed, or a website or app your business
              needs, tell us. We turn good ideas into working products.
            </p>
          </div>
          <div className="panel">
            <small>Email us your idea</small>
            <a
              className="mail"
              href="mailto:webtoolocean@gmail.com?subject=I%20have%20a%20product%20idea"
            >
              webtoolocean@gmail.com
            </a>
            <a
              className="btn"
              href="mailto:webtoolocean@gmail.com?subject=I%20have%20a%20product%20idea&amp;body=Hi%20WebToolOcean%2C%0A%0AMy%20idea%3A%0A"
            >
              <i className="fa-solid fa-lightbulb"></i>Share your idea
            </a>
            <button
              className="btn ghost"
              id="copy"
              type="button"
              onClick={handleCopyEmail}
            >
              <i className="fa-regular fa-copy"></i>
              <span>{copyText}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
