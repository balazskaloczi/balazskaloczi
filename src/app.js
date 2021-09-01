import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header'
import Footer from './components/footer'
import Main from './components/main'
import Contact from './components/contact'
import Project from './components/project'
import { AnimatePresence } from 'framer-motion';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";


const App = () => {

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Router>
                <Header />
                <Switch >
                    <Route exact path="/">
                        <Main />
                    </Route>
                </Switch>
                <Switch >
                    <Route  exact path="/projects">
                        <Project />
                    </Route>
                </Switch>
                <Switch >
                    <Route path="/contact"> 
                        <Contact/>
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </AnimatePresence>
    );
};

export default App

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
