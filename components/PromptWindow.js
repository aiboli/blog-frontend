import React from "react";
import styles from "../styles/PromptWindow.module.css";

export default function PromptWindow({ title, url, children }) {
  return (
    <div className={styles.window}>
      <div className={styles.topBar}>
        <div className={styles.windowButtons}>
          <span className={styles.button} title="Close" />
          <span className={styles.button} title="Minimize" />
          <span className={styles.button} title="Maximize" />
        </div>
        {title && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.windowTitle}
          >
            <span>{title}</span>
          </a>
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
