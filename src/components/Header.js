import { useState } from 'react';
import { Link } from 'react-router-dom'
import "../css/bootstrap-icons.css"
import "../css/header.css"
import { motion,AnimateSharedLayout } from 'framer-motion'

const Header = () => {

    const [iconChange,setIconChange] = useState(false)


    return (
    <header className="headerContainer" >
            <motion.div initial={{x: -200}} animate={{x: 0}} exit={{x: 200}} transition={{duration: 1.5}} className="nameTag">
                        <h3>balazs.kaloczi<i className="bi bi-slash fa-4x"></i></h3>
             </motion.div>
            <AnimateSharedLayout>
                    <motion.ul 
                        layout 
                        initial={{x: -400 ,opacity: 0}} 
                        animate={{x: 0,opacity: 1}} 
                        exit={{x: -400,opacity: 0}}
                        transition={{duration: 0.5}} 
                        className={iconChange ? "nav-menu" : "nav-menu--active"}>
                        <Link to="/">
                             <motion.li>
                                    <h5 className="linkButton">Home</h5>
                            </motion.li>
                        </Link>
                        <Link to="/projects">
                            <motion.li>
                                <h5 className="linkButton">Projects</h5>
                            </motion.li>
                        </Link>
                         <Link to="/contact">
                             <motion.li>
                                <h5 className="linkButton">Contact</h5>
                                </motion.li>
                        </Link>
                    </motion.ul>
            </AnimateSharedLayout>
                    <motion.div  initial={{x: 100}} animate={{x: 0}} exit={{x: 100}} transition={{duration: 1.5}} className="icon" onClick={() => setIconChange(!iconChange)}>
                        <motion.i  className={iconChange ? "bi bi-x fa-3x" : "bi bi-justify fa-3x"}></motion.i>
                    </motion.div>
            </header>
    );
};

export default Header