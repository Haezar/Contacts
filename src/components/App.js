import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/App.css';

import ContactList from './ContactList';
import ContactHeader from './ContactHeader';

class App extends Component {
  render() { 
    return (
      <div className="contacts-body">
        <ContactHeader> </ContactHeader>
        <ContactList> </ContactList>
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
