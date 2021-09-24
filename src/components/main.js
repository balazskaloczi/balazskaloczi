import { Link } from 'react-router-dom';
import "../css/main.css"
import { motion } from 'framer-motion';

const Main  = () => { 

    return (
        <motion.div className="background" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1.5}}>
          <div className="avatar">
            <div className="avatarImage"/>
            <p className="role">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
            <p className="introText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
          </div>
          <div className="intro"> 
            
          </div>
        </motion.div>
    )}
    
export default Main 