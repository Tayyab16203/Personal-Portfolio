import mishkatVle from '../../assets/my-images/mishkat-vle.jpg';
import xyova from '../../assets/my-images/xyova.jpg';
import supportSystem from '../../assets/my-images/support-system.jpg';
import corakary from '../../assets/my-images/corakary.jpg';
import infinity from '../../assets/my-images/infinity.jpg';
import alphaRental from '../../assets/my-images/alpha-rental.jpg';
import sgiSteel from '../../assets/my-images/sgi-steel.jpg';
import project7 from '../../assets/images/project-7.png';

const projects = [
  {
    image: supportSystem,
    alt: 'Support System multi-project ticket platform landing page',
    title: 'Support System — Ticket Platform',
    date: '2025',
    datetime: '2025',
    link: 'https://support-system-mql.vercel.app/',
  },
  {
    image: corakary,
    alt: 'Corakary event rentals and catering booking platform landing page',
    title: 'Corakary — Inventory & Booking System',
    date: '2025',
    datetime: '2025',
    link: 'https://hamza-corakary.vercel.app/',
  },
  {
    image: xyova,
    alt: 'Xyova AI evaluation platform landing page',
    title: 'Xyova — AI Evaluation Platform',
    date: 'Core Builder',
    datetime: '2025',
    link: 'https://app.xyova.com',
  },
  {
    image: infinity,
    alt: 'Infinity Services International WordPress business website landing page',
    title: 'Infinity Services International (WordPress)',
    date: '2025',
    datetime: '2025',
    link: 'https://infinity.net.pk/',
  },
  {
    image: sgiSteel,
    alt: 'SGI Steel manufacturer website landing page',
    title: 'SGI Steel — Manufacturer Website',
    date: '2025',
    datetime: '2025',
    link: 'https://sgisteel.com.pk/',
  },
  {
    image: mishkatVle,
    alt: 'Mishkat VLE AI-powered school LMS landing page',
    title: 'Mishkat VLE — AI-Powered School LMS',
    date: 'Lead Engineer',
    datetime: '2025',
    link: 'https://mishkatvle.com/',
  },
  {
    image: alphaRental,
    alt: 'Alpha Rental Transport car booking website landing page',
    title: 'Alpha Rental Transport — Car Booking',
    date: '2025',
    datetime: '2025',
    link: 'https://alpharentaltransport.com/',
  },
  {
    image: project7,
    alt: 'MERN stack job portal platform',
    title: 'Job Portal (MERN Stack)',
    date: 'Nov 2024 – Apr 2025',
    datetime: '2024-11',
    link: '#',
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
              I build production-grade AI platforms and web applications end to end: from
              multi-branch LMS and AI evaluation systems to ticket platforms, Shopify
              integrations, real-time LiveKit video, and MCP servers.
            </p>
          </div>
        </li>

        {projects.map((project, index) => (
          <li key={index}>
            <a
              href={project.link}
              className="project-card"
              target={project.link !== '#' ? '_blank' : undefined}
              rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
            >
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
