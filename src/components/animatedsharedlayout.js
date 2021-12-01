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


  function ListItemElement({item}) {
    return (
      <Link to={`/projects/${item.id}`}>
      <motion.div className="projectListItem" 
      layoutId={item.id} 
      initial={{opacity:0,scale:1}} 
      animate={{opacity:1,scale:1}} 
      transition={{ ease: "easeOut", duration: 0.5 }}>
          <motion.h3 className="projectTitle" layoutId={`title-${item.id}`}>{item.title}</motion.h3>
          <motion.h6 layoutId={`subtitle-${item.subtitle}`}>{item.subtitle}</motion.h6>
      </motion.div>
      </Link> 
    );
  }


  return (
    <>
        <div className="animateSharedLayoutContainer main">
          <ul className="projectsContainer">
            {items.map(item =>
              <ListItemElement item={item} key={item.id}/>
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
