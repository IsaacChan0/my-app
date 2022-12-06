import {Link} from 'react-router-dom';

const NavButtons = function()
{
    return(
        <ul class='buttonList'>
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
    );
}

export default NavButtons;