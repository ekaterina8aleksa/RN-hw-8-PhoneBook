import React from "react";
import styles from "../theme/Phonebook.module.css";

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
