import React, {  useState } from 'react'

//style
import "./defaultNavbar.css"

//icons
import  {BsChevronDown} from "react-icons/bs"

//assets
import logo from "../../Assets/Logo.png"
import call from "../../Assets/Logo.png"

//router
import { Link,useLocation } from 'react-router-dom'



const Navbar = () => {
  
  const changeSlug = ()=>{
    setDropDown(true)

  }
  const {pathname} = useLocation()
  const [dropdown,setDropDown] = useState(true)
//   const {dropdown,setDropDown} = useContext(ItemContext)
 
  return (
    <div className='navbar'>
      <div className="nav">

      
      <div className='navbar_logo'>
        <Link to={'/'}><img src={logo} alt="logo" /></Link>
      </div>

      <div className='navbar_nav'>
      <Link to={"/"} onClick={()=>setDropDown(true)} className={`${(pathname === "/") ? "active" : "navbar_link"}`}>Главная  </Link>
        <Link id='dropdown' to={"/construction"} onClick={()=>setDropDown(prev=>!prev)} className={`${(pathname === "construction") ? "active" : "navbar_link"}`} > Строительство  &nbsp; <BsChevronDown/></Link>
        <Link id='dropdown' to={"/services"}  onClick={()=>setDropDown(prev=>!prev)}  className={`${(pathname === "/about") ? "active" : "navbar_link"}`}>Наши Услуги   &nbsp; <BsChevronDown/></Link>
        <Link to={"/design"} onClick={()=>setDropDown(true)} className={`${(pathname === "/design") ? "active" : "navbar_link"}`}>Проектирование </Link>
        <Link to={"/about"} onClick={()=>setDropDown(true)} className={`${(pathname === "/sevices") ? "active" : "navbar_link"}`}>  О Нас </Link>
        <Link to={"/project"} onClick={()=>setDropDown(true)} className={`${(pathname === "/project") ? "active" : "navbar_link"}`}> Наши работы </Link>
        <Link to={"/contact"} onClick={()=>setDropDown(true)} className={`${(pathname === "/contact") ? "active" : "navbar_link"}`}> Контакты </Link>
      </div>
      
      <a href='tel:+998712357447' className='navbar_phone'>
        <img src={call} alt="call" />
        <p>+998 94 <span>210-74-47</span></p>
      </a>
      </div>
      <div className={ `dropdown ${dropdown ? 'open' : ""}`}  >
        <div className='nav_item'>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-rukovoditeley"}  onClick={changeSlug} >Столы для руководителей</Link></div>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-sotrudnikov"}  onClick={changeSlug} >Столы для сотрудников</Link></div>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-peregovorov"}  onClick={changeSlug} >Столы для переговоров</Link></div>

         

        </div>
      </div>
      <div className={ `dropdown ${dropdown ? 'open' : ""}`}  >
        <div className='nav_item'>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-rukovoditeley"}  onClick={changeSlug} >Домов</Link></div>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-sotrudnikov"}  onClick={changeSlug} >Бани</Link></div>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-peregovorov"}  onClick={changeSlug} >Гаражи</Link></div>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-peregovorov"}  onClick={changeSlug} >Навесы</Link></div>

          {/* <div className='nav_item_link'><Link to={"/mebel/Столы для менеджеров"}  onClick={changeSlug} >Столы для менеджеров</Link></div> */}

        </div>
      </div>
    </div>
    // журнальные столики
  )
}

export default Navbar