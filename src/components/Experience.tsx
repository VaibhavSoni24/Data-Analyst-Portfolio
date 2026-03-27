import styles from './Experience.module.css';

const experience = [
  {
    title: 'AI Trainer Intern',
    company: 'Aerophantom',
    type: 'On-Site',
    location: 'Bijnor, UP, India',
    period: 'October 2025',
    color: '#6dddff',
    points: [
      'Trained students in AI automation concepts, sensors, and embedded system workflows',
      'Built automation-based systems using transistors and sensors for real-world use cases',
      'Explained real-world data flow from sensors to actionable outputs',
      'Introduced practical AI + hardware integration concepts',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'CollegeTips.in',
    type: 'Remote',
    location: 'Remote',
    period: 'June 2025',
    color: '#8dedec',
    points: [
      'Worked with real-world production data and APIs for dynamic content rendering',
      'Improved UI/data flow efficiency, optimizing data consumption',
      'Collaborated with team on structured data handling for frontend systems',
    ],
  },
  {
    title: 'Game Developer Intern',
    company: 'Vortalis Technologies',
    type: 'On-Site',
    location: 'Jaipur',
    period: 'Jun – Aug 2025',
    color: '#82a3ff',
    points: [
      'Built systems involving event-driven logic and player data handling',
      'Worked with real-time state updates and structured game data',
      'Contributed to 2 months of production game development cycles',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Career Journey</p>
          <h2 className="section-title">Work <span>Experience</span></h2>
        </div>

        <div className={styles.timeline}>
          {experience.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.connector}>
                <div className={styles.dot} style={{ borderColor: exp.color, boxShadow: `0 0 12px ${exp.color}44` }} />
                {i < experience.length - 1 && <div className={styles.line} />}
              </div>

              <div className={`${styles.card} glass-card glow-cyan`}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.title}>{exp.title}</h3>
                    <div className={styles.meta}>
                      <span className={styles.company} style={{ color: exp.color }}>{exp.company}</span>
                      <span className={styles.sep}>·</span>
                      <span className={styles.badge}>{exp.type}</span>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.location}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className={styles.points}>
                  {exp.points.map((point, j) => (
                    <li key={j} className={styles.point}>
                      <span className={styles.bullet} style={{ background: exp.color }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
