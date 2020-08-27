import React, { Component, createContext } from "react";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './components/firebaseConfig';

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(userAuth => {
      this.setState({ user: userAuth});
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;