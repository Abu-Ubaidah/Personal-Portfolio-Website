import { profile } from '../data/content.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <span>
        {profile.name}, {year}
      </span>
      <span>{profile.location}</span>
    </footer>
  );
}
