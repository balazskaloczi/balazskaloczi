import "../css/contact.css"
import ContactForm from './contactform';
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div>
            <motion.div className="contactWrapper" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2.5}}>
                <div className="contactFormWrapper">
                    <ContactForm />
                </div>
                <ul className="contactList">
                    <a href="https://www.linkedin.com/in/balazs-kaloczi-9617551b8/" target="_blank" without rel="noreferrer"><div> <i className="bi bi-linkedin"> </i>Linkedin</div></a>
                    <a href="https://github.com/balazskaloczi" target="_blank" without rel="noreferrer"><div> <i className="bi bi-github"></i> github</div> </a>
                    <a href="mailto:kaloczi.balazs01@gmail.com" target="_blank" without rel="noreferrer"><div> <i className="bi bi-envelope"></i> E-mail</div></a>
                </ul>
            </motion.div>
        </div>
    );
};

export default Contact