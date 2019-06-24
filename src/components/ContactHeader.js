import React, { Component } from 'react';
import { togglePage} from '../actions.js';
import '../styles/contacts-body/__header/contacts-body__header.css';
import '../styles/contacts-body/__header/__title/contacts-body__header__title.css';
import '../styles/contacts-body/__header/__switch-input/contacts-body__header__switch-input.css';
import '../styles/contacts-body/__header/__switch-label/contacts-body__header__switch-label.css';

class ContactHeader extends Component {
    switchPage = () => {
      this.props.dispatch(togglePage());
    }
    render() {
        let header;
        if(this.props.isContactPage){
            header = <span className="contacts-body__header__title">My Contacts</span>
        }
        else{
            header = <span className="contacts-body__header__title">People</span>
        }    
        return (
            <div className="contacts-body__header">
                  {header}
                  <input type="checkbox" id="switch" className="contacts-body__header__switch-input"  onChange={this.switchPage}/>
                  <label className="contacts-body__header__switch-label"  htmlFor="switch">Toggle</label>
                  
            </div> 
        );
      } 
}

export default ContactHeader;