import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/usethis.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
              Skilled in building scalable web apps using HTML, CSS, JavaScript, React, Node.js, and MongoDB, 
              focusing on responsive, high-performance solutions.
             </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Team Player:</h3>
              <p>
              Collaborative and effective in working with cross-functional teams to achieve goals and ensure 
              smooth project execution.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem-Solver:</h3>
              <p>
              Committed to optimizing system performance and functionality to deliver efficient and scalable software solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section> /* Ensure this is closed */
  );
};
