import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducer';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDeVDoEYSe4PR8vZ8AL9WPjVb35V3xK0rk',
      authDomain: 'manager-77c3a.firebaseapp.com',
      databaseURL: 'https://manager-77c3a.firebaseio.com',
      projectId: 'manager-77c3a',
      storageBucket: 'manager-77c3a.appspot.com',
      messagingSenderId: '708719472344'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
