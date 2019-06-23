import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePage} from '../actions.js'

class ContactHeader extends Component {
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
                  <input type="checkbox" id="switch" className="contacts-body__header__switch-input"  onChange={this.props.changePage}/>
                  <label className="contacts-body__header__switch-label"  for="switch">Toggle</label>
                  
            </div>
            
        );
      } 
}
function mapStateToProps (state) {
      return {
            isContactPage: state.isContactPage
      }
}

const mapDispathToProps = (dispatch) => {
      return {
        changePage: () => {
          dispatch(togglePage())
        }
      }
}

export default connect(mapStateToProps, mapDispathToProps)(ContactHeader);