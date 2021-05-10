import React from 'react';
import "../css/contact.css"


const Contact = () => {
    
    return (
        <div className="contactWrapper">
        <ul className="contactList">
            <a href="#"><li> <i className="bi bi-linkedin"> </i>Linkedin</li></a>
            <a href="#"><li> <i className="bi bi-facebook"> </i>Facebook</li></a>
            <a href="#"><li> <i className="bi bi-github"></i> github</li> </a>
            <a href="mailto:kaloczi.balazs01@gmail.com"><li> <i className="bi bi-envelope"></i> E-mail</li></a>
        </ul>
        </div>
    );
};

export default Contact