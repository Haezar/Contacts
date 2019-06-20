import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePage} from '../actions.js'

class ContactHeader extends Component {
    render() {
        let header;
        if(this.props.isContactPage){
            header = <p>My Contacts</p>
        }
        else{
            header = <p>People</p>
        }
        
        return (
            <div>
                  {header}
                  <button className='header-button' onClick={this.props.changePage}>toggleButton</button>
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