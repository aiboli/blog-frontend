import React, { useState } from "react";
import styles from "../styles/PromptWindowWrapper.module.css";

// Accepts an array of prompt windows as children
export default function PromptWindowWrapper({ children }) {
  // Track z-index and highlight for each window
  const [activeIndex, setActiveIndex] = useState(null);

  // Generate random offsets for each child
  const offsets = React.Children.map(children, (_, idx) => ({
    top: Math.floor(Math.random() * 200) + idx * 100,
    left: Math.floor(Math.random() * 200) + idx * 100,
  }));

  return (
    <div className={styles.wrapper}>
      {React.Children.map(children, (child, idx) => (
        <div
          className={
            styles.promptCard + (activeIndex === idx ? " " + styles.active : "")
          }
          style={{
            position: "relative",
            top: offsets[idx].top,
            left: offsets[idx].left,
            zIndex: activeIndex === idx ? 10 : idx,
            transition: "box-shadow 0.2s, transform 0.2s, z-index 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={() => setActiveIndex(idx)}
          onClick={() => setActiveIndex(idx)}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
