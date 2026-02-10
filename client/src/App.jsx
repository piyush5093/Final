import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionCard from './components/SectionCard';

const emptyPortfolio = {
  fullName: '',
  title: '',
  about: '',
  location: '',
  contact: {},
  skills: {},
  experience: [],
  projects: [],
  education: []
};

export default function App() {
  const [data, setData] = useState(emptyPortfolio);
  const [source, setSource] = useState('loading');

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_BASE || 'http://localhost:5000';
    fetch(`${apiBase}/api/portfolio`)
      .then((res) => res.json())
      .then((payload) => {
        setData(payload.portfolio || emptyPortfolio);
        setSource(payload.source || 'fallback');
      })
      .catch(() => setSource('offline'));
  }, []);

  const skillGroups = useMemo(() => Object.entries(data.skills || {}), [data.skills]);

  return (
    <div className="app-shell">
      <div className="mesh mesh-a" />
      <div className="mesh mesh-b" />
      <main>
        <motion.header
          className="hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge"><Sparkles size={16} /> Advanced MERN Portfolio</span>
          <h1>{data.fullName || 'Loading...'}</h1>
          <p className="title">{data.title}</p>
          <p className="about">{data.about}</p>
          <div className="chips">
            <span>{data.location}</span>
            <span>Data Source: {source}</span>
          </div>
          <div className="links">
            {['linkedin', 'github', 'leetcode'].map((platform) => (
              <a key={platform} href={data.contact?.[platform] || '#'} target="_blank" rel="noreferrer">
                {platform} <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </motion.header>

        <div className="grid">
          <SectionCard title="Skills">
            <div className="stack-grid">
              {skillGroups.map(([group, values]) => (
                <div key={group}>
                  <h3>{group}</h3>
                  <p>{values.join(' • ')}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Experience">
            {data.experience.map((exp) => (
              <article className="item" key={`${exp.company}-${exp.role}`}>
                <h3><BriefcaseBusiness size={16} /> {exp.role}</h3>
                <strong>{exp.company}</strong>
                <small>{exp.timeline}</small>
                <ul>{exp.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
              </article>
            ))}
          </SectionCard>

          <SectionCard title="Projects">
            {data.projects.map((project) => (
              <article className="item" key={project.title}>
                <h3><Code2 size={16} /> {project.title}</h3>
                <p>{project.summary}</p>
                <small>{project.impact}</small>
                <div className="tags">
                  {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </article>
            ))}
          </SectionCard>

          <SectionCard title="Education">
            {data.education.map((edu) => (
              <article className="item" key={`${edu.degree}-${edu.timeline}`}>
                <h3><GraduationCap size={16} /> {edu.degree}</h3>
                <p>{edu.institute}</p>
                <small>{edu.score} • {edu.timeline}</small>
              </article>
            ))}
          </SectionCard>
        </div>
      </main>
    </div>
  );
}
