
import Header from '../componenets/header/Header'
import ContactForm from '../componenets/form/ContactForm'
import AboutService from '../componenets/ourserves/AboutService'

import Technology from '../componenets/technology/Technology'
// import UsefulLinks from '../componenets/usefulLinks/UsefulLinks'
import Tree from '../componenets/trees/Tree'
import Partner from '../componenets/partneer/Partner'
import FaqQuestion from '../componenets/faqquestion/FaqQuestion'
import CardContainer from '../componenets/project/CardContainer'
import BuildingTypes from '../componenets/types/BuildTypes'
import ClientOpinion from './ClientOpinion/ClientOpinion'
import OurservesTwopage from './ourservestwopage/OurservesTwopage'
// import MoreInformation from './albom/MoreInformation'







function Main() {
  return (
    <div>
      <Header/>
      <OurservesTwopage/>
      <BuildingTypes/>
      <Tree/>
      {/* <UsefulLinks/> */}
      <AboutService/>
      <CardContainer/>
      <ClientOpinion/>

      <ContactForm/>
      <Technology/>


      <Partner/>
      <FaqQuestion/>

    </div>
  )
}

export default Main