import "../css/contact.css"
import ContactForm from './contactform';

const Contact = () => {
    
    return (
        <div className="contactWrapper">
            <div className="contactFormWrapper">
                <ContactForm />
            </div>
            <ul className="contactList">
                <a href="https://www.linkedin.com/in/balazs-kaloczi-9617551b8/" target="_blank" without rel="noreferrer"><div> <i className="bi bi-linkedin"> </i>Linkedin</div></a>
                <a href="https://github.com/balazskaloczi" target="_blank" without rel="noreferrer"><div> <i className="bi bi-github"></i> github</div> </a>
                <a href="mailto:kaloczi.balazs01@gmail.com" target="_blank" without rel="noreferrer"><div> <i className="bi bi-envelope"></i> E-mail</div></a>
            </ul>
        </div>
    );
};

export default Contact