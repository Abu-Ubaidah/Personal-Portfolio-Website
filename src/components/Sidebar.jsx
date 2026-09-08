import { Github, Linkedin, Mail } from 'lucide-react';
import { profile, sections } from '../data/content.js';
import profileImage from '../public/my_profile.png';
import secondProfileImage from '../public/second_profile.png';

export default function Sidebar({ activeSection, onNavigate }) {
  return (
    <aside className="rail">
      <div className="rail-top">
        <img
          className="rail-avatar"
          src={secondProfileImage}
          alt={`Portrait of ${profile.name}`}
        />
        <p className="rail-credential">Certified Full Stack Software Engineer</p>
        <p className="name">{profile.name}</p>
        <p className="role">
          {profile.role}
          <br />
          {profile.subRole}
        </p>

        <nav className="rail-nav" aria-label="Section navigation">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`rail-nav-item${activeSection === section.id ? ' active' : ''}`}
              onClick={() => onNavigate(section.id)}
            >
              <span className="dot" aria-hidden="true" />
              {section.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="rail-bottom">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={15} strokeWidth={1.75} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={15} strokeWidth={1.75} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <Mail size={15} strokeWidth={1.75} />
        </a>
      </div>
    </aside>
  );
}
