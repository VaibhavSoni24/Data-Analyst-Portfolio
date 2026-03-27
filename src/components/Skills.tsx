import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'Data Analysis & Visualization',
    color: '#6dddff',
    icon: '📊',
    skills: [
      { name: 'Power BI', level: 88 },
      { name: 'MS Excel', level: 90 },
      { name: 'Tableau', level: 75 },
      { name: 'Dashboard Development', level: 85 },
      { name: 'KPI Tracking', level: 82 },
      { name: 'Data Storytelling', level: 80 },
    ],
  },
  {
    category: 'Programming & Querying',
    color: '#8dedec',
    icon: '💻',
    skills: [
      { name: 'SQL (MySQL/PostgreSQL/MSSQL)', level: 88 },
      { name: 'Python (Pandas, NumPy)', level: 82 },
      { name: 'Matplotlib & Seaborn', level: 78 },
      { name: 'Flask / Django', level: 72 },
      { name: 'REST APIs', level: 75 },
    ],
  },
  {
    category: 'Data Engineering & Tools',
    color: '#82a3ff',
    icon: '🔧',
    skills: [
      { name: 'Data Cleaning & Transformation', level: 85 },
      { name: 'ETL Basics', level: 72 },
      { name: 'Git & GitHub', level: 80 },
      { name: 'Jupyter Notebook', level: 85 },
      { name: 'JSON / API Data Handling', level: 78 },
    ],
  },
  {
    category: 'Additional Skills',
    color: '#f59e0b',
    icon: '⚡',
    skills: [
      { name: 'Machine Learning (Scikit-learn)', level: 65 },
      { name: 'Statistical Analysis', level: 74 },
      { name: 'Prompt Engineering', level: 82 },
      { name: 'n8n / Automation', level: 70 },
      { name: 'OpenCV / Computer Vision', level: 60 },
    ],
  },
];

const toolBadges = [
  { name: 'Power BI', icon: '📊' },
  { name: 'Excel', icon: '📗' },
  { name: 'Tableau', icon: '📈' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Python', icon: '🐍' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'NumPy', icon: '🔢' },
  { name: 'Matplotlib', icon: '📉' },
  { name: 'Seaborn', icon: '🎨' },
  { name: 'Jupyter', icon: '📓' },
  { name: 'Git', icon: '🌿' },
  { name: 'Flask', icon: '🧪' },
  { name: 'Django', icon: '🎯' },
  { name: 'Next.js', icon: '⚡' },
  { name: 'Scikit-learn', icon: '🤖' },
  { name: 'OpenCV', icon: '👁️' },
  { name: 'n8n', icon: '🔗' },
  { name: 'Docker', icon: '🐳' },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Technical Arsenal</p>
          <h2 className="section-title">Skills & <span>Expertise</span></h2>
        </div>

        {/* Skill groups with proficiency bars */}
        <div className={styles.groupGrid}>
          {skillGroups.map((group, i) => (
            <div key={i} className={`${styles.groupCard} glass-card`}>
              <div className={styles.groupHeader}>
                <span className={styles.groupIcon}>{group.icon}</span>
                <h3 className={styles.groupTitle} style={{ color: group.color }}>{group.category}</h3>
              </div>
              <div className={styles.skillList}>
                {group.skills.map((skill, j) => (
                  <div key={j} className={styles.skillItem}>
                    <div className={styles.skillMeta}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPct} style={{ color: group.color }}>{skill.level}%</span>
                    </div>
                    <div className={styles.bar}>
                      <div
                        className={styles.barFill}
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(to right, ${group.color}88, ${group.color})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tool badges */}
        <div className={styles.badgesSection}>
          <p className={styles.badgesLabel}>Tools & Technologies</p>
          <div className={styles.badges}>
            {toolBadges.map((tool) => (
              <div key={tool.name} className={styles.toolBadge}>
                <span>{tool.icon}</span>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
