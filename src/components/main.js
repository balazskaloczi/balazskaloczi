import { Link } from 'react-router-dom';
import "../css/main.css"
import { motion } from 'framer-motion'

const Main  = () => { 

    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2}}>
        <div className="mainWrapper">
          <h3>Hello there ! </h3>
          <p> <Link to="/contact" target="_blank" without rel="noreferrer">contact me</Link>!</p>
        </div>
      </motion.div>
    )}
    
export default Main 