import { Link } from 'react-router-dom';
import "../css/main.css"

const Main  = () => { 

    return ( 
      <div className="mainWrapper">
        <h3>Hello there ! </h3>
        <p> <Link to="/contact" target="_blank" without rel="noreferrer">contact me</Link>!</p>
      </div>
    )}
    
export default Main 