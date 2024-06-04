import fundament from "../../Assets/beton.webp"

// homepage img

import house1 from '../../Assets/useful24.png';
import house2 from '../../Assets/useful24.png';
import house3 from '../../Assets/useful24.png';

// Card data img



// house img
import houseImage from '../../Assets/houses.png';



const CardsImages = [
  { id: 1, name: "Glass House 25A", type: "Баня", technology: "Клееный брус", dimensions: "100x100x100", price: "1 000 000 Р", image: houseImage },
  { id: 2, name: "Kontio Laaksolahti", image: houseImage },
  { id: 3, name: "Г-69", image: houseImage },
  { id: 4, name: "Н-49", image: houseImage },
  { id: 5, name: "База отдыха сибирь", image: houseImage },
  { id: 6, name: "Glass House 25A", image: houseImage },
  { id: 7, name: "Kontio Laaksolahti", image: houseImage },
  { id: 8, name: "Г-69", image: houseImage },
];

// Start Home section

const house = [
  {id :1 , title :"salom " , decription:"lorem3" ,decription2:"lorem4" , url :'home', img:fundament ,   },
  {id :2 , title :"salom " , decription:"lorem3" ,decription2:"lorem4" , url :'baths', img:fundament ,   },
  {id :3 , title :"salom " , decription:"lorem3" ,decription2:"lorem4" , url :'garages', img:fundament ,   },
  {id :4, title :"salom " , decription:"lorem3" ,decription2:"lorem4" , url :'awnings', img:fundament ,   },
]



const fundamentt = [
  {id:1, title :"Ленточный фундамент", url:'lentochiy-fundament', img :fundament},
  {id:2, title :"Свайно-ростверковый фундамент", url:'svayno-rostverkoviy-fundament', img :fundament},
  {id:3, title :"Монолитная плита", url:'monolitnaya-plita', img :fundament},
  {id:4, title :"Сборно-блочный фундамент", url:'Sborno-blochniy-fundament', img :fundament},
]




// home page img and text


const Homepage = [
  {
    id: 1,
    image: house1,
    date: '09.10.2022',
    title: '7 лучших пород древесины для...',
    description: 'Деревянное домостроение — это тип современного строительства, при котором вс...',
    link: '#'
  },
  {
    id: 2,
    image: house2,
    date: '09.10.2022',
    title: 'Дом без бани — не дом. 5 образцовых...',
    description: 'Банные процедуры — это ни с чем не сравнимое удовольствие...',
    link: '#'
  },
  {
    id: 3,
    image: house3,
    date: '09.10.2022',
    title: 'Эстетика пляжного дома',
    description: 'Дом из клееного бруса Вояжа 50 м2',
    link: '#'
  }
];
// foundation beton

// card data page

export {fundamentt , house, Homepage,CardsImages }
