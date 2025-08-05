import React from 'react';
import styles from '../styles/CVSection.module.css';

function CVSection({ title, children }) {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

export default CVSection;