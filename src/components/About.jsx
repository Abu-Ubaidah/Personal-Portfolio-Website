import { about } from '../data/content.js';

export default function About() {
  return (
    <section id="about">
      <h2 className="section-heading">About</h2>
      <div className="about">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul className="strengths">
          {about.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
