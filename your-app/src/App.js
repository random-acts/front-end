import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './Store';
import Login from './components/Login';
import Navigation from './components/NavBar';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Contacts from './components/contacts/Contacts';
import GlobalStyle from './GlobalStyle';
import Signup from './components/Signup';
import EditForm from './components/contacts/EditContact';
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <div className='App'>
          <Navigation />
          <Route path='/login' render={props => <Login {...props} />} />
          <Route path='/contacts' render={props => <Contacts {...props} />} />
          <Route path='/register' component={Signup} />
          <Route path='/update' component={EditForm} />
          <PrivateRoute path='/protected' component={Home} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
