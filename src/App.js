import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducer';
import Router from './Router';


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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
