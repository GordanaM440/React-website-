import React,{useState} from 'react';
import Logo from "../images/logo.jpg";
import {Link} from "react-router-dom";
import "../style/Navmenu.css";
import DehazeIcon from '@material-ui/icons/Dehaze';

 function Navmenu() {   
        const [openLinks, setOpenLinks] = useState(false);
        const toggleNavbar = () => {
          setOpenLinks(!openLinks);
        };
    return (
        <div className="navmenu">
            <div className="leftMenu" id={openLinks ? "open" : "close"}>     
            <img src={Logo} />
            <div className="buttonLinks">
                <Link to="/">Home</Link>
                <Link to="shop">Shop</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
            </div>
            </div> 
            <div className="rightMenu">
                <Link to="/">Home</Link>
                <Link to="shop">Shop</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
                <button onClick={toggleNavbar}>
                    <DehazeIcon />
                </button>
            </div>
        </div>
      
    );
}


export default Navmenu;