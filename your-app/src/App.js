import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './Store';
import Login from './components/Login';
import Navigation from './components/NavBar';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Contacts from './components/contacts/Contacts';
import Acts from './components/acts/Acts';
import GlobalStyle from './GlobalStyle';
import Signup from './components/Signup';
import EditForm from './components/contacts/EditContact';
import EditAct from './components/acts/EditActs';
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <div className='App'>
          <Navigation />
          <Route path='/login' render={props => <Login {...props} />} />
          <Route path='/contacts' render={props => <Contacts {...props} />} />
          <Route path='/acts' render={props => <Acts {...props} />} />
          <Route path='/register' component={Signup} />
          <Route path='/update' component={EditForm} />
          <Route path='/edit' component={EditAct} />
          <PrivateRoute path='/protected' component={Home} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
