import { useEffect, useRef } from 'react';

const experienceData = [
  {
    role: 'Full Stack Developer',
    company: 'Mishkat Quantum Labs',
    type: 'Onsite',
    location: 'Karachi, Pakistan',
    duration: 'Oct 2025 – Present',
    isCurrent: true,
    points: [
      'Led architecture, data models, frontend/API contracts, and key product decisions across Mishkat VLE, Atlas (SIS), and Xyova, taking each from idea to production.',
      'Delivered real-time virtual classrooms with self-hosted LiveKit and WebSockets: presence-driven room join, participant controls, whiteboard sync and persistence, and mobile responsiveness in the Next.js / TypeScript app.',
      'Built learning features end to end: homework and classwork, assessments with school-wide mark categories and multiple grading modes, timetable file management, attendance, and multi-section student membership.',
      'Designed a layered FastAPI and PostgreSQL service architecture with AWS S3 file lockers and Cognito auth; shipped server-side pagination, recycle bin with cascade delete, and user disable-access handling.',
      'Built Xyova z-score analytics and dashboards with Chart.js, rubric activate/deactivate, a "needs human review" flag, OTP/auth flows, and a full landing-page redesign; managed the v1.5 release.',
      'Automated deployment pipelines and CI/CD with Docker, GitHub Actions, and AWS (EC2, S3, Lambda, ECS), and worked with AI backend engineers on MCP servers.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Crestotech',
    type: 'Remote',
    location: 'Islamabad, Pakistan',
    duration: 'May 2025 – Apr 2026',
    isCurrent: false,
    points: [
      'Built and maintained a Shopify B2B wholesale pricing platform with Remix, React.js, Shopify Polaris, and Prisma, covering custom wholesale price lists, tiered pricing, and merchant admin flows.',
      'Delivered client-facing pages, controllers, and dashboard flows in a SaaS React codebase and a Laravel-backed app.',
      'Converted Figma handoffs into responsive, high-quality interfaces with custom CSS, and delivered WordPress theme-based sites for clients.',
      'Engineered scalable, reusable UI components with React.js and Tailwind CSS, focused on performance and accessibility.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'NestedFor Software',
    type: 'Onsite',
    location: 'Islamabad, Pakistan',
    duration: 'Nov 2024 – Apr 2025',
    isCurrent: false,
    points: [
      'Built responsive production UIs in React.js for immigration-clinic and travel-booking platforms.',
      'Developed a job portal end to end on the MERN stack: responsive admin dashboard, job list / detail pages, applicant and shortlisting flows, user and provider management, and profile and auth sections.',
      'Converted design specifications into maintainable code and reusable components for seamless cross-device experiences.',
    ],
  },
  {
    role: 'Frontend Developer (Internship)',
    company: 'CodeSoft',
    type: 'Internship',
    location: 'Pakistan',
    duration: 'Feb 2024 – Jun 2024',
    isCurrent: false,
    points: [
      'Built real-world frontend logic and reusable, responsive, performance-optimized components with JavaScript, React.js, and Redux.',
    ],
  },
];

const Experience = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for card reveal
    const cards = timelineRef.current?.querySelectorAll('.exp-timeline-item');
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    cards.forEach((card) => observer.observe(card));

    // Scroll-based line drawing
    const updateLine = () => {
      if (!timelineRef.current || !lineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const timelineHeight = timelineRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = Math.max(0, -rect.top + viewportHeight * 0.5);
      const progress = Math.min(scrolled / timelineHeight, 1);
      lineRef.current.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener('scroll', updateLine, { passive: true });
    updateLine();

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      window.removeEventListener('scroll', updateLine);
    };
  }, []);

  return (
    <section className="exp-section" id="experience">
      <div className="exp-section-header">
        <p className="exp-section-label">Experience</p>
        <h2 className="exp-section-title">Places I've Built Things</h2>
      </div>

      <div className="exp-timeline" ref={timelineRef}>
        {/* Animated line */}
        <div className="exp-timeline-line">
          <div className="exp-timeline-line-fill" ref={lineRef}></div>
        </div>

        {experienceData.map((exp, index) => (
          <div
            key={index}
            className={`exp-timeline-item${index % 2 === 0 ? ' left' : ' right'}${exp.isCurrent ? ' current' : ''}`}
          >
            {/* Dot on the line */}
            <div className="exp-timeline-dot">
              {exp.isCurrent && <span className="exp-dot-ping"></span>}
            </div>

            {/* Card */}
            <div className="exp-timeline-card">
              <div className="exp-card-row">
                <span className="exp-card-type">{exp.type}</span>
                <time className="exp-card-duration">{exp.duration}</time>
              </div>

              <h3 className="exp-card-role">{exp.role}</h3>

              <p className="exp-card-company">
                {exp.company}
                <span className="exp-card-location">
                  <ion-icon name="location-outline"></ion-icon>
                  {exp.location}
                </span>
              </p>

              <ul className="exp-card-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
