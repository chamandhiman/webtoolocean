import React, { useState, useEffect, useRef } from 'react';

interface ProductItem {
  icon: string;
  label: string;
  desc: string;
  href: string;
  accent: 'red' | 'purple';
}

const products: ProductItem[] = [
  {
    icon: 'fa-solid fa-hammer',
    label: 'Website Builder',
    desc: 'Build with 120+ templates',
    href: 'https://builder.webtoolocean.com/',
    accent: 'red',
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    label: 'Website Scanner',
    desc: 'Scan and audit any website',
    href: 'https://scan.webtoolocean.com/',
    accent: 'purple',
  },
  {
    icon: 'fa-solid fa-puzzle-piece',
    label: 'Website Widgets',
    desc: '51 ready-to-install widgets',
    href: 'https://widgets.webtoolocean.com/',
    accent: 'red',
  },
  {
    icon: 'fa-solid fa-file-pdf',
    label: 'PDF Editor',
    desc: 'Edit, merge, sign and convert',
    href: 'https://pdf.webtoolocean.com/',
    accent: 'purple',
  },
  {
    icon: 'fa-solid fa-image',
    label: 'Image Tools',
    desc: 'Compress, resize and convert',
    href: 'https://image.webtoolocean.com/',
    accent: 'red',
  },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  /* hover: open immediately, delay close to allow moving into dropdown */
  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <nav
      className="top"
      aria-label="Main"
      style={scrolled ? { boxShadow: '0 6px 32px rgba(0,0,0,.12)' } : {}}
    >
      {/* Official WebToolOcean Logo */}
      <a className="logo" href="#top" aria-label="WebToolOcean home">
        <img src="/logo.png" alt="WebToolOcean" />
      </a>

      {/* Navigation Links */}
      <div className="links">
        {/* Products Dropdown */}
        <div
          className="nav-dropdown-wrap"
          ref={menuRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            ref={triggerRef}
            className={`nav-trigger ${open ? 'active' : ''}`}
            aria-haspopup="true"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            type="button"
          >
            <span>Products</span>
            <i
              className="fa-solid fa-chevron-down nav-chevron"
              aria-hidden="true"
              style={{
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.25s ease',
              }}
            ></i>
          </button>

          {/* Dropdown Panel */}
          <div
            className={`nav-panel ${open ? 'nav-panel-open' : ''}`}
            role="menu"
            aria-label="Products submenu"
          >
            {products.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-item nav-item-${p.accent}`}
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                <div className={`nav-item-icon nav-icon-${p.accent}`}>
                  <i className={p.icon} aria-hidden="true"></i>
                </div>
                <div className="nav-item-body">
                  <span className="nav-item-label">{p.label}</span>
                  <span className="nav-item-desc">{p.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#products">Resources</a>

        <a className="btn pri sm" href="#contact">
          <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
          <span>Start a project</span>
        </a>
      </div>
    </nav>
  );
};
