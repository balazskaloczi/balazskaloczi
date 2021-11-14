import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { items } from "./data";
import "../css/carditem.css"

export default function CardItem({title}) {

  let { id } = useParams();

  const item = items.find(item => item.id === id);

  //Az ID alapján megkerési a datában az item kategóriáját és titlejét

  {console.log(id)}

  return (
    <motion.div className="cardItemOverlay" > 
      <motion.div className="openCard" 
        initial={{ opacity: 0, }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 0.35, delay: 0.15 }}
        layoutId={title}
      >
      <motion.div className="contentWrapper" layoutId={`${title}-content`}>
        <h1 className="cardTitle">{title}</h1>
          <motion.div>
            <h2 className="cardSubtitle">{item.subtitle}</h2>
          </motion.div>
          <motion.div className="contentContainer">
            <p>{item.description}</p>
             <div className="buttons">
                <a className="siteButton" href={item.site} target='_blank' rel="noopener noreferrer">Site</a>
                <Link to="/projects" className="backButton">
                  <a>Back</a>
                </Link>
                <a className="previewButton">Preview</a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      </motion.div>
  );
}
