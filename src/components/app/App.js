import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import './App.css';
import '../style/my.css';


import Header from '../header/header.js';
import Content from '../content/content.js';
import Footer from '../footer/footer.js';
import Nav from '../nav/nav';



function App() {

  return (
    <Router>
      <div className='container-fluid'>
        <div className='col-lg-12'><Header /></div>
        <div className='col-lg-12'><Nav /></div>
        <div className='col-lg-12'><Content /></div>
        <div className='col-lg-12'><Footer /></div>
      </div>
    </Router>
  );
}

export default App;
