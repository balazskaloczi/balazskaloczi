import React from 'react';
import "../css/progressbar.css"


const ProgressBar = (props) => {


return (
<div className="progressWrapper">
     <div className='progress'>
          <div 
          className={`progress-done ${ props.color } ${ props.width }`}>
               {props.percent}
          </div>
     </div>
     <h2 className={`${props.textColor}`}>{props.language}</h2>
</div>
    )
}

 export default ProgressBar