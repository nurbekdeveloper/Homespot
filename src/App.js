
import { Suspense, lazy } from 'react';
import './App.css';

import { Routes, Route } from "react-router-dom"
import House from './pages/houses/Houses';
import Navbar from './componenets/Navbar';
import Footer from './componenets/common/footer/Footer'
import AllHouseType from './pages/allHousesType/allHouseType';
// import HomePage from './pages/HomePage';
const Contact = lazy(() => import("./pages/contact/Contact"))
const Worker = lazy(() => import("./pages/worker/Worker"))
const About = lazy(() => import("./pages/about/About"))
const Construction = lazy(() => import("./pages/Construction/Construction"))
const Services = lazy(() => import("./pages/services/Sevices"))
const Main = lazy(() => import("./pages/main"))
const TypesHome  = lazy(() => import("./componenets/types-home/typesHome"))
const CommercialBuilding = lazy(() => import("./pages/CommercialBuilding/CommercialBuilding"))



function App() {
  
  return (


    <div className="App">
      <Suspense fallback={<h1>...loader</h1>}>
        {/* <HomePage/> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<Worker />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/project" element={<House />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/:slug' element={<CommercialBuilding />} />
          <Route path='/construction/:slug' element={<TypesHome/>} />
          <Route path='/construction-in/:slug/' element={<AllHouseType/>} />
        </Routes>

        <Footer />
      </Suspense>
    </div>

  );
}

export default App;
