import React from 'react';
import "../css/main.css"
import ProgressBar from './progressbar'

const Main  = () => { 
    const divStyle = {
        width: '30%',
      };

    return ( 
    <div className="mainWrapper">
            <ProgressBar percent='95%' width='w-95' language='HTML' color='bg-secondary' textColor='text-secondary' />
            <ProgressBar percent='80%' width='w-80' language='JavaScript' color='bg-warning' textColor='text-warning'/>
            <ProgressBar percent='85%' width='w-85' language='CSS' color='bg-success' textColor='text-success'/>
            <ProgressBar percent='75%' width='w-75' language='ReactJS' color='bg-info' textColor='text-info'/>
    </div>
    )}
export default Main 