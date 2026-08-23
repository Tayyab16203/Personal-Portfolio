import { useState, useEffect } from 'react';
import heroLight from '../../assets/my-images/hero-banner-light.jfif';
import heroDark from '../../assets/my-images/hero-banner-dark.jfif';

const Hero = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') !== 'light_theme';
  });

  useEffect(() => {
    setIsDark(document.body.classList.contains('dark_theme'));
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark_theme'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="home">
      <figure className="hero-banner">
        <img
          src={isDark ? heroDark : heroLight}
          alt="Tayyab Ur Rehman - Frontend & Full Stack Developer"
          className="w-100"
        />
      </figure>

      <div className="hero-content">
        <h2 className="h2 hero-title">I Design &amp; Build Modern Web Products</h2>
        <a href="#contact" className="btn btn-primary">Get in touch</a>
      </div>

      <ul className="hero-social-list">
        <li>
          <a href="https://www.linkedin.com/in/tayyab-ur-rehman-dev" className="hero-social-link" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-linkedin"></ion-icon>
            <div className="tooltip">LinkedIn</div>
          </a>
        </li>
        <li>
          <a href="https://github.com/Tayyab16203" className="hero-social-link" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-github"></ion-icon>
            <div className="tooltip">GitHub</div>
          </a>
        </li>
        <li>
          <a href="mailto:rehmantayyab0340@gmail.com" className="hero-social-link">
            <ion-icon name="mail-outline"></ion-icon>
            <div className="tooltip">Email</div>
          </a>
        </li>
      </ul>

      <a href="#stats" className="scroll-down">Scroll</a>
    </section>
  );
};

export default Hero;
