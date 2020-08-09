import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";
import styles from "../../theme/Phonebook.module.css";
import routes from "../../units/routes";

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      to={routes.home}
      exact
      activeClassName={styles.activeMenuLink}
      className={styles.menuLink}
    >
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to={routes.contacts}
        exact
        activeClassName={styles.activeMenuLink}
        className={styles.menuLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
