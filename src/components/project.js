import Animatedsharedlayout from './animatedsharedlayout'
import "../css/project.css"
import { motion } from 'framer-motion'
import Footer from "./footer";


const Project  = ({location}) => { 


    return ( 
        <div>
            <motion.div  className="projectWrapper" 
            // initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1.5}}
            >
                <Animatedsharedlayout location={location.pathname}/>
            </motion.div>
            <Footer/>
        </div>
    )}
    
export default Project 