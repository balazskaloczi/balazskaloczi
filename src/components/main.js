
import "../css/main.css"
import { motion } from 'framer-motion';

const Main  = () => { 

    return (
        <motion.div className="background" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1.5}}>
          <div className="avatar">
            <motion.div initial={{x: -800}} animate={{x:0}} exit={{x: 800}} transition={{duration: 1.5}} className="avatarImage"/>
            <motion.p initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{duration: 1}} className="role">Welcome to my portfolio website !</motion.p>
            <motion.p initial={{x: 800}} animate={{x:0}} exit={{x: -800}} transition={{duration: 2}} className="introText">I’m a self-taught frontend developer from Hungary, Győr. I Started learning in 2019 and the interest slowly outgrow itself. Now I’m always trying to thrive my knowledge, currently using HTML, CSS, JavaScript, React. If you are interested please take a look at my projects and contact me in any form if you are interested.</motion.p>
          </div>
        </motion.div>
    )}
    
export default Main 