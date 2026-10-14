import { useState } from 'react';

// Skill logos
import html5 from '../../assets/logos/html5.svg';
import css3 from '../../assets/logos/css3.svg';
import javascript from '../../assets/logos/javascript.svg';
import typescript from '../../assets/logos/typescript.svg';
import python from '../../assets/logos/python.svg';
import react from '../../assets/logos/react.svg';
import nextjs from '../../assets/logos/nextjs.svg';
import remix from '../../assets/logos/remix.svg';
import redux from '../../assets/logos/redux.svg';
import reactquery from '../../assets/logos/reactquery.svg';
import fastapi from '../../assets/logos/fastapi.svg';
import nodejs from '../../assets/logos/nodejs.svg';
import restapi from '../../assets/logos/restapi.svg';
import chartjs from '../../assets/logos/chartjs.svg';
import livekit from '../../assets/logos/livekit.svg';
import socketio from '../../assets/logos/socketio.svg';
import tailwindcss from '../../assets/logos/tailwindcss.svg';
import bootstrap from '../../assets/logos/bootstrap.svg';
import shopify from '../../assets/logos/shopify.svg';
import wordpress from '../../assets/logos/wordpress.svg';

// Tool logos
import aws from '../../assets/logos/aws.svg';
import docker from '../../assets/logos/docker.svg';
import github from '../../assets/logos/github.svg';
import cicd from '../../assets/logos/cicd.svg';
import postgresql from '../../assets/logos/postgresql.svg';
import supabase from '../../assets/logos/supabase.svg';
import prisma from '../../assets/logos/prisma.svg';
import plpgsql from '../../assets/logos/plpgsql.svg';
import git from '../../assets/logos/git.svg';
import vercel from '../../assets/logos/vercel.svg';
import mcp from '../../assets/logos/mcp.svg';
import npm from '../../assets/logos/npm.svg';
import webpack from '../../assets/logos/webpack.svg';
import slack from '../../assets/logos/slack.svg';

const skillsList = [
  { name: 'HTML5', icon: html5 },
  { name: 'CSS3', icon: css3 },
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'Python', icon: python },
  { name: 'React.js', icon: react },
  { name: 'Next.js', icon: nextjs },
  { name: 'Remix.js', icon: remix },
  { name: 'Redux', icon: redux },
  { name: 'React Query', icon: reactquery },
  { name: 'FastAPI', icon: fastapi },
  { name: 'Node.js', icon: nodejs },
  { name: 'REST APIs', icon: restapi },
  { name: 'Chart.js', icon: chartjs },
  { name: 'LiveKit', icon: livekit },
  { name: 'WebSockets', icon: socketio },
  { name: 'Tailwind CSS', icon: tailwindcss },
  { name: 'Bootstrap', icon: bootstrap },
  { name: 'Shopify Polaris', icon: shopify },
  { name: 'WordPress', icon: wordpress },
];

const toolsList = [
  { name: 'AWS', icon: aws },
  { name: 'Docker', icon: docker },
  { name: 'GitHub Actions', icon: github },
  { name: 'CI/CD', icon: cicd },
  { name: 'PostgreSQL', icon: postgresql },
  { name: 'Supabase', icon: supabase },
  { name: 'Prisma ORM', icon: prisma },
  { name: 'PL/pgSQL', icon: plpgsql },
  { name: 'Git', icon: git },
  { name: 'Vercel', icon: vercel },
  { name: 'MCP Servers', icon: mcp },
  { name: 'NPM', icon: npm },
  { name: 'Webpack', icon: webpack },
  { name: 'Slack', icon: slack },
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
          I build full stack AI-powered platforms end to end: React, Next.js, Remix and
          TypeScript on the frontend; FastAPI and PostgreSQL on the backend; deployed on AWS
          with Docker and CI/CD, plus real-time LiveKit and WebSocket integrations.
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
