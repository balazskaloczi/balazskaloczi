import Animatedsharedlayout from './animatedsharedlayout'
import "../css/project.css"
import { motion } from 'framer-motion'


const Project  = () => { 

    return ( 
        <div>
            <motion.div className="projectWrapper" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1.5}}>
                <Animatedsharedlayout />
            </motion.div>
        </div>
    )}
    
export default Project 