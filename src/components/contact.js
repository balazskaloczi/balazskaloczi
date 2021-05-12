import "../css/contact.css"
import ContactForm from './contactform';

const Contact = () => {
    
    return (
        <div className="contactWrapper">
            <div className="contactFormWrapper">
                <ContactForm />
            </div>
            <ul className="contactList">
                <a to="#"><div> <i className="bi bi-linkedin"> </i>Linkedin</div></a>
                <a to="#"><div> <i className="bi bi-facebook"> </i>Facebook</div></a>
                <a to="#"><div> <i className="bi bi-github"></i> github</div> </a>
                <a href="mailto:kaloczi.balazs01@gmail.com"><div> <i className="bi bi-envelope"></i> E-mail</div></a>
            </ul>
        </div>
    );
};

export default Contact