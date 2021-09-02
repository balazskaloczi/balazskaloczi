import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header'
// import Footer from './components/footer'
import Main from './components/main'
import Contact from './components/contact'
import Project from './components/project'
import { AnimatePresence } from 'framer-motion';

import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";


const App = () => {

    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Header />
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={Main} />
                    <Route  exact path="/projects" component={Project} />
                    <Route path="/contact" component={Contact} /> 
                </Switch>
            {/* <Footer /> */}
        </AnimatePresence>
    );
};

export default App

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
