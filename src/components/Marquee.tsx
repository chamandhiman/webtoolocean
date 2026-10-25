import React from 'react';

const technologies = [
  { icon: 'fa-brands fa-html5', label: 'HTML5' },
  { icon: 'fa-brands fa-css3-alt', label: 'CSS3' },
  { icon: 'fa-brands fa-js', label: 'JavaScript' },
  { icon: 'fa-brands fa-react', label: 'React' },
  { icon: 'fa-brands fa-node-js', label: 'Node.js' },
  { icon: 'fa-brands fa-php', label: 'PHP' },
  { icon: 'fa-brands fa-wordpress', label: 'WordPress' },
  { icon: 'fa-brands fa-shopify', label: 'Shopify' },
  { icon: 'fa-brands fa-figma', label: 'Figma' },
  { icon: 'fa-brands fa-android', label: 'Android' },
  { icon: 'fa-brands fa-apple', label: 'iOS' },
  { icon: 'fa-brands fa-python', label: 'Python' },
];

export const Marquee: React.FC = () => {
  // Repeating list twice for seamless infinite scrolling animation as in original
  const fullList = [...technologies, ...technologies];

  return (
    <div className="marq" aria-hidden="true">
      <div className="track" id="track">
        {fullList.map((item, idx) => (
          <span key={idx}>
            <i className={item.icon}></i>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};
