import React from 'react';

interface ProductItem {
  id: string;
  color: string;
  tagIcon: string;
  tagText: string;
  title: string;
  desc: string;
  features: { icon: string; text: string }[];
  buttonText: string;
  buttonHref: string;
  domain: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  isFlip?: boolean;
  keywords: string;
}

const products: ProductItem[] = [
  {
    id: 'builder',
    color: '#ffc933',
    tagIcon: 'fa-solid fa-hammer',
    tagText: 'Website Builder',
    title: 'Pick a template. Edit it live. Download the code.',
    desc: '120+ responsive templates for real estate, cafés, SaaS, fitness and more. Click any heading or image to change it, then export clean HTML or React.',
    features: [
      { icon: 'fa-solid fa-circle-check', text: 'Live editing in your browser' },
      { icon: 'fa-brands fa-react', text: 'Export HTML or React' },
      { icon: 'fa-solid fa-gauge-high', text: 'Mobile friendly and SEO ready' },
    ],
    buttonText: 'Open Website Builder',
    buttonHref: 'https://builder.webtoolocean.com/',
    domain: 'builder.webtoolocean.com',
    imageSrc: '/img/builder.webp',
    imageAlt: 'WebToolOcean Website Builder: download HTML or React with 120+ templates',
    imageWidth: 1100,
    imageHeight: 482,
    keywords:
      'website builder templates html react export landing page business portfolio café saas real estate fitness no code edit download site design hosting premium widgets seo responsive',
  },
  {
    id: 'pdf',
    color: '#ff5a5f',
    tagIcon: 'fa-solid fa-file-pdf',
    tagText: 'PDF Studio',
    title: 'Every PDF tool you need, right in the browser.',
    desc: 'Edit text, sign documents, merge, split, compress and convert. Your files stay private and there are no watermarks.',
    features: [
      { icon: 'fa-solid fa-pen-to-square', text: 'Edit text and sign contracts' },
      { icon: 'fa-solid fa-object-group', text: 'Merge, split and compress' },
      { icon: 'fa-solid fa-right-left', text: 'Convert to Word, Excel and JPG' },
    ],
    buttonText: 'Open PDF Studio',
    buttonHref: 'https://pdf.webtoolocean.com/',
    domain: 'pdf.webtoolocean.com',
    imageSrc: '/img/pdf.webp',
    imageAlt: 'PDF Studio: edit, sign, merge and convert PDF files online',
    imageWidth: 1100,
    imageHeight: 684,
    isFlip: true,
    keywords:
      'pdf studio editor edit merge split compress convert word excel powerpoint jpg png sign stamp rotate delete pages reorder extract ocr protect unlock watermark page numbers document contract invoice resume form',
  },
  {
    id: 'widgets',
    color: '#b48cff',
    tagIcon: 'fa-solid fa-puzzle-piece',
    tagText: 'Website Widgets Studio',
    title: 'Add powerful widgets to any site in minutes.',
    desc: 'Google reviews, WhatsApp chat, countdown timers, popups and 40+ more. Customise live, copy one snippet, and you’re done.',
    features: [
      { icon: 'fa-brands fa-whatsapp', text: '51 ready-to-install widgets' },
      { icon: 'fa-solid fa-eye', text: 'Live preview, no code' },
      { icon: 'fa-brands fa-wordpress', text: 'Works on WordPress, Shopify and Wix' },
    ],
    buttonText: 'Open Widgets Studio',
    buttonHref: 'https://widgets.webtoolocean.com/',
    domain: 'widgets.webtoolocean.com',
    imageSrc: '/img/widgets.webp',
    imageAlt: 'Website Widgets Studio: add WhatsApp chat, reviews and popups to any website',
    imageWidth: 1100,
    imageHeight: 700,
    keywords:
      'widgets website widgets whatsapp chat google reviews facebook yelp tripadvisor trustpilot instagram feed countdown timer faq popup cookie consent newsletter contact form announcement bar maps testimonials social icons embed snippet shopify wordpress wix webflow',
  },
];

export const Products: React.FC = () => {
  return (
    <section id="products">
      <div className="wrap">
        <div className="head rv">
          <h2>
            Our products, <span className="grad">live now</span>
          </h2>
          <p>Three tools built by WebToolOcean. Each runs on its own site and is free to start.</p>
        </div>
        <div className="count" id="count" aria-live="polite"></div>

        {products.map((item) => (
          <article
            key={item.id}
            className={`show ${item.isFlip ? 'flip' : ''} rv`}
            style={{ '--c': item.color } as React.CSSProperties}
            data-k={item.keywords}
          >
            <div className="txt">
              <div className="tag">
                <i className={item.tagIcon}></i>
                {item.tagText}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul className="feat">
                {item.features.map((feat, idx) => (
                  <li key={idx}>
                    <i className={feat.icon}></i>
                    {feat.text}
                  </li>
                ))}
              </ul>
              <a
                className="btn"
                href={item.buttonHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.buttonText} <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="frame">
              <div className="bar">
                <b></b>
                <b></b>
                <b></b>
                <em>{item.domain}</em>
              </div>
              <img
                src={item.imageSrc}
                width={item.imageWidth}
                height={item.imageHeight}
                alt={item.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
