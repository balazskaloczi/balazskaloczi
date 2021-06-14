import React from 'react';
import "../css/projectComponent.css"
import image from './6.jpg'

const ProjectComponent  = () => { 

    return ( 
    <div className="Wrapper">
        <img src={image} height="120" width="120"/>
        <ul>
            <li>something</li>
            <li>something</li>
            <li>something</li>
            <li>something</li>
        </ul>
    </div>
    )}
    
export default ProjectComponent