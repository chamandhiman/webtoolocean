import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="top" aria-label="Main">
      <a className="logo" href="#top" aria-label="WebToolOcean home">
        <i className="fa-solid fa-water"></i>WebToolOcean
      </a>
      <div className="links">
        <a href="#products">Products</a>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a className="btn pri sm" href="#contact">
          <i className="fa-solid fa-paper-plane"></i>Start a project
        </a>
      </div>
    </nav>
  );
};
