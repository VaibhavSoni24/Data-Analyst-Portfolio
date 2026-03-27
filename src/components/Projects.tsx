'use client';
import { useState } from 'react';
import styles from './Projects.module.css';

type Level = 'all' | 'level3' | 'level2' | 'level1';

const projects = [
  // Level 3 - Flagship
  {
    level: 'level3',
    title: 'CivicSaathi',
    subtitle: 'AI-Powered Municipal Complaint Management',
    description: 'Full-stack application for filing, routing, and resolving civic complaints with automated AI verification, smart duplicate detection, and SLA-driven escalation. Built municipality management platform to handle public complaints, workers, and civic workflows with Power BI analytics.',
    tech: ['SQL', 'Django', 'Next.js', 'Power BI', 'Google Gemini API'],
    github: 'https://github.com/VaibhavSoni24/CivicSaathi',
    live: null,
    award: 'Runner-Up · TiE Global Summit × Rajasthan Digifest 2025',
    awardColor: '#f59e0b',
  },
  {
    level: 'level3',
    title: 'Real-Time Call / Meeting Analyzer',
    subtitle: 'Speech Analytics & MOM Automation',
    description: 'Web application that transcribes meeting recordings, analyzes them using Google Gemini API, and provides automated email and calendar integration. Processes real-time speech into structured transcripts with summaries, action points, and trends.',
    tech: ['Python', 'Flask', 'APIs', 'Data Processing', 'Google Gemini'],
    github: 'https://github.com/VaibhavSoni24/Call',
    live: null,
    award: 'Top 7 · Sphinx MNIT Jaipur Hackathon',
    awardColor: '#6dddff',
  },
  {
    level: 'level3',
    title: 'AI Video Automation Pipeline',
    subtitle: 'Automated Content Data Pipeline',
    description: 'Fully automated YouTube content pipeline that generates and uploads videos without manual intervention. Creates daily Shorts and weekly long-form videos using Python, n8n, and free-tier AI tools with Docker container for n8n.',
    tech: ['Python', 'n8n', 'Data Pipelines', 'Docker', 'APIs'],
    github: 'https://github.com/VaibhavSoni24/ai-video-automation',
    live: null,
    award: null,
    awardColor: '',
  },
  // Level 2 - Notable
  {
    level: 'level2',
    title: 'Multi-Cloud Platform Manager',
    subtitle: 'Unified Cloud Resource Dashboard',
    description: 'Comprehensive web-based dashboard for managing cloud resources across AWS, GCP, and Azure from a single interface. Implements secure login using cloud provider credentials and centralized access control with real-time monitoring.',
    tech: ['Flask', 'Next.js', 'REST APIs', 'Cloud APIs'],
    github: 'https://github.com/VaibhavSoni24/Hackingly-Dashboard',
    live: null,
    award: 'House of Hack Hackathon',
    awardColor: '#8dedec',
  },
  {
    level: 'level2',
    title: 'CodeConcept',
    subtitle: 'AI-Assisted Code Learning Platform',
    description: 'AI-assisted learning platform that helps students understand conceptual mistakes in code—not just syntax errors. Combines runtime execution, static analysis, AST visualization, and guided feedback into one workflow.',
    tech: ['FastAPI', 'Django REST', 'React', 'Monaco Editor'],
    github: 'https://github.com/VaibhavSoni24/CodeConcept',
    live: null,
    award: null,
    awardColor: '',
  },
  {
    level: 'level2',
    title: 'AaluGPT Experiment',
    subtitle: 'Compressed Language Model Research',
    description: 'Heavily quantized, fine-tuned language model—a "diet version" of GPT-2 intentionally compressed down to a fraction of its size, then trained on chaotic internet data. Generates text at ~44–56 tokens/sec on a T4 GPU.',
    tech: ['Python', 'PyTorch', 'NLP', 'GPU', 'LLM'],
    github: 'https://github.com/VaibhavSoni24/AaluGPT',
    live: null,
    award: null,
    awardColor: '',
  },
  // Level 1 - Exploratory
  {
    level: 'level1',
    title: 'FluentMate',
    subtitle: 'AI English Speaking Assistant',
    description: 'AI-powered language learning assistant designed to help users practice spoken English through real-time conversations and feedback. Simulates interactive dialogues, corrects grammar, and builds confidence in communication.',
    tech: ['Flask', 'HTML/CSS/JS', 'AI APIs'],
    github: 'https://github.com/VaibhavSoni24/Innovastra',
    live: null,
    award: 'Innovastra 2025 · Arya College',
    awardColor: '#82a3ff',
  },
  {
    level: 'level1',
    title: 'CareConnect',
    subtitle: 'AI Healthcare Data Platform',
    description: 'AI-powered healthcare platform for enhanced patient care through early disease detection, remote monitoring, and personalized recommendations. Integrates AI, IoT concepts, and data-driven insights for healthcare accessibility.',
    tech: ['Flask', 'HTML/CSS/JS', 'Data Analysis'],
    github: 'https://github.com/VaibhavSoni24/CareConnect',
    live: null,
    award: null,
    awardColor: '',
  },
  {
    level: 'level1',
    title: 'Drowsiness Detector',
    subtitle: 'Real-Time Computer Vision System',
    description: 'Flask web application using OpenCV and Haarcascades for face and eye detection to monitor drowsiness levels. Analyzes real-time visual data to detect fatigue patterns and triggers alerts based on behavioral data thresholds.',
    tech: ['Python', 'OpenCV', 'Flask', 'Computer Vision'],
    github: 'https://github.com/VaibhavSoni24/Drowsiness_Detector',
    live: null,
    award: null,
    awardColor: '',
  },
];

const tabs: { key: Level; label: string; desc: string }[] = [
  { key: 'all', label: 'All Projects', desc: '' },
  { key: 'level3', label: '⚡ Flagship', desc: 'Level 3' },
  { key: 'level2', label: '🔥 Notable', desc: 'Level 2' },
  { key: 'level1', label: '🌱 Exploratory', desc: 'Level 1' },
];

export default function Projects() {
  const [active, setActive] = useState<Level>('all');

  const filtered = active === 'all' ? projects : projects.filter(p => p.level === active);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-low)' }}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">What I&apos;ve Built</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`${styles.tab} ${active === tab.key ? styles.tabActive : ''}`}
              onClick={() => setActive(tab.key)}
            >
              {tab.desc && <span className={styles.tabLevel}>{tab.desc}</span>}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <div key={i} className={`${styles.card} glass-card`}>
              {/* Level badge */}
              <div className={styles.levelBadge} data-level={project.level}>
                {project.level === 'level3' ? '⚡ Flagship' : project.level === 'level2' ? '🔥 Notable' : '🌱 Exploratory'}
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardSubtitle}>{project.subtitle}</p>
                <p className={styles.cardDesc}>{project.description}</p>

                {project.award && (
                  <div className={styles.award} style={{ borderColor: `${project.awardColor}33`, color: project.awardColor }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {project.award}
                  </div>
                )}

                <div className={styles.tags}>
                  {project.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  GitHub
                </a>
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </a>
                ) : (
                  <span className={styles.notLive}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="15" y1="9" x2="9" y2="15"/>
                      <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                    Not Live
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
