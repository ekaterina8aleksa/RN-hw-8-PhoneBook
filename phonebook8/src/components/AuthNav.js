import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Phonebook.module.css";
import routes from "../routes";

const AuthNav = () => (
  <div>
    <NavLink
      to={routes.registration}
      exact
      className={styles.menuLink}
      activeClassName={styles.activeMenuLink}
    >
      Registration
    </NavLink>
    <NavLink
      to={routes.login}
      exact
      className={styles.menuLink}
      activeClassName={styles.activeMenuLink}
    >
      LogIn
    </NavLink>
  </div>
);

export default AuthNav;
