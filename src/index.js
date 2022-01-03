import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase'



  // Initialize Firebase
  var config = {
    apiKey: "XXXXXXXXXXXX",
    authDomain: "quiz-app-a64d2.firebaseapp.com",
    databaseURL: "https://quiz-app-a64d2-default-rtdb.firebaseio.com",
    projectId: "quiz-app-a64d2",
    storageBucket: "quiz-app-a64d2.appspot.com",
    messagingSenderId: "196608784368"
  };
  firebase.initializeApp(config);


ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root')
);
