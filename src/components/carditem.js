import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { items } from "./data";
import "../css/carditem.css"


export default function CardItem({product}) {

  let params = useParams();

return (
  <motion.div  initial={{scale:0}} animate={{scale:1}} className="overlay">
    <motion.div>
        <h2>{params.id}</h2>
        <motion.div className="objectWrapper">
            <motion.h1 className="objectContainerOpened block" layoutId={params.id} animate={{scale:1}} transition={{ ease: "easeIn", duration: 15 }}  >{params.id} </motion.h1>
        </motion.div>
    </motion.div>
  </motion.div>
);
}

// export default function CardItem({title}) {

//   let { id } = useParams();

//   const item = items.find(item => item.id === id);

//   //Az ID alapján megkerési a datában az item kategóriáját és titlejét

//   {console.log(id)}

//   return (
//     <motion.div className="cardItemOverlay" > 
//       <motion.div className="openCard" animate={{scale:1}} transition={{ duration: 10, delay: 0.15 }} layoutId={id}>
//       <motion.div className="contentWrapper" >
//         <h1 className="cardTitle">{title}</h1>
//           <motion.div>
//             <h2 className="cardSubtitle">{item.id}</h2>
//           </motion.div>
//           {/* <motion.div className="contentContainer">
//             <p>{item.description}</p>
//              <div className="buttons">
//                 <a className="siteButton" href={item.site} target='_blank' rel="noopener noreferrer">Site</a>
//                 <Link to="/projects" className="backButton">
//                   <a>Back</a>
//                 </Link>
//                 <a className="previewButton">Preview</a>
//             </div>
//           </motion.div> */}
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

















