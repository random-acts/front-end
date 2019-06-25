
import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./Store";
import Login from "./components/Login";
import Navigation from "./components/NavBar";
import Home from "./components/Home";
import PrivateRoute from "./components/Home";
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Store';
import Login from './components/Login';
import Contacts from './components/contacts/Contacts';


function App() {
  return (
    <Provider store={store}>

      <Router>
        <div className="App">
          <Navigation />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={Home} />
        </div>
      </Router>

      <div className='App'>
        <Login />
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
