
import { Suspense, lazy } from 'react';
import './App.css';

import {Routes,Route} from "react-router-dom"
const Navbar = lazy(()=>import("./componenets/common/navbar/Navbar"))
const Footer = lazy(()=>import("./componenets/common/footer/Footer"))
const Contact = lazy(()=>import("./pages/contact/Contact"))
const Main = lazy(()=>import("./pages/main"))



function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>...loader</h1>}>
        <Navbar/>

          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>

        <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
