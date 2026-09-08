import { Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { heroStatement, profile } from '../data/content.js';
import profileImage from '../public/my_profile.png';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-eyebrow">
        <span className="hero-status-dot" aria-hidden="true" />
        available for work
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <h1>
            {heroStatement.split('technical problems')[0]}
            <span className="accent">technical problems</span>
            {heroStatement.split('technical problems')[1]}
          </h1>
          <p className="hero-intro">
            IT Support &amp; Systems Technician focused on dependable infrastructure,
            clear troubleshooting, and practical solutions.
            <span className="hero-credential">{profile.credential}</span>
          </p>
          <div className="hero-actions" aria-label="Contact actions">
            <a className="cta-button cta-primary" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
              <MessageCircle size={16} strokeWidth={1.75} />
              WhatsApp me
            </a>
            <a className="cta-button" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} strokeWidth={1.75} />
              LinkedIn
            </a>
            <a className="cta-button" href={`mailto:${profile.email}`}>
              <Mail size={16} strokeWidth={1.75} />
              Email me
            </a>
            <a className="cta-button" href="#contact">
              <Phone size={16} strokeWidth={1.75} />
              Contact details
            </a>
          </div>
        </div>
        <img
          className="hero-image"
          src={profileImage}
          alt={`Portrait of ${profile.name}`}
        />
      </div>
      <div className="hero-meta">
        <span>
          <MapPin size={14} strokeWidth={1.75} />
          {profile.location}
        </span>
        <span>
          <Phone size={14} strokeWidth={1.75} />
          {profile.phone}
        </span>
      </div>
    </section>
  );
}
