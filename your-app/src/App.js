import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";
import Login from "./components/Login";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
      </div>
    </Provider>
  );
}

export default App;
