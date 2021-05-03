import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header'
import HeroSection from './components/HeroSection'
import Footer from './components/footer'
import Main from './components/main'
import ProgressBar from  './components/progressbar'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <HeroSection />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
