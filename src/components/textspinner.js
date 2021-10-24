
import React from 'react'
import "../css/textspinner.css"

const TextSpinner = () => {





    const text = "Balazs Kaloczi - Front End Developer - "
    const textArray = text.split("");
    let spanArray = textArray.map((e,index) => {return `<span>${e}</span>`});
    let html = spanArray.join("")

    console.log(spanArray)
    console.log(html)

    
    function SpanElement({element, index}) {
        
        // const css = `
        // .span{
        // background-color: #f00;
        // transform:rotate(${index * 10}deg)
        // }
        // `

        return (
            <span className="span" style={{transform: `rotate(${index * 9.2 }deg)`}}>
            {/* <style>{css}</style> */}
                {element}
            </span>
        )
    }

    return (
        <div className="container">
            <div className="circle">
            <div className="logo"></div>
            <div className="text">
                {textArray.map((element,index) => {return <SpanElement element={element} index={index}/>})}
            </div>   
            </div>
        </div>
    )
}

export default TextSpinner
