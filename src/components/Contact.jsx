import { Mail, Phone, Linkedin, Github, MapPin, MessageCircle } from 'lucide-react';
import { profile } from '../data/content.js';

const rows = [
  {
    href: `https://wa.me/${profile.whatsapp}`,
    Icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Message me on WhatsApp',
    external: true,
  },
  { href: `mailto:${profile.email}`, Icon: Mail, label: 'Email', value: profile.email, external: false },
  { href: `tel:${profile.phone.replace(/\s+/g, '')}`, Icon: Phone, label: 'Phone', value: profile.phone, external: false },
  { href: profile.linkedin, Icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/abu-ubaidah', external: true },
  { href: profile.github, Icon: Github, label: 'GitHub', value: 'github.com/Abu-Ubaidah', external: true },
];

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-heading">Contact</h2>
      <div className="contact-list">
        {rows.map(({ href, Icon, label, value, external }) => (
          <a
            key={label}
            className="contact-row"
            href={href}
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            <span className="contact-icon-wrap" aria-hidden="true">
              <Icon size={16} strokeWidth={1.75} />
            </span>
            <span>
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
            </span>
          </a>
        ))}
        <div className="contact-row" style={{ cursor: 'default' }}>
          <span className="contact-icon-wrap" aria-hidden="true">
            <MapPin size={16} strokeWidth={1.75} />
          </span>
          <span>
            <span className="contact-label">Location</span>
            <span className="contact-value">{profile.location}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
