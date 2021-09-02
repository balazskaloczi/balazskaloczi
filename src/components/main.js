import { Link } from 'react-router-dom';
import "../css/main.css"
import { motion } from 'framer-motion';

const Main  = () => { 

    return (
      <div className="mainWrapper" >
        <motion.div className="background" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1.5}}>
          <h3>Hello there ! </h3>
          <p> <Link to="/contact" target="_blank" without rel="noreferrer">contact me</Link>!</p>
        </motion.div>
      </div>
    )}
    
export default Main 