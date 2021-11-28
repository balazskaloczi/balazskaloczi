import React from "react";
import { motion } from "framer-motion";
import "../css/animatedshardlayout.css"
import { items } from "./data";
import { Link } from 'react-router-dom'


export default function CardItem({id}) {


let {title,subtitle,description,site,code} = items.find(item => item.id === id)



return (
  <motion.div className="animateSharedLayoutContainer open" initial={{opacity:0}} animate={{opacity:1}} transition={{ ease: "easeOut", duration: 0.8 }}>
    <div className="openContainer">
      <motion.div className="projectListItem selected" 
      layoutId={id} 
      initial={{opacity:0}} 
      animate={{opacity:1}} 
      transition={{ ease: "easeOut", duration: 0.4 }}>
          <motion.h1 className="projectTitle">{title}</motion.h1>
          <motion.h2 >{subtitle}</motion.h2>
          <motion.h4 >{description}</motion.h4>
          <motion.div className="selectedItemButtons" initial={{opacity:0}} animate={{opacity:1}} transition={{ ease: "easeOut", duration: 0.8 }}>
            <a href={site} target="_blank" rel="noreferrer"><button>Site</button></a>
            <Link to="/projects"><button>Back</button></Link>
            <a href={code} target="_blank" rel="noreferrer"><button>Code</button></a>
          </motion.div>
      </motion.div>
    </div>
  </motion.div>
);
}

















