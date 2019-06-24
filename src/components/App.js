import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/contacts-body/contacts-body.css';

import ContactList from './ContactList';
import ContactHeader from './ContactHeader';

class App extends Component {
  render() { 
    return (
      <div className="contacts-body">
        <ContactHeader 
          isContactPage={this.props.isContactPage} 
          dispatch={this.props.dispatch}> 
        </ContactHeader>
        <ContactList 
          users={this.props.users} 
          isContactPage={this.props.isContactPage} 
          dispatch={this.props.dispatch}> 
        </ContactList>
      </div>
    ) 
  }
}
function mapStateToProps (state) {
  return {
      isContactPage: state.isContactPage,
      users: state.users
  }
}
export default connect(mapStateToProps)(App);
