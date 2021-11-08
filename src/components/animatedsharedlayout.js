import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../css/animatedshardlayout.css"
import { items } from "./data"
import CardItem from "./carditem";

export default function App({location}) {
  return (
    <AnimateSharedLayout >
      <motion.ul layout className="container" >
        {items.map(item => (
          <Item key={item.id} location={location} id={item.id} title={item.title} subtitle={item.subtitle} description={item.description} preview={item.preview} site={item.site} layoutId={item.id}/>
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

function Item({subtitle, layoutId, id, title, location}) {

  console.log(location)

  if( location === 'projects/translatelist') {console.log('babgulyas')}

  return (
      <motion.li layout layoutId={id} >
         <Link to={`/projects/${id}`} className="linkClass">
        <motion.div layout >
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </motion.div>
        </Link>
            {location === `/projects/${id}` && <CardItem id={id} layoutId={id} />}
      </motion.li>
  );
}

// function Content({description ,site, isOpen, setIsOpen}) {
//   // const [previewOpen, setPreviewOpen] = useState(false);

//   // const toggleOpen = () => {
//   //   setPreviewOpen(!previewOpen)
//   //   setIsOpen(isOpen)
//   // };
  
//   return (
//     <motion.div       layout
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     transition={{duration:1}}>
      
//       {/* <a className={previewOpen ? "preview image" : "preview" } onClick={toggleOpen} target='_blank' rel="noopener noreferrer">Preview</a> */}
//     </motion.div>
//   );
// }

