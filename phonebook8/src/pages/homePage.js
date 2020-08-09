import React from "react";
import styles from "../theme/Phonebook.module.css";
import classNames from "classnames";

const HomePage = () => (
  <div className={classNames(styles.container, styles.welcome)}>
    <h1 className={styles.title}>
      (｡♡‿♡｡) Welcome
      <span role="img" aria-label="Welcome icon">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomePage;
