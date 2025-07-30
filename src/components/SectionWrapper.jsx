
import styles from '../styles/CVSection.module.css';

export default function CVSection({ title, children }) {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children} 
    </section>
  );
}
