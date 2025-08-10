import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <span className={styles.footerText}>
        © YMF. All rights reserved {new Date().getFullYear()} ⚠.
      </span>
    </div>
  );
}
