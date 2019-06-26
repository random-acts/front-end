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

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <div className='App'>
          <div>Hello Netlify</div>
          <Navigation />
          <Route path='/login' render={props => <Login {...props} />} />
          <Route path='/contacts' component={Contacts} />
          <PrivateRoute path='/protected' component={Home} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
