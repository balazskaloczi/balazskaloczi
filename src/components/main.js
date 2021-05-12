import { Link } from 'react-router-dom';
import "../css/main.css"

const Main  = () => { 

    return ( 
    <div className="mainWrapper">
    <h3>Hello there ! </h3>
      <p>My name is Kálóczi Balázs, I'm a Junior programmer from Hungary. I've been learning Front End Developement since 2020 January.
      I Learned HTML CSS JavaScipt ReactJS , and NodeJS , built a lot of smaller projects what you can find in my <Link to="/projects">projects </Link> 
      menu. I learned most of my languages on Teamtreehouse : <a href="https://teamtreehouse.com/balazskaloczi" target="_blank">my profile</a>, also W3 School Stackoverflow and some very helpfull 
      Youtube channels for example: Traversy Media. <br/>
      If you like any of my project's or my portfolio page, feel free to <Link to="/contact" target="_blank">contact me</Link>!</p>
    </div>
    )}
    
export default Main 