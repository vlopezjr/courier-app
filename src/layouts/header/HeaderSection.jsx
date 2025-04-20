import React from 'react'
import Logo from '../images/rhd-logo-white.svg'
import { Link } from 'react-router-dom'

const HeaderSection = () => {
  return (
    <div className="h-70px bg-primary flex justify-between items-center px-4">        
        <img src={Logo} alt="Rush Hour Delivery Logo" className="h-11" /> 
        <div className="flex justify-between items-center gap-8">
            <Link to="/" className="header-link">HOME</Link>
            <Link to="/pickup" className="header-link">SCHEDULE PICKUP</Link>
            <Link to="/track" className="header-link">TRACK</Link>
            <Link to="/contact" className="header-link">CONTACT</Link>  
            <Link to="/about" className="header-link">ABOUT</Link>
        </div>  
        <div className="flex justify-between items-center gap-8">           
            <Link to="/login" className="header-link">SIGN IN</Link>  
            <Link to="/register" className="header-link">REGISTER</Link>
        </div> 
    </div>
  )
}

export default HeaderSection
