
import { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route} from "react-router-dom"
import House from './pages/houses/Houses';

const Navbar = lazy(()=>import("./componenets/common/navbar/Navbar"))
const Footer = lazy(()=>import("./componenets/common/footer/Footer"))
const Contact = lazy(()=>import("./pages/contact/Contact"))
const Worker = lazy(()=>import("./pages/worker/Worker"))
const About = lazy(()=>import("./pages/about/About"))
const Main = lazy(()=>import("./pages/main"))



function App() {
  return (


        <div className="App">
      <Suspense fallback={<h1>...loader</h1>}>


          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/design" element={<Worker/>}/>
            <Route path="/project" element={<House/>}/>

          </Routes>


      </Suspense>
    </div>

  );
}

export default App;
