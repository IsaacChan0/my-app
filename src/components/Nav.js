import React, {useState} from "react";
import {GoX, GoThreeBars} from "react-icons/go";
import {Link} from 'react-router-dom';

const Nav = function()
{
    const [navState, makeOpen] = useState(false);
    const toggle = function()
    {
        makeOpen(prev => !prev);
    }
    return(
    <nav className={`leftHandBar ${navState ? "show" : ""}`}>
        <div className={`hamPositioner ${navState ? "opened" : ""}`}>
            <button id="hamButton" onClick={toggle}> {navState ? 
                                    (<GoX style={{color: "#2d2e33", width: "30px", height: "30px", transform: "rotate(90deg)"}}/>) : 
                                    (<GoThreeBars style={{ color: "white", width: "30px", height: "30px" }}/>)
                                    }
            </button>
        </div>
        <ul className={`buttonList ${navState ? "show" : ""}`}>
            <li id="leftButton">
                <Link to='/' style={{color: 'inherit', textDecoration: "none"}}>
                    Home
                </Link>
            </li>
            <li id="leftButton">
                <Link to='/about' style={{color: 'inherit', textDecoration: "none"}}>
                    About Me
                </Link>
            </li>
            <li id="leftButton">
                <Link to='/projects' style={{color: 'inherit', textDecoration: "none"}}>
                    Projects
                </Link>
            </li>
        </ul>
    </nav>
    );
}


export default Nav;