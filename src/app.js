import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Footer from './components/footer'
import Main from './components/main'
import Contact from './components/contact'
import Project from './components/project'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HeroSection />
                    <Main />
                </Route>
            </Switch>
            <Switch>
                <Route  exact path="/projects">
                    <Project />
                </Route>
            </Switch>
            <Switch>
                <Route path="/contact"> 
                    <Contact/>
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

export default App

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
