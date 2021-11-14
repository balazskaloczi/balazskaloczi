import React from "react";
import { useState } from "react";
import { Link ,useParams} from 'react-router-dom';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../css/animatedshardlayout.css"
import { items } from "./data"
import CardItem from "./carditem";

export default function App({location}) {

  {console.log(location.pathname)}

  let {id} =useParams();

  return (
    <>
  
      <ul className="container" >
      <AnimateSharedLayout type="crossfade">
        {items.map(item => (
          <Item key={item.id} location={location} id={item.id} title={item.title} subtitle={item.subtitle} layoutId={item.title}/>
        ))}
          {location === `/projects/${id}` && <CardItem id={id} />}
        </AnimateSharedLayout>
      </ul>
    </>
  );
}

function Item({subtitle, id, title, location}) {

  return (
      <li className="itemWrapper">
      <motion.div layoutId={title}>
         <Link to={`/projects/${id}`} className="linkClass">
        <motion.div  layoutId={`${title}-content`}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </motion.div>
        </Link>
        {/* <AnimatePresence > 
            {location === `/projects/${id}` && <CardItem id={id} layoutId={title}/>}
        </AnimatePresence> */}
      </motion.div>
      </li>
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

