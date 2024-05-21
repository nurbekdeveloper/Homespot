import React from 'react'
import Navbar from '../componenets/navbar/Navbar'


import BuildingTypes from '../componenets/types/BuildTypes'

function Main() {
  return (
    <div>
      <Navbar/>
      {/* <Header/> */}
      <BuildingTypes/>
    </div>
  )
}

export default Main