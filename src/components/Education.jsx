import { education } from '../data/content.js';

export default function Education() {
  return (
    <section id="education">
      <h2 className="section-heading">Education</h2>
      {education.map((item) => (
        <div className="edu-item" key={item.credential}>
          <div>
            <h3>{item.credential}</h3>
            <p className="edu-school">{item.school}</p>
            {item.note && <p className="edu-note">{item.note}</p>}
          </div>
          <div className="edu-meta">
            <div>{item.period}</div>
            <div className="edu-detail">{item.detail}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
