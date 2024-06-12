import React, {  useEffect, useState } from 'react'

//style
import "./defaultNavbar.css"
import  {BsChevronDown} from "react-icons/bs"
import logo from "../../Assets/Logo.png"
//router
import { Link,useLocation } from 'react-router-dom'

const Navbar = () => {

  const [show, setShow] = useState(false)
  const controlNavbar = () => {
      if (window.scrollY > 250 ) {
          setShow(true)
          setDropDown(true)
          setDropDown2(true)
      }else{
        setShow(false)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])
  const changeSlug = ()=>{
    setDropDown(true)

  }
  const {pathname} = useLocation()
  const [dropdown,setDropDown] = useState(true)
  const [dropdown2,setDropDown2] = useState(true)

 const hideDropdown =()=>{
  setDropDown(true)
  setDropDown2(true)
 }
  return (
    <div className='navbar'>
      <div className="nav">


      <div className='navbar_logo'>
        <Link to={'/'}><img src={logo} alt="logo" /></Link>
      </div>

      <div className='navbar_nav'>
      <Link to={"/"} onClick={hideDropdown} className={`${(pathname === "/") ? "active" : "navbar_link"}`}>Главная  </Link>
        <Link id='dropdown' to={"/construction"} onClick={()=>setDropDown(prev=>!prev)} className={`${(pathname === "construction") ? "active" : "navbar_link"}`} > Строительство  &nbsp; <BsChevronDown/></Link>
        <Link id='dropdown' to={"/services"}  onClick={()=>setDropDown2(prev=>!prev)}  className={`${(pathname === "/about") ? "active" : "navbar_link"}`}>Наши Услуги   &nbsp; <BsChevronDown/></Link>
        <Link to={"/design"} onClick={hideDropdown} className={`${(pathname === "/design") ? "active" : "navbar_link"}`}>Проектирование </Link>
        <Link to={"/about"} onClick={hideDropdown} className={`${(pathname === "/sevices") ? "active" : "navbar_link"}`}>  О Нас </Link>
        <Link to={"/project"} onClick={hideDropdown} className={`${(pathname === "/project") ? "active" : "navbar_link"}`}> Наши работы </Link>
        <Link to={"/contact"} onClick={hideDropdown} className={`${(pathname === "/contact") ? "active" : "navbar_link"}`}> Контакты </Link>
      </div>

      <a href='tel:+998712357447' className='navbar_phone'>

        <p>+7 <span> (123) 456-7890</span></p>
      </a>
      <button>ОСТАВИТЬ ЗАЯВКУ</button>
      </div>
      <div className={ `dropdown ${dropdown ? 'open' : ""}`}  >
        <div className='nav_item'>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-rukovoditeley"}  onClick={changeSlug} >Домов</Link></div>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-sotrudnikov"}  onClick={changeSlug} >Тини хаус</Link></div>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-peregovorov"}  onClick={changeSlug} >Бани</Link></div>

        </div>
        <div className='nav_item'>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-rukovoditeley"}  onClick={changeSlug} >Гаражи/Навесы</Link></div>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-sotrudnikov"}  onClick={changeSlug} >Комм. объекты</Link></div>




        </div>
      </div>
      <div className={ `dropdown ${dropdown2 ? 'open' : ""}`}  >
        <div className='nav_item'>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-rukovoditeley"}  onClick={changeSlug} >Монтаж фундамента</Link></div>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-sotrudnikov"}  onClick={changeSlug} >Кровельные работы</Link></div>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-peregovorov"}  onClick={changeSlug} >Наружная отделка дома</Link></div>


          {/* <div className='nav_item_link'><Link to={"/mebel/Столы для менеджеров"}  onClick={changeSlug} >Столы для менеджеров</Link></div> */}

        </div>
        <div className='nav_item'>
          <div className='nav_item_link'><Link to={"/mebel/stol-dlya-peregovorov"}  onClick={changeSlug} >Внутренняя отделка дома</Link></div>
        </div>
      </div>
    </div>
    // журнальные столики
  )
}

export default Navbar