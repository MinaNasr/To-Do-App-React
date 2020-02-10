import React from 'react';
import { Link} from 'react-router-dom';
import "./Navbar.css";
const Navbar = ()=>{
    return(
        <nav>
            <div className="nav-wrapper">
                <div className="">
                    <a href="/" className="brand-logo">To Do App</a>
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/">Tasks</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar