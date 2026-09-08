import { skillGroups } from '../data/content.js';

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-heading">Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.label}>
            <p className="skill-label">{group.label}</p>
            <div className="skill-chips">
              {group.items.map((item) => (
                <span className="skill-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
