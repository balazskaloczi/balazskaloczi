import { Link } from 'react-router-dom';
import React from 'react';
import "../css/herosection.css"


const HeroSection = () => {
    
    return (
        <div className="heroSection">
            <div className="wrapper">
                <Link to="/projects"><h3 className="portfolio">My Projects</h3></Link>
            </div>
        </div>
    );
};

export default HeroSection