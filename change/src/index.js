import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAutFQnrtXm6apriJBiPJzHNHxcGCwyyAg",
    authDomain: "budget-app-db2d0.firebaseapp.com",
    databaseURL: "https://budget-app-db2d0.firebaseio.com",
    projectId: "budget-app-db2d0",
    storageBucket: "budget-app-db2d0.appspot.com",
    messagingSenderId: "960807417072"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
