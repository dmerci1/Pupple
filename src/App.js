import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import SignInForm from './screens/SignInForm';
import AuthNav from './components/navigators/AuthNav';

class App extends Component {
  componentWillMount() {
  const config = {
   apiKey: 'AIzaSyDbD2m16aSiIvPcbZ3nRpib3lei2MqOIEU',
   authDomain: 'pupple-4e40e.firebaseapp.com',
   databaseURL: 'https://pupple-4e40e.firebaseio.com',
   projectId: 'pupple-4e40e',
   storageBucket: 'pupple-4e40e.appspot.com',
   messagingSenderId: '1007949599264'
 };
 firebase.initializeApp(config);
  }

  render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <AuthNav />
      </Provider>
    );
  }
}

export default App;
