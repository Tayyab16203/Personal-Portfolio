import { useState } from 'react';

import html5 from '../../assets/images/html5.png';
import css3 from '../../assets/images/css3.png';
import javascript from '../../assets/images/javascript.png';
import typescript from '../../assets/images/typescript.png';
import bootstrap from '../../assets/images/bootstrap.png';
import reactImg from '../../assets/images/react.png';
import firebase from '../../assets/images/firebase.png';
import sass from '../../assets/images/sass.png';

import git from '../../assets/images/git.png';
import npm from '../../assets/images/npm.png';
import command from '../../assets/images/command.png';
import vsCode from '../../assets/images/vs-code.png';
import webpack from '../../assets/images/webpack.png';
import slack from '../../assets/images/slack.png';

const skillsList = [
  { name: 'HTML5', icon: html5 },
  { name: 'CSS3', icon: css3 },
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'React.js', icon: reactImg },
  { name: 'Next.js', icon: reactImg },
  { name: 'Remix.js', icon: reactImg },
  { name: 'Bootstrap', icon: bootstrap },
  { name: 'Tailwind CSS', icon: css3 },
  { name: 'Firebase', icon: firebase },
  { name: 'SASS', icon: sass },
  { name: 'Python', icon: javascript },
];

const toolsList = [
  { name: 'Git', icon: git },
  { name: 'GitHub Actions', icon: git },
  { name: 'Docker', icon: command },
  { name: 'AWS', icon: firebase },
  { name: 'Webpack', icon: webpack },
  { name: 'NPM', icon: npm },
  { name: 'VS Code', icon: vsCode },
  { name: 'PostgreSQL', icon: command },
  { name: 'Prisma', icon: command },
  { name: 'Vercel', icon: command },
  { name: 'Slack', icon: slack },
  { name: 'CI/CD', icon: git },
];

const Skills = () => {
  const [showTools, setShowTools] = useState(false);

  const handleToggle = (isTools) => {
    setShowTools(isTools);
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-content section-content">
        <p className="section-subtitle">My skills</p>

        <h2 className="h3 section-title">What My Programming Skills Included?</h2>

        <p className="section-text">
          I develop modern, responsive, and performant web applications using React.js, Next.js,
          Remix, and TypeScript. I also build full stack AI-powered platforms with AWS cloud
          services and real-time integrations.
        </p>

        <div className={`skills-toggle${showTools ? ' active' : ''}`}>
          <button
            className={`toggle-btn${!showTools ? ' active' : ''}`}
            onClick={() => handleToggle(false)}
          >
            Skills
          </button>
          <button
            className={`toggle-btn${showTools ? ' active' : ''}`}
            onClick={() => handleToggle(true)}
          >
            Tools
          </button>
        </div>
      </div>

      <div className={`skills-box${showTools ? ' active' : ''}`}>
        <ul className="skills-list">
          {skillsList.map((skill, index) => (
            <li key={index}>
              <div className="skill-card">
                <div className="tooltip">{skill.name}</div>
                <div className="card-icon">
                  <img src={skill.icon} alt={`${skill.name} logo`} />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className="tools-list">
          {toolsList.map((tool, index) => (
            <li key={index}>
              <div className="skill-card">
                <div className="tooltip">{tool.name}</div>
                <div className="card-icon">
                  <img src={tool.icon} alt={`${tool.name} logo`} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
