import React from 'react'
import './OurservesTwopage.css'

import { useParams } from 'react-router-dom'
import { foundations } from '../../componenets/data/foundation.db';


const OurservesTwopage = () => {
  const {slug} = useParams()

  const dataBeton = foundations.find(x=>x.nicname === slug)
  return (
    <div>

<div>
<div className="garage-container">
      <div className="text-section">
        <h1>{dataBeton?.title} / {dataBeton?.nicname}</h1>
        <p>
        {dataBeton.maindescription}
        </p>
        <p>
         {dataBeton?.description}
        </p>
      </div>
      <div className="image-section">
        <img src={dataBeton?.imageUrl} alt="Wooden House" />
      </div>
    </div>
    </div>

    <div className="uniqueContainer">
      <header className="uniqueHeader">
        <h1 className="uniqueTitle">{dataBeton?.title}</h1>
      </header>
      <main className="uniqueContent">
        <p className="uniqueText">
         {dataBeton.description2}
        </p>
        <h2 className="uniqueSubtitle"><b>{dataBeton.titleDescription}</b></h2>
        <ul className="uniqueList">
          <li className="uniqueListItem">
            {dataBeton.list1}
          </li>
          <li className="uniqueListItem">
          {dataBeton.list2}
          </li>
          <li className="uniqueListItem">
          {dataBeton.list3}
          </li>
          <li className="uniqueListItem">
          {dataBeton.list4}
          </li>
        </ul>
        <p className="uniqueText">
         {dataBeton.descriptionEnd}
        </p>
      </main>
    </div>


</div>
  )
}

export default OurservesTwopage