import React, { useState } from "react"
import "./Navbar.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import logo from "../../../Assets/Logo.png"
const Navbar = () => {
  const [navList, setNavList] = useState(false)

  return (

      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='nav'  style={{zIndex:12}}>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              <span>2</span> My List
            </h4>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>

  )
}

export default Navbar
