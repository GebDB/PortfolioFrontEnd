import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import linkedin from '../assets/linkedin.svg'

function Navbar() {
return (
    <nav className="navBar">
    <div className={"link-styles"}>
    <Link className={"link"} to="/#home">Home Page</Link>
    <Link className={"link"} to="/#aboutme">About Me</Link>
    <Link className={"link"} to="/#projects">Projects</Link>
    <Link className={"link"} to="/blog">My Blog</Link>
    <Link className={"contactme"} to="/#contactme">Contact Me</Link>
    </div>   
    <div className="linkedinContainer">
    <a className="linkedinlink" href="https://www.linkedin.com/in/danielbecirevic/">
        <img src={linkedin}>  
        </img>
    </a>
    </div>

    </nav>
    );
};
export default Navbar;