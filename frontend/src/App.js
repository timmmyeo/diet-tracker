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
import UserProvider from "./UserProvider"

function App(props) {

  return (
    <>
    <UserProvider>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/chat">
            <ChatWindow />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
    </>
  );
}

export default App
