import React, { Component } from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import { connect } from "react-redux";
import Spinner from "../common/Spinner/Loader";
import { contactsSelectors, contactsOperations } from "../redux/contacts";
import "react-toastify/dist/ReactToastify.css";

class contactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  formListener = ({ name, number }) => {
    this.addContact(name, number);
  };
  render() {
    return (
      <>
        <ContactForm onSubmit={this.formListener} />

        <Filter />

        <h3>Contacts</h3>

        <ContactList />

        {this.props.isLoading && <Spinner />}
      </>
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
