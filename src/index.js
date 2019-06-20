import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import './index.css';
import contactReducer from './reducer';
import {createStore} from 'redux';

const initialState = {
  isContactPage: true,
  users: [
    {
      id: 1,
      isContact: true,
      firstName: 'First1',
      lastName: "Last1",
      status: 'ready',
      country: "belarus",
      years: 20,
      job: 'photography',
      nativeLanguage: 'Russian',
      studiedLanguages: ['Russian', 'English'],
      intro: 'photography'
    },
    {
      id: 2,
      isContact: true,
      firstName: 'First2',
      lastName: "Last2",
      status: 'ready',
      country: "belarus",
      years: 20,
      job: 'photography',
      nativeLanguage: 'Russian',
      studiedLanguages: ['Russian', 'English'],
      intro: 'photography'
    },
    {
      id: 3,
      isContact: false,
      firstName: 'First3',
      lastName: "Last3",
      status: 'ready',
      country: "belarus",
      years: 20,
      job: 'photography',
      nativeLanguage: 'Russian',
      studiedLanguages: ['Russian', 'English'],
      intro: 'photography'
    },
    {
      id: 4,
      isContact: false,
      firstName: 'First4',
      lastName: "Last4",
      status: 'ready',
      country: "belarus",
      years: 20,
      job: 'photography',
      nativeLanguage: 'Russian',
      studiedLanguages: ['Russian', 'English'],
      intro: 'photography'
    },

  ]
}

const store = createStore(contactReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
