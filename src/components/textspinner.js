
import React from 'react';
import "../css/textspinner.css";
import { motion } from 'framer-motion';

const TextSpinner = () => {

    const text = "BALAZS KALOCZI FRONT END DEVELOPER "
    const textArray = text.split("");
    console.log(textArray)

    function SpanElement({element, index}) {
        return (
            <span className="span" style={{transform: `rotate(${index * 10}deg)`}}>
                {element}
            </span>
        )
    }

    return (
        <div className="SpinnerContainer">
            <div className="circle">
            <div className="logo"></div>
            <motion.div className="text" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2}} >
                {textArray.map((element,index) => {return <SpanElement element={element} index={index}/>})}
            </motion.div>   
            </div>
        </div>
    )
}

export default TextSpinner
