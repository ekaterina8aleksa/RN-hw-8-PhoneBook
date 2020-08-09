import React, { Component } from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import { connect } from "react-redux";
import Spinner from "../common/Spinner/Loader";
import { contactsSelectors, contactsOperations } from "../redux/contacts";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";
import styles from "../theme/Phonebook.module.css";

class contactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  onSaveContact = ({ name, number }) => {
    this.addContact(name, number);
  };
  render() {
    return (
      <div className={classNames(styles.container, styles.contacts)}>
        <ContactForm onSubmit={this.onSaveContact} />

        <Filter />

        <h3>Contacts</h3>

        <ContactList />

        {this.props.isLoading && <Spinner />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(contactsPage);
