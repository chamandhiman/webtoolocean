import React, { useEffect, useState } from 'react';

export const Loader: React.FC = () => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const handleDismiss = () => {
      // Smooth dismissal after application initialization
      setTimeout(() => {
        setIsDone(true);
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleDismiss();
    } else {
      window.addEventListener('load', handleDismiss);
      return () => window.removeEventListener('load', handleDismiss);
    }
  }, []);

  return (
    <div
      id="loader"
      className={isDone ? 'done' : ''}
      role="status"
      aria-live="polite"
      aria-label="Loading WebToolOcean"
    >
      <div className="ld-container">
        {/* Soft lavender/purple aura glow behind stationary container */}
        <div className="ld-glow" aria-hidden="true"></div>

        {/* Stationary soft rounded-square logo container */}
        <div className="ld-logo-box">
          <img
            src="/logo-icon.png"
            alt="WebToolOcean Icon"
            className="ld-logo-img"
            width={52}
            height={52}
          />
        </div>

        {/* Brand name: WebTool in dark navy + Ocean in brand gradient */}
        <div className="ld-brand" aria-label="WebToolOcean">
          <span className="ld-brand-dark">WebTool</span>
          <span className="ld-brand-accent">Ocean</span>
        </div>

        {/* Purple-to-magenta gradient progress bar */}
        <div className="ld-progress-track">
          <div className="ld-progress-bar"></div>
        </div>

        {/* Loading text headings */}
        <h2 className="ld-heading">Getting things ready...</h2>
        <p className="ld-subtext">Please wait a moment while we prepare your experience.</p>
      </div>

      {/* Soft pastel pink & lavender waves along the bottom */}
      <div className="ld-waves" aria-hidden="true">
        <svg
          viewBox="0 0 1440 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="pinkWaveGrad" x1="0%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#FCE7F3" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#FDF2F8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lavenderWaveGrad" x1="100%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#EDE9FE" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#F5F3FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Pastel pink wave from bottom-left */}
          <path
            d="M0 240V140C180 80 340 100 480 150C620 200 800 230 1000 190L1440 140V240H0Z"
            fill="url(#pinkWaveGrad)"
          />
          {/* Light lavender wave from bottom-right */}
          <path
            d="M1440 240V130C1260 70 1100 90 940 140C780 190 600 220 400 180L0 150V240H1440Z"
            fill="url(#lavenderWaveGrad)"
          />
        </svg>
      </div>
    </div>
  );
};
