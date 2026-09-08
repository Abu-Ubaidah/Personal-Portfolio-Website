import { Trophy, Award, Star } from 'lucide-react';
import { achievements } from '../data/content.js';

const icons = [Trophy, Award, Star];

export default function Achievements() {
  return (
    <section id="achievements">
      <h2 className="section-heading">Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <li key={item}>
              <span className="ach-icon" aria-hidden="true">
                <Icon size={14} strokeWidth={1.75} />
              </span>
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
