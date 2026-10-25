import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <span>
          © <span id="yr">{currentYear}</span> WebToolOcean. All rights reserved.
        </span>
        <nav aria-label="Products">
          <a
            href="https://builder.webtoolocean.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website Builder
          </a>
          <a
            href="https://pdf.webtoolocean.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF Studio
          </a>
          <a
            href="https://widgets.webtoolocean.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Widgets Studio
          </a>
          <a href="mailto:webtoolocean@gmail.com">Contact</a>
        </nav>
      </div>
    </footer>
  );
};
