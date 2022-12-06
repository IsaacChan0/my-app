import React, {useState} from "react";
import {GoX, GoThreeBars} from "react-icons/go";
import NavButtons from './NavButtons'
const Nav = function()
{
    const [openState, makeOpen] = useState(false);
    const toggle = function()
    {
        makeOpen(lastState => !lastState);
    }

    const hamClosed = <GoThreeBars className='hamClosed'
                        size = '40px' onClick={toggle} />
    const hamOpened = <GoX className='hamOpened'
                        size='40px' onClick={toggle} />
    return(
    <nav className={`leftHandBar ${openState ? "show" : ""}`}>
        {openState ? hamOpened : hamClosed}
        {openState && <NavButtons />}
    </nav>
    );
}


export default Nav;