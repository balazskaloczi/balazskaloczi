import React from 'react';
import "../css/progressbar.css"


const ProgressBar = () => {

return (
<div class="progressbar-wrapper">
     <div class="progressbar">
          <div class="side front">
               <div class="bar"></div>
          </div>
          <div class="side back">
               <div class="bar"></div>
          </div>
          <div class="side top">
               <div class="bar"></div>
          </div>
          <div class="side bottom">
               <div class="bar"></div>
          </div>
          <div class="side left"></div>
     </div>
</div>
    )
}

 export default ProgressBar