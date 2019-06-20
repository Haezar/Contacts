import React, { Component } from 'react';
import { moveUser } from '../actions.js';
import { connect } from 'react-redux';

class ContactCard extends Component {


  render() {

    return (
      <div className='contact-list__users-card'>
        <p>{this.props.firstName + ' ' + this.props.lastName + '; ' + this.props.status + '; ' + this.props.job}</p>
      
        <button onClick={() => this.props.swapUser(this.props.userId)}>
          {this.props.isContactPage && 
            <span>
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.40894 8.96241C5.01184 9.40227 4.3215 9.40227 3.9244 8.96241L1.80945 6.6197C1.46558 6.23879 0.867756 6.23879 0.523878 6.6197C0.22629 6.94934 0.22629 7.45066 0.523878 7.7803L3.9244 11.547C4.3215 11.9869 5.01184 11.9869 5.40893 11.547L14.1428 1.8726C14.4404 1.54297 14.4404 1.04165 14.1428 0.712012C13.7989 0.331101 13.2011 0.3311 12.8572 0.712012L5.40894 8.96241Z" fill="#003469" />
              </svg> CONTACTS
            </span>
          }
          {!this.props.isContactPage && 
            <span>
              ADD TO CONTACTS
            </span>
          }
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isContactPage: state.isContactPage
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    swapUser: userId => {
      dispatch(moveUser(userId))
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(ContactCard);