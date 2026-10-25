import React, { useEffect, useState } from 'react';

export const Loader: React.FC = () => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Hide after initial mount delay similar to original JS
    const timer = setTimeout(() => {
      setIsDone(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="loader"
      className={isDone ? 'done' : ''}
      role="status"
      aria-label="Loading"
    >
      <div className="ld">
        <div className="orb">
          <i className="fa-solid fa-water"></i>
        </div>
        <b>WebToolOcean</b>
        <div className="bar">
          <span></span>
        </div>
      </div>
    </div>
  );
};
