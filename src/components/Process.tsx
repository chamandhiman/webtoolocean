import React from 'react';

const steps = [
  {
    icon: 'fa-regular fa-comments',
    title: '1. Talk',
    desc: 'Tell us your idea, goals and budget. We reply with a clear plan.',
  },
  {
    icon: 'fa-solid fa-pen-nib',
    title: '2. Design',
    desc: 'You see layouts and branding first and approve before we build.',
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: '3. Build',
    desc: 'We develop, test on real devices and share progress along the way.',
  },
  {
    icon: 'fa-solid fa-rocket',
    title: '4. Launch',
    desc: 'We go live, check speed and SEO, and stay on hand for support.',
  },
];

export const Process: React.FC = () => {
  return (
    <section id="process">
      <div className="wrap">
        <div className="head rv">
          <h2>From idea to launch in four steps</h2>
        </div>
        <div className="steps">
          {steps.map((step, idx) => (
            <div key={idx} className="step rv">
              <i className={step.icon}></i>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
