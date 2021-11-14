import React from "react";
import { useState } from "react";
import { Link ,useParams } from 'react-router-dom';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../css/animatedshardlayout.css"
import { items } from "./data"
import CardItem from "./carditem";
import "../css/projectlist.css"

export default function Projects({location}) {

let [cardOpened,setCardOpened] = useState();



  return (
    // <>
    //   <ul className="container" >
    //     {items.map(item => (
    //       <Item key={item.id} location={location} id={item.id} title={item.title} subtitle={item.subtitle} />
    //     ))}
    //       {location === `/projects/${id}` && <CardItem id={id} />}
    //   </ul>
    // </>

    
    <div className="Projects">
        <h1 className="siteTitle">{location}</h1>
        <motion.div className="objectWrapper">
        <ul >
          {['Teszt_1', 'Teszt_2', 'Teszt_3'].map((object => 
          <Link to={`/projects/${object}`}>
            <motion.li 
                    className="block"
                    layoutId={object}
                    animate={{scale:1}}
                    transition={{ ease: "easeOut", duration: 0.4 }} 
                    > 
                <motion.h1 className="objectContainer">{object}</motion.h1>
                <motion.div layoutId="overlay"/>
            </motion.li>
            {location === `/projects/${object}` && <CardItem/>}
          </Link>
          ))}
          </ul>
        </motion.div>
    </div>
  );
}

// function Item({subtitle, id, title}) {

//   return (
//       <motion.li className="itemWrapper" animate={{scale:1}} transition={{ duration: 10, delay: 0.15 }} layoutId={title}>
//       <motion.div    className="listItemWrapper" >
//          <Link to={`/projects/${id}`} className="linkClass">
//         <motion.div >
//           <h3>{title}</h3>
//           <p>{subtitle}</p>
//         </motion.div>
//         </Link>
//       </motion.div>
//       </motion.li>
//   );
// }

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

