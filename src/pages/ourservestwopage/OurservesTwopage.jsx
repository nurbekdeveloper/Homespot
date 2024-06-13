import React from 'react'
import './OurservesTwopage.css'
import  houseImage from '../../Assets/houses.png'
import { useParams } from 'react-router-dom'
import { foundations } from '../../componenets/data/foundation.db';


const OurservesTwopage = () => {
  const {slug} = useParams()

  const dataBeton = foundations.find(x=>x.nicname === slug)
  return (
    <div>

<div className="garage-container">
      <div className="text-section">
        <h1>{dataBeton?.title} / {dataBeton?.nicname}</h1>
        <p>
          <strong>Собственный деревянный дом</strong> — это жильё, в котором всё сделано с учётом личных потребностей и предпочтений. Чистый воздух, возможность самостоятельного планирования участка (при желании можно дополнительно возвести баню, гараж, навес и иное необходимое сооружение) и возможность выращивания овощей и фруктов — всё это вы получаете в частном доме.
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
  )
}

export default OurservesTwopage