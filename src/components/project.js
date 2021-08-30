import ProjectComponent from './projectComponent'
import "../css/project.css"
import { motion } from 'framer-motion'

const Project  = () => { 

    return ( 
        <motion.div>
        <div className="projectWrapper">
                <ProjectComponent />
                <ProjectComponent />
        </div>
    </motion.div>
    )}
    
export default Project 