import React from 'react';
import history from './services/history';
//import Header from './components/Header'
import Routes from './routes';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './styles/GlobalStyle.css';

function App() {
  return (
    <Router history={history}>

      <Routes />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  )
};

export default App;
