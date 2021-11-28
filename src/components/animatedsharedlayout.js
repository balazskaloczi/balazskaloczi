import React from "react";
import { Link ,useParams } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import "../css/animatedshardlayout.css"
import { items } from "./data"
import CardItem from "./carditem";
import Footer from "./footer";

export default function Projects({location}) {

  let params = useParams();
  let id = params.id;


  return (
    <>
        <div className="animateSharedLayoutContainer main">
          <ul className="projectsContainer">
            {items.map(item =>
              <Link to={`/projects/${item.id}`}>
                <motion.div className="projectListItem" 
                layoutId={item.id} 
                initial={{opacity:0}} 
                animate={{opacity:1}} 
                transition={{ ease: "easeOut", duration: 0.4 }}>
                    <motion.h3 className="projectTitle">{item.title}</motion.h3>
                    <motion.h6>{item.subtitle}</motion.h6>
                </motion.div>
              </Link> 
            )}
          </ul>
            <AnimatePresence exitBeforeEnter={false}>
              {id && <CardItem id={id} key="item"/> }
            </AnimatePresence>
        </div>
        <Footer/>
    </>
  );
}
