import { ArrowUpRight, Globe, Headphones, Activity, MessageCircle, Network } from 'lucide-react';
import { projects } from '../data/content.js';

const projectIcons = {
  helpdesk: Headphones,
  monitoring: Activity,
  chat: MessageCircle,
  network: Network,
};

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className={`project${project.featured ? ' featured' : ''}`} key={project.name}>
            <div className="project-head">
              <div className="project-title">
                <span className="project-icon" aria-hidden="true">
                  {(() => {
                    const Icon = projectIcons[project.icon] || Globe;
                    return <Icon size={17} strokeWidth={1.8} />;
                  })()}
                </span>
                <h3>{project.name}</h3>
              </div>
              <span className="project-status">
                <span className={`dot status-${project.status}`} aria-hidden="true" />
                {project.statusLabel}
              </span>
            </div>

            <p className="project-desc">{project.description}</p>

            <dl className="project-metrics">
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>{project.result}</dd>
              </div>
            </dl>

            <ul className="project-points">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="project-footer">
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.liveHref && (
                  <a className="project-link primary" href={project.liveHref} target="_blank" rel="noreferrer">
                    <Globe size={13} strokeWidth={1.75} />
                    Live
                  </a>
                )}
                {project.githubHref ? (
                  <a className="project-link" href={project.githubHref} target="_blank" rel="noreferrer">
                    GitHub
                    <ArrowUpRight size={13} strokeWidth={1.75} />
                  </a>
                ) : (
                  <span className="project-link project-link-placeholder" aria-disabled="true">
                    GitHub
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
