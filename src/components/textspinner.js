
import React from 'react';
import "../css/textspinner.css";
import { motion } from 'framer-motion';

const TextSpinner = () => {

    const text = "F r o n t   E n d  D e v e l o p e r - B a l a z s  K a l o c z i - "
    const textArray = text.split("");
    console.log(textArray)

    function SpanElement({element, index}) {
        return (
            <span className="span" style={{transform: `rotate(${index * 5.3}deg)`}}>
                {element}
            </span>
        )
    }

    return (
        <div className="container">
            <div className="circle">
            <div className="logo"></div>
            <motion.div className="text" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}} >
                {textArray.map((element,index) => {return <SpanElement element={element} index={index}/>})}
            </motion.div>   
            </div>
        </div>
    )
}

export default TextSpinner
