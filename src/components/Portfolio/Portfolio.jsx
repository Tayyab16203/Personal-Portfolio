import project1 from '../../assets/images/project-1.png';
import project2 from '../../assets/images/project-2.png';
import project3 from '../../assets/images/project-3.png';
import project4 from '../../assets/images/project-4.png';
import project5 from '../../assets/images/project-5.png';
import project6 from '../../assets/images/project-6.png';
import project7 from '../../assets/images/project-7.png';

const projects = [
  {
    image: project1,
    alt: 'MCP Servers project for GitHub, Jira and Discord',
    title: 'MCP Servers (GitHub, Jira & Discord)',
    date: '2025',
    datetime: '2025',
  },
  {
    image: project2,
    alt: 'PostKit AI Workflow Framework',
    title: 'PostKit — AI Workflow Framework',
    date: '2025',
    datetime: '2025',
  },
  {
    image: project3,
    alt: 'AI-Powered Platform at Mishkat Quantum Lab',
    title: 'AI-Powered Platform (Mishkat Quantum Lab)',
    date: 'Oct 2025 – Present',
    datetime: '2025-10',
  },
  {
    image: project4,
    alt: 'Shopify Wholesale Project',
    title: 'Shopify Wholesale Project',
    date: 'May 2025 – Apr 2026',
    datetime: '2025-05',
  },
  {
    image: project5,
    alt: 'LMS Platform with Real-time Data Visualization',
    title: 'LMS Platform & AI Report Generation',
    date: '2025',
    datetime: '2025',
  },
  {
    image: project6,
    alt: 'Immigration Clinic & Travel Booking Platform',
    title: 'Immigration Clinic & Travel Booking',
    date: 'Nov 2024 – Apr 2025',
    datetime: '2024-11',
  },
  {
    image: project7,
    alt: 'Livekit WebSocket Real-Time Communication',
    title: 'Livekit WebSocket Integration',
    date: '2025',
    datetime: '2025',
  },
];

const Portfolio = () => {
  return (
    <section className="project" id="portfolio">
      <ul className="project-list">
        <li>
          <div className="project-content section-content">
            <p className="section-subtitle">My Works</p>
            <h2 className="h3 section-title">See My Works Which Will Amaze You!</h2>
            <p className="section-text">
              I build production-grade web applications, AI-powered platforms, and open-source
              tools. From Shopify integrations to real-time WebSocket systems and MCP servers.
            </p>
          </div>
        </li>

        {projects.map((project, index) => (
          <li key={index}>
            <a href="#" className="project-card">
              <figure className="card-banner">
                <img src={project.image} className="w-100" alt={project.alt} />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">{project.title}</h3>
                <time className="publish-date" dateTime={project.datetime}>
                  {project.date}
                </time>
              </div>
            </a>
          </li>
        ))}

        <li>
          <button className="load-more">Load more work</button>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
