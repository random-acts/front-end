<<<<<<< HEAD
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./Store";
import Login from "./components/Login";
import Navigation from "./components/NavBar";
import Home from "./components/Home";
import PrivateRoute from "./components/Home";
import GlobalStyle from "./GlobalStyle";
=======
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './Store';
import Login from './components/Login';
import Navigation from './components/NavBar';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import GlobalStyle from './GlobalStyle';
>>>>>>> f42da7d86394af14498ac12006f10c21bf475234

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Navigation />
<<<<<<< HEAD
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={Home} />
=======
          <Route path='/login' render={props => <Login {...props} />} />
          <PrivateRoute path='/protected' component={Home} />
>>>>>>> f42da7d86394af14498ac12006f10c21bf475234
        </div>
      </Router>
    </Provider>
  );
}

export default App;
