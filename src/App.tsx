import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './pages/Main';
import { Provider } from 'react-redux';
import store from './redux/store';
import "./components/icons/icons"


function App() {
  return (
    <Provider store = {store}>
    <div className="App">
        <Main />
    </div>
    </Provider>
  );
}

export default App;
