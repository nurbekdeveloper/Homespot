import React, { useState } from 'react'
import call from "../../Assets/Logo.png"
import logo from "../../Assets/Logo.png"
import {FaBars} from "react-icons/fa"
import "./mobileNavbar.css"
import { AiOutlineClose } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import {GrNext,GrPrevious} from "react-icons/gr"
const Resnav = () => {
    const [firstnav,setFirstnav] = useState(false)
    const [secondnav,setSecondnav] = useState(false)
 
  const {pathname} = useLocation()
    
    return (
    <div className='resnav'>
        <div className='nav-header'>
            <div className='resnav-logo'><Link to={"/"}><img src={logo} alt="logo" /></Link></div>
            <div className='resnav-icon' onClick={()=>setFirstnav((prev)=>!prev)}>{firstnav ?  <AiOutlineClose/>:<FaBars/>}</div>
        </div>
        <div className={`first-nav ${firstnav ? "close" : ""}`}>
           <Link className='nav-mebel' onClick={()=>setSecondnav(true)}  id={`${(pathname === "/mebel") ? "active" : ""}`} ><div>Строительство Домов</div><div><GrNext/></div></Link>
           
           <Link to={"/partners"} className='nav-item' id={`${(pathname === "/partners") ? "active" : ""}`} onClick={()=>setFirstnav(false)}>Наши Услуги </Link>
           <Link to={"/delivery"} className='nav-item' id={`${(pathname === "/delivery") ? "active" : ""}`} onClick={()=>setFirstnav(false)}>Проектирование </Link>
          
           <Link to={"/about"} className='nav-item' id={`${(pathname === "/about") ? "active" : ""}`} onClick={()=>setFirstnav(false)}>О нас</Link>
           <Link to={"/contact"} className='nav-item' id={`${(pathname === "/contact") ? "active" : ""}`} onClick={()=>setFirstnav(false)}>Контакты</Link>
           <a className='resnav-phone' href='tel:+998712357447'>
                <img src={call} alt="call" />
                <p>+998 94 <span>210-74-47</span></p>
            </a>
        </div>
        <div className={`second-nav ${(secondnav && firstnav) ? "" : "close"}`}>
        <div className='sec-nav-mebel' onClick={()=>setSecondnav(false)}><div><GrPrevious/></div><div>Мебель</div></div>
            
                <Link className='sec-nav-item'>salom</Link>
                <Link className='sec-nav-item'>salom</Link>
                <Link className='sec-nav-item'>salom</Link>
                <Link className='sec-nav-item'>salom</Link>
                <Link className='sec-nav-item'>salom</Link>
           
        </div>
    </div>
  )
}

export default Resnav