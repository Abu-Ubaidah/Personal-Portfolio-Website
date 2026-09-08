import { ExternalLink } from 'lucide-react';
import { certificates } from '../data/content.js';

export default function Certificates() {
  return (
    <section id="certificates">
      <h2 className="section-heading">Certificates &amp; Specializations</h2>
      <div className="certs-grid">
        {certificates.map((cert) => (
          <a
            key={cert.title}
            className="cert-card"
            href={cert.href}
            target="_blank"
            rel="noreferrer"
          >
          <div className="cert-issuer-row">
            <span className="cert-issuer">{cert.issuer}</span>
          </div>
            <p className="cert-title">{cert.title}</p>
            <span className="cert-meta">
              {cert.type} — {cert.platform}{cert.note ? ` — ${cert.note}` : ''}
            </span>
            <div className="cert-link-row">
              View credential
              <ExternalLink size={12} strokeWidth={1.75} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
