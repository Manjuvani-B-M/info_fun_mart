import React, { useState } from 'react'
import '../assets/styles/navbar.css'
import logo from "../assets/images/logo1.png"
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    let [showMenu , setShowMenu] = useState(true)

let clickMenu = ()=>{
    setShowMenu(!showMenu)
}

  return (
    <>
        <div className="navbar">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />                    
                    
                </div>
                <div className={showMenu ? 'links' : 'showMenus'}>
                    <ul>
                        <li><NavLink to="/loginportal">Home</NavLink></li>                        
                        <li><NavLink to="/loginportal/weather">Weather</NavLink></li>
                        <li><NavLink to="/loginportal/jokes">Jokes</NavLink></li>
                        <li><NavLink to="/loginportal/shopping">Shopping</NavLink></li>
                        <li><NavLink to="/">Logout</NavLink></li>
                    </ul>

                </div>
                <div className="menu-icon" onClick={clickMenu}>
                <MenuIcon/>
            </div>
            </div>

            
        </div>
    </>
  )
}

export default Navbar