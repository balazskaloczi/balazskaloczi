import Animatedsharedlayout from './animatedsharedlayout'
import "../css/project.css"
import { motion } from 'framer-motion'
import Footer from "./footer";


const Project  = ({location}) => { 


    return ( 
        <div>
            <motion.div  className="projectWrapper">
                <Animatedsharedlayout location={location.pathname}/>
            </motion.div>
            <Footer/>
        </div>
    )}
    
export default Project 