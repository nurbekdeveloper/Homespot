import BuildingTypes from '../componenets/types/BuildTypes'

import Header from '../componenets/header/Header'
import ContactForm from '../componenets/form/ContactForm'

import AboutService from '../componenets/ourserves/AboutService'
import Footer from '../componenets/common/footer/Footer'

import Navbar from '../componenets/common/navbar/Navbar'
import Technology from '../componenets/technology/Technology'
import UsefulLinks from '../componenets/usefulLinks/UsefulLinks'
import Tree from '../componenets/trees/Tree'
import Projects from '../componenets/project/Projects'
import Compare from '../componenets/compare/Compare'
import Frame from '../componenets/frame/Frame'
import Modal from '../componenets/appliacation/Modal'

import Worker from './worker/Worker'


function Main() {
  return (
    <div>

      <Header/>
      <Worker/>
      <AboutService/>
      <ContactForm/>
      <Technology/>
      <BuildingTypes/>
      <UsefulLinks/>
      <Modal/>
      <Projects/>
      <Compare/>
      <Frame/>
      <Tree/>





    </div>
  )
}

export default Main