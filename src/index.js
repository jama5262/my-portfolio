import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { analytics } from "firebase";
import app from "firebase/";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.css"
import { App } from "./App";
import store from "./redux/store"
import * as serviceWorker from './serviceWorker';

const config = {
  apiKey: "AIzaSyCK__CJKpoKvTXAxBXX--Awgr-wPbkTiS4",
  authDomain: "studious-hydra-133711.firebaseapp.com",
  databaseURL: "https://studious-hydra-133711.firebaseio.com",
  projectId: "studious-hydra-133711",
  storageBucket: "studious-hydra-133711.appspot.com",
  messagingSenderId: "910694464229",
  appId: "1:910694464229:web:35a7e1dcd21c5ae818720c",
  measurementId: "G-8GZS2X66V8"
}

app.initializeApp(config)
analytics()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
