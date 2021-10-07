import "../css/contact.css"
import ContactForm from './contactform';
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div>
            <motion.div className="contactWrapper" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1.5}}>
                <motion.div className="contactFormWrapper" initial={{ y: 450, opacity:0 }}   animate={{ x: 0, y: 0, opacity: 1 }} exit={{  y: 450, opacity:0 }}
                                    transition={{delay: 1,x: { type: "tween"},default: { duration: 2 }}}>
                    <ContactForm />
                    <ul className="contactList">
                        <a href="https://www.linkedin.com/in/balazs-kaloczi-9617551b8/" target="_blank" without rel="noreferrer"><i className="bi bi-linkedin"> </i></a>
                        <a href="https://github.com/balazskaloczi" target="_blank" without rel="noreferrer"><i className="bi bi-github"></i></a>
                        <a href="mailto:kaloczi.balazs01@gmail.com" target="_blank" without rel="noreferrer"><i className="bi bi-envelope"></i></a>
                    </ul>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact