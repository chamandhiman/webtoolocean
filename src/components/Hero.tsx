import React, { useState, useEffect, useCallback, useRef } from 'react';

interface Slide {
  id: string;
  color: string;
  pillIcon: string;
  pillText: string;
  title: React.ReactNode;
  desc: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  secondaryBtnText: string;
  secondaryBtnHref: string;
  domain: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  priority?: boolean;
}

const slides: Slide[] = [
  {
    id: 'builder',
    color: '#ffc933',
    pillIcon: 'fa-solid fa-hammer',
    pillText: 'Website Builder',
    title: (
      <>
        Create your website <span>free</span>
      </>
    ),
    desc: 'Pick from 120+ templates, edit live in your browser and download clean HTML or React code.',
    primaryBtnText: 'Create website free',
    primaryBtnHref: 'https://builder.webtoolocean.com/',
    secondaryBtnText: 'See how it works',
    secondaryBtnHref: '#products',
    domain: 'builder.webtoolocean.com',
    imageSrc: '/img/builder.webp',
    imageAlt: 'Website Builder: create a website free with 120+ templates',
    imageWidth: 1100,
    imageHeight: 482,
    priority: true,
  },
  {
    id: 'widgets',
    color: '#b48cff',
    pillIcon: 'fa-solid fa-puzzle-piece',
    pillText: 'Widgets Studio',
    title: (
      <>
        Add <span>widgets</span> in seconds
      </>
    ),
    desc: 'WhatsApp chat, Google reviews, popups and 48 more. Copy one snippet and paste it into any site.',
    primaryBtnText: 'Add widgets',
    primaryBtnHref: 'https://widgets.webtoolocean.com/',
    secondaryBtnText: 'Browse all 51',
    secondaryBtnHref: '#products',
    domain: 'widgets.webtoolocean.com',
    imageSrc: '/img/widgets.webp',
    imageAlt: 'Widgets Studio: add WhatsApp chat, reviews and popups',
    imageWidth: 1100,
    imageHeight: 700,
  },
  {
    id: 'pdf',
    color: '#ff5a5f',
    pillIcon: 'fa-solid fa-file-pdf',
    pillText: 'PDF Studio',
    title: (
      <>
        Edit any <span>PDF</span> online
      </>
    ),
    desc: 'Edit, sign, merge, split, compress and convert PDFs with no install and no watermarks.',
    primaryBtnText: 'Edit a PDF free',
    primaryBtnHref: 'https://pdf.webtoolocean.com/',
    secondaryBtnText: 'Need a custom build?',
    secondaryBtnHref: '#services',
    domain: 'pdf.webtoolocean.com',
    imageSrc: '/img/pdf.webp',
    imageAlt: 'PDF Studio: edit, sign and convert PDFs online',
    imageWidth: 1100,
    imageHeight: 684,
  },
];

export const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progKey, setProgKey] = useState(0);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + slides.length) % slides.length);
    setProgKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion.current) return;

    const timer = setTimeout(() => {
      goTo(current + 1);
    }, 6000);

    return () => clearTimeout(timer);
  }, [current, isPaused, goTo]);

  const currentColor = slides[current].color;

  return (
    <header
      className="hero"
      id="top"
      style={{ '--c': currentColor } as React.CSSProperties}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setProgKey((k) => k + 1);
      }}
    >
      <div className="wrap hg">
        <div>
          <h1 className="sr">WebToolOcean: web design, development and free web tools</h1>
          <div className="stack">
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className={`st ${idx === current ? 'on' : ''}`}
                data-c={slide.color}
              >
                <div className="pill">
                  <i className={slide.pillIcon}></i>
                  {slide.pillText}
                </div>
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
                <div className="cta">
                  <a
                    className="btn pri"
                    href={slide.primaryBtnHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {slide.primaryBtnText} <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <a className="btn ghost2" href={slide.secondaryBtnHref}>
                    {slide.secondaryBtnText}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="ctrl">
            <button
              className="arrow"
              id="prev"
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(current - 1)}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <div className="dots" id="dots">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  className={`dot ${idx === current ? 'on' : ''}`}
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => goTo(idx)}
                />
              ))}
            </div>
            <button
              className="arrow"
              id="next"
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(current + 1)}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="vis">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`vf ${idx === current ? 'on' : ''}`}
              style={{ '--fc': slide.color } as React.CSSProperties}
            >
              <div className="bar">
                <b></b>
                <b></b>
                <b></b>
                <em>{slide.domain}</em>
              </div>
              <img
                src={slide.imageSrc}
                width={slide.imageWidth}
                height={slide.imageHeight}
                alt={slide.imageAlt}
                fetchPriority={slide.priority ? 'high' : undefined}
                decoding="async"
              />
            </div>
          ))}

          <div className="fchip" style={{ left: '-18px', top: '6%' }}>
            <i className="fa-solid fa-gift"></i>Free to start
          </div>
          <div
            className="fchip"
            style={{ right: '-10px', top: '30%', animationDelay: '-2s' }}
          >
            <i className="fa-solid fa-chart-line"></i>SEO ready
          </div>
          <div
            className="fchip"
            style={{ left: '6%', bottom: '2%', animationDelay: '-4s' }}
          >
            <i className="fa-solid fa-wand-magic-sparkles"></i>No code needed
          </div>
        </div>
      </div>

      <div
        key={progKey}
        className={`prog ${!isPaused ? 'run' : ''}`}
        id="prog"
      ></div>
    </header>
  );
};
