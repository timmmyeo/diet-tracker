import React from 'react';
import Navbar from "./components/Navbar"
import ChatWindow from "./components/ChatWindow"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './components/firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App(props) {
  const {
    user,
    signOut,
    signInWithGoogle,
  } = props;

  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Login user={user} signOut={signOut} signInWithGoogle={signInWithGoogle}/>
          </Route>
          <Route exact path="/chat">
            <ChatWindow />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
      
    </>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
