import { useState, useEffect } from 'react';
import aboutLight from '../../assets/my-images/about-2.jfif';
import aboutDark from '../../assets/my-images/about-2-dark.jfif';
import resumePdf from '../../assets/Tayyab-Ur-Rehman-CV.pdf';

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
      <figure className="about-banner theme-img-stack">
        <img
          src={aboutDark}
          alt="Tayyab Ur Rehman - Full Stack Developer"
          className={`w-100 theme-img${isDark ? ' is-visible' : ''}`}
        />
        <img
          src={aboutLight}
          alt=""
          aria-hidden="true"
          className={`w-100 theme-img${!isDark ? ' is-visible' : ''}`}
        />
      </figure>

      <div className="about-content section-content">
        <p className="section-subtitle">About me</p>

        <h2 className="h3 section-title">Need a Creative Product? I can Help You!</h2>

        <p className="section-text">
          Hi! I'm Tayyab Ur Rehman, a Full Stack Developer who takes AI-powered web platforms
          from raw idea to high-scale production: framing the problem, designing the system,
          owning the architecture, and shipping to real users. I build end to end with React,
          Next.js, Remix and TypeScript on the frontend; FastAPI and PostgreSQL on the backend;
          deployed on AWS with Docker and CI/CD.
        </p>

        <p className="section-text">
          I'm lead engineer on Mishkat VLE, a multi-branch school LMS, and a core builder on
          Xyova, an AI evaluation platform. My workflow is fully agentic and automated:
          spec-first design, AI coding agents orchestrated over the Model Context Protocol, and
          automated tests and CI/CD, so I stay focused on architecture, review, and delivery.
        </p>

        <div className="btn-group">
          <a href="#contact" className="btn btn-secondary">Hire me</a>
          <a href={resumePdf} download="Tayyab-Ur-Rehman-CV.pdf" className="btn btn-primary">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default About;
