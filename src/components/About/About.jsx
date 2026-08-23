import { useState, useEffect } from 'react';
import aboutLight from '../../assets/my-images/about-2.jfif';
import aboutDark from '../../assets/my-images/about-2-dark.jfif';
import resumePdf from '../../assets/Tayyab-resume.pdf';

const About = () => {
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
    <section className="about" id="about">
      <figure className="about-banner">
        <img
          src={isDark ? aboutDark : aboutLight}
          alt="Tayyab Ur Rehman - Frontend & Full Stack Developer"
          className="w-100"
        />
      </figure>

      <div className="about-content section-content">
        <p className="section-subtitle">About me</p>

        <h2 className="h3 section-title">Need a Creative Product? I can Help You!</h2>

        <p className="section-text">
          Hi! I'm Tayyab Ur Rehman, a Frontend Developer with 2+ years of experience building
          production web applications using React.js, Next.js, Remix, and TypeScript. Currently
          working as a Full Stack Developer building AI-powered platforms, deploying on AWS, and
          integrating real-time services with WebSockets and MCP servers. I'm focused on building
          reliable software through clean architecture, automation, and collaborative engineering
          practices.
        </p>

        <div className="btn-group">
          <a href="#contact" className="btn btn-secondary">Hire me</a>
          <a href={resumePdf} download="Tayyab-resume.pdf" className="btn btn-primary">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default About;
