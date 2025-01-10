import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("Contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:raywasingh.10@gmail.com">raywasingh.10@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("Contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/raywa-singh/">linkedin.com/raywa-singh</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("Contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Raywa10">github.com/Raywa Singh</a>
        </li>
      </ul>
    </footer>
  );
};