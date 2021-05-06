import React from 'react';
import "../css/footer.css"


const Footer = () => {
    
    return (
        <div className="footer-wrapper">
            <p>	&#169; It's not copyrighted.</p>
            <div className="socialMedia">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-instagram"></i>
            </div>
        </div>
    );
};

export default Footer