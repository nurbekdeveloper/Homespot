
import Header from '../componenets/header/Header'
import ContactForm from '../componenets/form/ContactForm'
import AboutService from '../componenets/ourserves/AboutService'

import Technology from '../componenets/technology/Technology'
import UsefulLinks from '../componenets/usefulLinks/UsefulLinks'
import Tree from '../componenets/trees/Tree'
import Partner from '../componenets/partneer/Partner'
import FaqQuestion from '../componenets/faqquestion/FaqQuestion'
import CardContainer from '../componenets/project/CardContainer'
import BuildingTypes from '../componenets/types/BuildTypes'
import TypesHome from '../componenets/types-home/typesHome'
// import typesHome from './types-home/typesHome'



function Main() {
  return (
    <div>
      <Header/>
      <TypesHome/>
      <BuildingTypes/>
      <Technology/>
      <UsefulLinks/>
      <CardContainer/>
      <ContactForm/>
      <AboutService/>
      <Partner/>
      <Tree/>
      <FaqQuestion/>

    </div>
  )
}

export default Main