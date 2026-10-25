import React from 'react';

interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
  keywords: string;
}

const services: ServiceItem[] = [
  {
    icon: 'fa-solid fa-pen-ruler',
    title: 'Web Design',
    desc: 'Clean, modern layouts that look sharp on every screen and guide visitors to act.',
    keywords: 'web design ui ux interface layout figma mockup wireframe',
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Web Development',
    desc: 'Fast, secure websites built from scratch or on the platform that suits you.',
    keywords: 'web development website custom cms wordpress php javascript',
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Front-End Development',
    desc: 'Pixel-perfect HTML, CSS, JavaScript and React interfaces that feel smooth.',
    keywords: 'front-end frontend html css javascript react vue tailwind responsive',
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Back-End and APIs',
    desc: 'Databases, logins, payments and APIs that keep your product running reliably.',
    keywords: 'back-end backend api server database node php python integration',
  },
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'App Design',
    desc: 'Intuitive mobile and web app screens, prototypes and design systems.',
    keywords: 'app design mobile app ui ux ios android prototype screens',
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'App Development',
    desc: 'iOS, Android and cross-platform apps, from first idea to store launch.',
    keywords: 'app development mobile app ios android flutter react native',
  },
  {
    icon: 'fa-solid fa-palette',
    title: 'Graphic Design',
    desc: 'Social posts, banners, brochures and visuals that make your brand stand out.',
    keywords: 'graphic design poster flyer social media banner brochure creative',
  },
  {
    icon: 'fa-solid fa-bezier-curve',
    title: 'Logo and Branding',
    desc: 'Memorable logos and brand kits so people recognise you instantly.',
    keywords: 'logo branding brand identity colors typography guidelines',
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    title: 'E-commerce',
    desc: 'Online stores on Shopify, WooCommerce or custom code, ready to sell.',
    keywords: 'ecommerce e-commerce online store shop shopify woocommerce payments cart',
  },
  {
    icon: 'fa-solid fa-magnifying-glass-chart',
    title: 'SEO and Speed',
    desc: 'Technical SEO and performance tuning to help you rank and load fast.',
    keywords: 'seo search engine optimization ranking google speed performance keywords',
  },
  {
    icon: 'fa-brands fa-wordpress',
    title: 'WordPress and CMS',
    desc: 'Custom themes, plugins and easy-to-edit sites you can manage yourself.',
    keywords: 'wordpress cms theme plugin blog content management',
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench',
    title: 'Support and Maintenance',
    desc: 'Updates, security, backups and quick fixes so your site stays healthy.',
    keywords: 'maintenance support hosting updates security backup fix bugs redesign',
  },
];

export const Services: React.FC = () => {
  return (
    <section className="svc" id="services">
      <div className="wrap">
        <div className="head rv">
          <h2>
            What we build <span className="grad">for you</span>
          </h2>
          <p>
            Need something custom? Our team designs and develops everything from a
            single landing page to a full app.
          </p>
        </div>
        <div className="sgrid" id="sgrid">
          {services.map((svc, idx) => (
            <div key={idx} className="sc rv" data-k={svc.keywords}>
              <div className="ic">
                <i className={svc.icon}></i>
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </div>
          ))}
        </div>
        <div className="empty" id="empty">
          <h3>We don’t have that listed yet</h3>
          <p>Tell us what you need. If it’s about the web, we can probably build it.</p>
          <a
            className="btn pri"
            id="reqLink"
            href="mailto:webtoolocean@gmail.com"
          >
            <i className="fa-solid fa-envelope"></i>Ask us about it
          </a>
        </div>
      </div>
    </section>
  );
};
