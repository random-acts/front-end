import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Store';
import Login from './components/Login';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Login />
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
