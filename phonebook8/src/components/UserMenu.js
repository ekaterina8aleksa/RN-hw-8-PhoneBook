import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../redux/auth";
import defaultAvatar from "../helpers";
import styles from "../Phonebook.module.css";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.container}>
    <img src={avatar} alt="" width="32" className={styles.userAvatar} />
    <span className={styles.userName}>Welcome, {name}</span>
    <button type="button" onClick={onLogout} className={styles.button}>
      Logout
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
