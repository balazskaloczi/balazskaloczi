import ProjectComponent from './projectComponent'
import "../css/project.css"
import { motion } from 'framer-motion'

const Project  = () => { 

    return ( 
        <div>
            <motion.div className="projectWrapper" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2.5}}>
                    <ProjectComponent />
                    <ProjectComponent />
            </motion.div>
        </div>
    )}
    
export default Project 