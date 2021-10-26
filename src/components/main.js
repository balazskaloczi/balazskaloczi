import TextSpinner from "./textspinner";
import "../css/main.css"
import { motion } from 'framer-motion';

const Main  = () => { 

    return (
        <motion.div className="background" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1.5}}>
          <div className="mainContainer">
            <div className="divider">
              <motion.h2 initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{duration: 1}} className="role">Welcome to my portfolio website | </motion.h2>
              <TextSpinner/>
            </div>
            <h3 className="title">About</h3>
            <motion.p initial={{x: 800}} animate={{x:0}} exit={{x: -800}} transition={{duration: 2}} className="introText">I’m a self-taught frontend developer from Hungary, Győr. I Started learning in 2019 and the interest slowly outgrow itself. Now I’m always trying to thrive my knowledge, currently using HTML, CSS, JavaScript, React. If you are interested please take a look at my projects and contact me in any form if you are interested.</motion.p>
            <h3 className="title">Me</h3>
          </div>
        </motion.div>
    )}
    
export default Main 