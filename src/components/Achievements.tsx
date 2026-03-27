import Image from 'next/image';
import styles from './Achievements.module.css';

const achievements = [
  {
    rank: 'Runner-Up',
    event: 'TiE Global Summit × Rajasthan Digifest Hackathon',
    year: '2025',
    project: 'CivicSaathi',
    image: '/tiesummit.jpeg',
    color: '#f59e0b',
    icon: '🥈',
  },
  {
    rank: 'Top 7',
    event: 'Sphinx MNIT Jaipur Hackathon',
    year: '2025',
    project: 'Real-Time Call Analyzer',
    image: '/sphinxmnit.jpeg',
    color: '#6dddff',
    icon: '⚡',
  },
  {
    rank: 'Top 10',
    event: 'Enigma RIET Hackathon',
    year: '2026',
    project: null,
    image: '/enigmariet.jpeg',
    color: '#8dedec',
    icon: '🎯',
  },
  {
    rank: 'Top 30',
    event: 'HackJKLU Hackathon',
    year: '2026',
    project: null,
    image: '/hackjklu.jpeg',
    color: '#82a3ff',
    icon: '🚀',
  },
];

const otherAchievements = [
  {
    rank: 'Top 25%',
    event: 'IIT Guwahati Summer Analytics Program',
    year: '2024',
    color: '#f59e0b',
    icon: '📊',
  },
  {
    rank: 'Presenter',
    event: 'International Conference Research Paper',
    year: '2025',
    color: '#6dddff',
    icon: '🎓',
  },
  {
    rank: 'Participant',
    event: 'NASA Space Apps Challenge',
    year: '2025',
    color: '#82a3ff',
    icon: '🛸',
  },
  {
    rank: '20+',
    event: 'Hackathons & Analytics Competitions',
    year: 'Ongoing',
    color: '#8dedec',
    icon: '🏆',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Recognition & Milestones</p>
          <h2 className="section-title">Hackathon <span>Achievements</span></h2>
        </div>

        {/* Hackathon cards with photos */}
        <div className={styles.grid}>
          {achievements.map((a, i) => (
            <div key={i} className={`${styles.card} glass-card`} style={{ '--accent': a.color } as React.CSSProperties}>
              <div className={styles.imgWrapper}>
                <Image
                  src={a.image}
                  alt={a.event}
                  fill
                  className={styles.img}
                  sizes="(max-width: 640px) 100vw, 280px"
                />
                <div className={styles.imgOverlay} />
                <div className={styles.rankBadge} style={{ background: `${a.color}22`, borderColor: `${a.color}55`, color: a.color }}>
                  <span>{a.icon}</span>
                  <span>{a.rank}</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.event}>{a.event}</p>
                <p className={styles.year}>{a.year}</p>
                {a.project && (
                  <p className={styles.project}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <path d="M3 9h18M9 21V9"/>
                    </svg>
                    {a.project}
                  </p>
                )}
              </div>
              <div className={styles.glowLine} style={{ background: `linear-gradient(to right, transparent, ${a.color}, transparent)` }} />
            </div>
          ))}
        </div>

        {/* Other achievements row */}
        <h3 className={styles.otherTitle}>Other Highlights</h3>
        <div className={styles.otherGrid}>
          {otherAchievements.map((a, i) => (
            <div key={i} className={`${styles.otherCard} glass-card`}>
              <span className={styles.otherIcon}>{a.icon}</span>
              <div>
                <p className={styles.otherRank} style={{ color: a.color }}>{a.rank}</p>
                <p className={styles.otherEvent}>{a.event}</p>
              </div>
              <span className={styles.otherYear}>{a.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
