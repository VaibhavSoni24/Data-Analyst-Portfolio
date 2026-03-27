import styles from './Education.module.css';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Arya College of Engineering, Jaipur',
    affiliation: 'RTU Kota',
    period: '2023 – 2027',
    status: '3rd Year · 6th Semester',
    cgpa: '8.83',
    cgpaTrend: '7.71 → 8.83',
    color: '#6dddff',
    highlights: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Software Engineering',
      'Machine Learning Basics',
      'Statistical Analysis',
    ],
  },
];

const certifications = [
  {
    title: 'Summer Analytics Program',
    issuer: 'IIT Guwahati',
    year: '2024',
    badge: 'Top 25%',
    color: '#f59e0b',
  },
  {
    title: 'MS SQL Training',
    issuer: 'Intellipaat',
    year: '2024',
    badge: 'Certified',
    color: '#6dddff',
  },
  {
    title: 'Data Science & Analytics',
    issuer: 'HP Life',
    year: '2024',
    badge: 'Certified',
    color: '#8dedec',
  },
  {
    title: 'Python Essential Training',
    issuer: 'LinkedIn Learning',
    year: '2024',
    badge: 'Certified',
    color: '#82a3ff',
  },
  {
    title: 'Software Engineering Simulation',
    issuer: 'Accenture (Forage)',
    year: '2024',
    badge: 'Completed',
    color: '#a855f7',
  },
];

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: 'var(--bg-low)' }}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">Academic Background</p>
          <h2 className="section-title">Education & <span>Certifications</span></h2>
        </div>

        <div className={styles.layout}>
          {/* Education */}
          <div className={styles.eduSection}>
            <h3 className={styles.sectionLabel}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Academic Degree
            </h3>

            {education.map((edu, i) => (
              <div key={i} className={`${styles.eduCard} glass-card`}>
                <div className={styles.eduTop}>
                  <div className={styles.eduIcon} style={{ borderColor: `${edu.color}44`, background: `${edu.color}0d` }}>
                    🎓
                  </div>
                  <div className={styles.eduInfo}>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.institution}>{edu.institution}</p>
                    <p className={styles.affiliation}>{edu.affiliation}</p>
                  </div>
                </div>

                <div className={styles.eduMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Period</span>
                    <span className={styles.metaValue}>{edu.period}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Status</span>
                    <span className={styles.metaValue}>{edu.status}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>CGPA</span>
                    <span className={styles.metaValue} style={{ color: edu.color }}>{edu.cgpa}</span>
                  </div>
                </div>

                {/* CGPA Trend bar */}
                <div className={styles.cgpaTrend}>
                  <div className={styles.trendLabel}>
                    <span>CGPA Trend</span>
                    <span style={{ color: edu.color }}>{edu.cgpaTrend} ↑</span>
                  </div>
                  <div className={styles.trendBar}>
                    <div className={styles.trendFill} style={{ width: `${(8.83 / 10) * 100}%`, background: `linear-gradient(to right, ${edu.color}88, ${edu.color})` }} />
                  </div>
                </div>

                <div className={styles.highlights}>
                  {edu.highlights.map(h => (
                    <span key={h} className="tag">{h}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className={styles.certSection}>
            <h3 className={styles.sectionLabel}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
              Certifications
            </h3>

            <div className={styles.certList}>
              {certifications.map((cert, i) => (
                <div key={i} className={`${styles.certCard} glass-card`}>
                  <div className={styles.certLeft}>
                    <div className={styles.certIcon} style={{ color: cert.color }}>🏅</div>
                    <div>
                      <p className={styles.certTitle}>{cert.title}</p>
                      <p className={styles.certIssuer}>{cert.issuer} · {cert.year}</p>
                    </div>
                  </div>
                  <span className={styles.certBadge} style={{ color: cert.color, borderColor: `${cert.color}44`, background: `${cert.color}11` }}>
                    {cert.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
