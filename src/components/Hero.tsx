'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const stats = [
  { value: '20+', label: 'Hackathons' },
  { value: '8+', label: 'Projects' },
  { value: '5', label: 'Certifications' },
  { value: '3+', label: 'Work Experience' },
];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'all 0.8s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        {/* Left */}
        <div className={styles.left}>

          <h1 ref={titleRef} className={styles.title}>
            Hi, I&apos;m{' '}
            <span className="gradient-text">Vaibhav Soni</span>
          </h1>

          <p className={styles.subtitle}>
            <span className={styles.roleTag}>Data Analyst</span>
            &nbsp;|&nbsp; SQL &middot; Excel &middot; Power BI &middot; Tableau
          </p>

          <p className={styles.bio}>
            Computer Science student turning raw data into actionable insights.
            Skilled in building analytical dashboards, extracting insights from structured datasets,
            and developing data pipelines for real-world applications.
          </p>

          <div className={styles.ctas}>
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              View Projects
            </a>
            <a href="/Vaibhav_Soni_DataAnalyst_Resume.pdf" download className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>

          <div className={styles.socials}>
            <a href="https://linkedin.com/in/vaibhav-soni-867836285" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://github.com/VaibhavSoni24" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="mailto:vaibhavsoni280506@gmail.com" className={styles.socialLink} title="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <div className={styles.photoWrapper}>
            <div className={styles.photoGlow} />
            <div className={styles.photoRing} />
            <Image
              src="/Me.jpeg"
              alt="Vaibhav Soni"
              width={380}
              height={380}
              className={styles.photo}
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
