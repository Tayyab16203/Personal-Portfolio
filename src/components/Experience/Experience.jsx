import { useEffect, useRef } from 'react';

const experienceData = [
  {
    role: 'Full Stack Developer',
    company: 'Mishkat Quantum Lab',
    type: 'Onsite',
    location: 'Karachi, Pakistan',
    duration: 'Oct 2025 – Present',
    isCurrent: true,
    points: [
      'Build and maintain full stack features for AI-powered platforms using Next.js, FastAPI, and AWS cloud services.',
      'Develop frontend interfaces including Chart.js analytics dashboards, video/audio transcription views, and Livekit WebSocket integrations.',
      'Collaborate with AI Backend Engineers on MCP server development, deployment pipelines, and AWS infrastructure (EC2, S3, Lambda, ECS).',
      'Contribute to LMS platform development and AI-powered report generation applications with real-time data visualization.',
      'Support deployment and DevOps workflows using Docker, GitHub Actions, and CI/CD pipelines on AWS.',
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
      'Developed and maintained the Shopify Wholesale Project using Remix, React.js, Shopify Polaris, and Prisma for backend integrations.',
      'Designed and delivered WordPress theme-based websites ensuring responsiveness, clean code, and client satisfaction.',
      'Collaborated directly with clients to convert Figma designs into responsive, high-quality frontend solutions.',
      'Built scalable, reusable UI components using React.js, Tailwind CSS, and Shopify Polaris with focus on performance and accessibility.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'NestedFor Software',
    type: 'Remote',
    location: 'Islamabad, Pakistan',
    duration: 'Nov 2024 – Apr 2025',
    isCurrent: false,
    points: [
      'Created responsive and intuitive user interfaces for production web applications using React.js and modern frontend tools.',
      'Collaborated with cross-functional teams to convert design specifications into functional, maintainable frontend code.',
      'Developed reusable UI components ensuring seamless cross-device experiences for immigration clinic and travel booking platforms.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'CodeSoft',
    type: 'Internship',
    location: 'Pakistan',
    duration: 'Feb 2024 – Jun 2024',
    isCurrent: false,
    points: [
      'Built logic for solving real-world frontend problems using JavaScript, React.js, and Redux.',
      'Developed reusable components with responsive designs and optimized performance for cross-device compatibility.',
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
