import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/IndexWeb'
import Login from './components/Login';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Login></Login>
  );
}

export default App;
