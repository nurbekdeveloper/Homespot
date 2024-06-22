// Start Home section
import karkaz1 from '../../Assets/gazablok (1).jpg'
import karkaz2 from '../../Assets/gazablok (2).jpg'
import karkaz3 from '../../Assets/gazablok (3).jpg'
import karkaz4 from '../../Assets/gazablok (4).jpg'
import karkaz5 from '../../Assets/gazablok (5).jpg'

import houseImage from "../../Assets/houses.png";
import house002 from "../../Assets/002.jpg";
import house003 from "../../Assets/003.jpg";
import house004 from "../../Assets/004.jpg";
import house006 from "../../Assets/006.jpg";
// Ensure the images are in the src folder
import gk1 from '../../Assets/gk (1).jpg'
import gk2 from '../../Assets/gk (2).jpg'
import gk3 from '../../Assets/gk (3).jpg'
// gkk
import gkk1 from '../../Assets/gkk (1).jpg'
import gkk2 from '../../Assets/gkk (2).jpg'
import gkk3 from '../../Assets/gkk (3).jpg'
import gkk4 from '../../Assets/gkk (4).jpg'
import gkk5 from '../../Assets/gkk (5).jpg'
import gkk6 from '../../Assets/gkk (6).jpg'

// kirpich
import kirpich1 from '../../Assets/kirpich (1).jpg'
import kirpich2 from '../../Assets/kirpich (2).jpg'
import kirpich3 from '../../Assets/kirpich (3).jpg'
import kirpich4 from '../../Assets/kirpich (4).jpg'
import kirpich5 from '../../Assets/kirpich (5).jpg'

const houses = [
  // start gazabeton

  {
    id: 1,
    name: "Glass House 25A",
    type: "Баня",
    url:'glass-1',
    technology: "Клееный брус",
    dimensions: "100x100x100",
    price: "1 000 000 Р",
    image:  gk1,
    imgs:[
      { id: 0, value: gk3 },
      { id: 1, value: gk3 },
    ],
    type: "gazabeton",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "	 Монолитная железобетонная плита, 300 мм, с разводкой канализации и водопровода.",
    steni :"Газобетонные блоки, 375 мм, D400, армирование первого ряда и каждого "

  },

  {
    id: 2,
    name: "Glass House 25A",
    image:gkk1,
    imgs: [
      { id: 0, value: gkk2 },
      { id: 1, value: gkk3 },
      { id: 2, value: gkk4 },
      { id: 3, value: gkk5 },
      { id: 4, value: gkk6 },
],
    type: "Баня",
    technology: "Клееный брус",
    dimensions: "100x100x100",
    price: "1 000 000 Р",
    url: "kontio-laaksolahti-1",
    type: "gazabeton",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "	 Монолитная железобетонная плита, 300 мм, с разводкой канализации и водопровода.",
    steni :"Газобетонные блоки, 375 мм, D400, армирование первого ряда и каждого "
  },
  {
    id: 3,
    name: "Glass House 25A",
    image: house003,
    url: "g-69",
    type: "gazabeton",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: " Монолитная железобетонная плита, 300 мм, с разводкой канализации и водопровода.",
    steni :"Газобетонные блоки, 375 мм, D400, армирование первого ряда и каждого "
  },
  {
    id: 4,
    name: "Glass House 25A",
    image: house004,
    url: "h-64",
    type: "gazabeton",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: " Монолитная железобетонная плита, 300 мм, с разводкой канализации и водопровода.",
    steni :"Газобетонные блоки, 375 мм, D400, армирование первого ряда и каждого "
  },
  // end gazabeton

  // kirpich start

  {
    id: 5,
    name: "Glass House 25A",
    image:  gk1,
    imgs:[   gk2, gk3],
    url: "sibir-dam-olish-markazi",
    type: "kirpich",
    floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :"",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: " Монолитная железобетонная плита, 300 мм, с разводкой канализации и водопровода.",
    steni :"Кирпичные, толщиной 375 мм, армирование первого ряда и каждого второго ряда по шведским стандартам."
  },

  {
    id: 6,
    name: "Glass House 25A",
    image:gkk1,
    imgs:[
      { id: 0, value: gkk2 },
      { id: 1, value: gkk3 },
      { id: 2, value: gkk4 },
      { id: 3, value: gkk5 },
      { id: 4, value: gkk6 },
    ],
    url: "glass-house-25",
    type: "kirpich",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: " Монолитная железобетонная плита, 300 мм, с разводкой канализации и водопровода.",
    steni :"Кирпичные, толщиной 375 мм, армирование первого ряда и каждого второго ряда по шведским стандартам."
  },

  {
    id: 7,
    name: "Kontio Laaksolahti",
    image:kirpich1,
    imgs:[
      { id: 0, value:  kirpich2 },
      { id: 1, value:  kirpich3 },
      { id: 2, value:  kirpich4 },
      { id: 3, value:  kirpich5 },
],
    url: "kontio-laaksolahti-1",
    type: "kirpich",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: " Монолитная железобетонная плита, 300 мм, с разводкой канализации и водопровода.",
    steni :"Кирпичные, толщиной 375 мм, армирование первого ряда и каждого второго ряда по шведским стандартам."
  },
  {
    id: 8,
    name: "Г-69",
    image: houseImage,
    url: "g-69-1",
    type: "kirpich",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: " Монолитная железобетонная плита, 300 мм, с разводкой канализации и водопровода.",
    steni :"Кирпичные, толщиной 375 мм, армирование первого ряда и каждого второго ряда по шведским стандартам."
  },

  // start karkazniya
  {
    id: 9,
    name: "Г-69",
    image:gkk1,
    imgs:[
      { id: 0, value: gkk2 },
      { id: 1, value: gkk3 },
      { id: 2, value: gkk4 },
      { id: 3, value: gkk5 },
      { id: 4, value: gkk6 },
    ],
    url: "g-69-2",
    type: "karkasniy",
     floor :"",
    room:"",
    price:"",
    space:"",
   fundament: "Свайный фундамент, с разводкой канализации и водопровода.",
    steni :"Каркасные, утепленные минеральной ватой толщиной 250 мм, обшитые снаружи OSB-плитами, ветровлагозащитной мембраной и фасадными панелями."
  },
  {
    id: 10,
    name: "Г-69",
    image: houseImage,
    url: "g-69-3",
    type: "karkasniy",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: " Свайный фундамент, с разводкой канализации и водопровода.",
    steni :"Каркасные, утепленные минеральной ватой толщиной 250 мм, обшитые снаружи OSB-плитами, ветровлагозащитной мембраной и фасадными панелями."
  },
  {
    id: 11,
    name: "Г-69",
    image: houseImage,
    url: "g-69-4",
    type: "karkasniy",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "Свайный фундамент, с разводкой канализации и водопровода.",
    steni :"Каркасные, утепленные минеральной ватой толщиной 250 мм, обшитые снаружи OSB-плитами, ветровлагозащитной мембраной и фасадными панелями."
  },


  // start tiny house
  {
    id: 12,
    name: "Г-69",
    image: houseImage,
    url: "g-69-5",
    type: "tiny-house",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
  },
  {
    id: 13,
    name: "Г-69",
    image: houseImage,
    url: "g-69-6",
    type: "tiny-house",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
  },
  {
    id: 14,
    name: "Г-69",
    image: houseImage,
    url: "g-69-7",
    type: "tiny-house",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
  },
  {
    id: 15,
    name: "Г-69",
    image: houseImage,
    url: "g-69-8",
    type: "tiny-house",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
  },
  {
    id: 16,
    name: "Г-69",
    image: houseImage,
    url: "g-69-9",
    type: "tiny-house",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
  },-
//  bath start
{
  id: 17,
  name: "Г-69",
  image: houseImage,
  url: "g-69-10",
  type: "bathroom",
   floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
},
{
  id: 18,
  name: "Г-69",
  image: houseImage,
  url: "g-69-11",
  type: "bathroom",
   floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
},
{
  id: 19,
  name: "Г-69",
  image: houseImage,
  url: "g-69-12",
  type: "bathroom",
   floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
},
{
  id: 20,
  name: "Г-69",
  image: houseImage,
  url: "g-69-13",
  type: "bathroom",
   floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
},
{
  id: 21,
  name: "Г-69",
  image: houseImage,
  url: "g-69-14",
  type: "bathroom",
   floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
},

// garaj start

{
  id: 22,
  name: "Г-69",
  image: houseImage,
  url: "g-69-15",
 type: "garaj",
  floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
},
{
  id: 23,
  name: "Г-69",
  image: houseImage,
  url: "g-69-16",
  type: "garaj",
   floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
},
{
  id: 24,
  name: "Г-69",
  image: houseImage,
  url: "g-69-16",
  type: "garaj",
   floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
},
{
  id: 25,
  name: "Г-69",
  image: houseImage,
  url: "g-69-17",
  type: "garaj",
   floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
},
{
  id: 26,
  name: "Г-69",
  image: houseImage,
  url: "g-69-18",
  type: "garaj",
   floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
},

// Komunal obyekts

{
  id: 22,
  name: "Г-69",
  image: houseImage,
  url: "g-69-19",
 type: "komunal-obyekts",
  floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
},
{
  id: 23,
  name: "Г-69",
  image: houseImage,
  url: "g-69-20",
  type: "komunal-obyekts",
   floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
},
{
  id: 24,
  name: "Г-69",
  image: houseImage,
  url: "g-69-21",
  type: "komunal-obyekts",
   floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
},
{
  id: 25,
  name: "Г-69",
  image: houseImage,
  url: "g-69-22",
  type: "komunal-obyekts",
   floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
},
{
  id: 26,
  name: "Г-69",
  image: houseImage,
  url: "g-69-23",
  type: "komunal-obyekts",
   floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "",
    steni :""
},




];

const housedb = [
  {id :1 , title :"salom " ,  url :'',  decription:"lorem3" ,decription2:"lorem4" , url :'home', img:karkaz1 ,   },
  {id :2 , title :"salom " , decription:"lorem3" ,decription2:"lorem4" , url :'baths', img:karkaz2 ,   },
  {id :3 , title :"salom " , decription:"lorem3" ,decription2:"lorem4" , url :'garages', img:karkaz3 ,   },
  {id :4, title :"salom " , decription:"lorem3" ,decription2:"lorem4" , url :'awnings', img:karkaz4 ,   },
  {id :5, title :"salom " , decription:"lorem3" ,decription2:"lorem4" , url :'awnings', img:karkaz5 ,   },
]



export {housedb , houses}