import TextSpinner from "./textspinner";
import "../css/main.css"
import { motion } from 'framer-motion';
import Footer from "./footer";

const Main  = () => { 

    return (
        <motion.div className="background" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1.5}}>
          <div className="mainContainer">
            <div className="divider">
              <motion.h2 initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{duration: 1}} className="role">Welcome to my portfolio website</motion.h2>
              <TextSpinner/>
            </div>
            <h2 className="title">About</h2>
            <motion.p initial={{x: 800}} animate={{x:0}} exit={{x: -800}} transition={{duration: 2}} className="aboutText">I’m a self-taught frontend developer from Hungary, Győr. I Started learning in 2019 and the interest slowly outgrow itself. Now I’m always trying to thrive my knowledge, currently using HTML, CSS, JavaScript, React. If you are interested please take a look at my projects and contact me in any form if you are interested.</motion.p>
            <h2 className="title">Me</h2>
            <motion.p initial={{x: 800}} animate={{x:0}} exit={{x: -800}} transition={{duration: 2}} className="meText">I’m a self-taught frontend developer from Hungary, Győr. I Started learning in 2019 and the interest slowly outgrow itself. Now I’m always trying to thrive my knowledge, currently using HTML, CSS, JavaScript, React. If you are interested please take a look at my projects and contact me in any form if you are interested.</motion.p>
          </div>
          <Footer/>
        </motion.div>
    )}
    
export default Main 