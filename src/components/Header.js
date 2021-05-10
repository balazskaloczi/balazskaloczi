import React from 'react';
import "../css/bootstrap-icons.css"
import "../css/header.css"

class Header extends React.Component {
    state = {isClicked : false}

    handleClick = () => {
        this.setState({ isClicked: !this.state.isClicked})
    }

    render() {
    return  <header className="headerContainer">
                <div className="name-tag">
                    <h3>balazs.kaloczi<i className="bi bi-slash fa-4x"></i></h3>
                </div>
                <ul className={this.state.isClicked ? "nav-menu" : "nav-menu--active"}>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Projects</li></a>
                    <a href="#"><li>Contact</li></a>
                </ul>
                <div  className="icon" onClick={this.handleClick}>
                    <i className={this.state.isClicked ? "bi bi-x fa-3x" : "bi bi-justify fa-3x"}></i>
                </div>
            </header>
    };
}

export default Header