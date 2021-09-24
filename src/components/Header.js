import React from 'react';
import { Link } from 'react-router-dom'
import "../css/bootstrap-icons.css"
import "../css/header.css"
import { motion } from 'framer-motion'

class Header extends React.Component {
    state = {isClicked : false}

    handleClick = () => {
        this.setState({ isClicked: !this.state.isClicked})
    }

    render() {
    return  <header className="headerContainer" >
                    <motion.div initial={{x: -200}} animate={{x: 0}} exit={{x: -200}} transition={{duration: 1.5}} className="nameTag">
                        <h3>balazs.kaloczi<i className="bi bi-slash fa-4x"></i></h3>
                    </motion.div>
                    <motion.ul initial={{x: 200}} animate={{x: 0}} exit={{x: 200}} transition={{duration: 1.5}} className={this.state.isClicked ? "nav-menu" : "nav-menu--active"}>
                        <Link to="/"><li><h3 className="linkButton">Home</h3></li></Link>
                        <Link to="/projects"><li><h3 className="linkButton">Projects</h3></li></Link>
                        <Link to="/contact"><li><h3 className="linkButton">Contact</h3></li></Link>
                    </motion.ul>
                    <motion.div  initial={{x: 100}} animate={{x: 0}} exit={{x: 100}} transition={{duration: 1.5}} className="icon" onClick={this.handleClick}>
                        <motion.i  className={this.state.isClicked ? "bi bi-x fa-3x" : "bi bi-justify fa-3x"}></motion.i>
                    </motion.div>
            </header>
    };
}

export default Header