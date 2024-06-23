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
// start gazablok
import gazablok1 from '../../Assets/gazablok (1).jpg'
import gazablok2 from '../../Assets/gazablok (2).jpg'
import gazablok3 from '../../Assets/gazablok (3).jpg'
import gazablok4 from '../../Assets/gazablok (4).jpg'
import gazablok5 from '../../Assets/gazablok (5).jpg'


// Ensure the images are in the src folder
import gk1 from '../../Assets/gk (1).jpg'
import gk2 from '../../Assets/gk (2).jpg'
import gk3 from '../../Assets/gk (3).jpg'
import gk4 from '../../Assets/gkk2 (1).jpg'
import gk5 from '../../Assets/gkk2 (2).jpg'
import gk6 from '../../Assets/gkk2 (3).jpg'
import gk7 from '../../Assets/gkk2 (4).jpg'
import gk9 from '../../Assets/gkk2 (5).jpg'
import gk8 from '../../Assets/gkk2 (6).jpg'

// gkk
import gkk1 from '../../Assets/gkk (1).jpg'
import gkk2 from '../../Assets/gkk (2).jpg'
import gkk3 from '../../Assets/gkk (3).jpg'
import gkk4 from '../../Assets/gkk (4).jpg'
import gkk5 from '../../Assets/gkk (5).jpg'
import gkk6 from '../../Assets/gkk (6).jpg'
import gkk7 from '../../Assets/gkk3 (1).jpg'
import gkk8 from '../../Assets/gkk3 (2).jpg'
import gkk9 from '../../Assets/gkk3 (3).jpg'
import gkk10 from '../../Assets/gkk3 (4).jpg'
import gkk11 from '../../Assets/gkk3 (5).jpg'
import gkk12 from '../../Assets/gkk3 (6).jpg'
import gkk13 from '../../Assets/gkk4 (1).jpg'
import gkk14 from '../../Assets/gkk4 (2).jpg'
import gkk15 from '../../Assets/gkk4 (3).jpg'
import gkk16 from '../../Assets/gkk4 (4).jpg'
import gkk17 from '../../Assets/gkk4 (5).jpg'



// kirpich
import kirpich1 from '../../Assets/kirpich (1).jpg'
import kirpich2 from '../../Assets/kirpich (2).jpg'
import kirpich3 from '../../Assets/kirpich (3).jpg'
import kirpich4 from '../../Assets/kirpich (4).jpg'
import kirpich5 from '../../Assets/kirpich (5).jpg'
import kirpich6 from '../../Assets/kirpich 2- (1).jpg'
import kirpich7 from '../../Assets/kirpich 2- (2).jpg'
import kirpich8 from '../../Assets/kirpich 2- (3).jpg'
import kirpich9 from '../../Assets/kirpich 2- (4).jpg'
import kirpich10 from '../../Assets/kirpich 2- (5).jpg'
import kirpich11 from '../../Assets/kirpich3 (1).jpg'
import kirpich12 from '../../Assets/kirpich3 (2).jpg'
import kirpich13 from '../../Assets/kirpich3 (3).jpg'
import kirpich14 from '../../Assets/kirpich3 (4).jpg'
import kirpich15 from '../../Assets/kirpich3 (5).jpg'


// karkazne
import karkazn1 from '../../Assets/karkazn (1).jpg'
import karkazn2 from '../../Assets/karkazn (2).jpg'
import karkazn3 from '../../Assets/karkazn (3).jpg'
import karkazn4 from '../../Assets/karkazn (4).jpg'
import karkazn5 from '../../Assets/karkazn (5).jpg'
import karkazn6 from '../../Assets/karkazn6 (1).jpg'
import karkazn7 from '../../Assets/karkazn6 (2).jpg'
import karkazn8 from '../../Assets/karkazn6 (3).jpg'
import karkazn9 from '../../Assets/karkazn6 (4).jpg'
import karkazn10 from '../../Assets/karkazn6 (5).jpg'
import karkazn11 from '../../Assets/karkaz2 (1).jpg'
import karkazn12 from '../../Assets/karkaz2 (2).jpg'
import karkazn13 from '../../Assets/karkaz2 (3).jpg'
import karkazn14 from '../../Assets/karkaz2 (4).jpg'
import karkazn15 from '../../Assets/karkaz2 (5).jpg'

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
    image:gazablok1,
    imgs:[
      { id: 0, value: gazablok2 },
      { id: 1, value: gazablok3 },
      { id: 2, value: gazablok4 },
      { id: 3, value: gazablok5 },

    ],
    url: "g-69-25",
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
    image:  gk4,
    imgs:[
      { id: 0, value: gk5 },
      { id: 1, value: gk6 },
      { id: 2, value: gk7 },
      { id: 3, value: gk8 },
      { id: 4, value: gk9 },
    ],
    url: "g-69-24",
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
    image:gkk7,
    imgs:[
      { id: 0, value: gkk8 },
      { id: 1, value: gkk9 },
      { id: 2, value: gkk10 },
      { id: 3, value: gkk11 },
      { id: 4, value: gkk12 },

      ],
    url: "g-69-205",
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
    image:gkk13,
    imgs:[
      { id: 0, value: gkk14 },
      { id: 1, value: gkk15 },
      { id: 2, value: gkk16 },
      { id: 3, value: gkk17 },


      ],
      // almashtramiz
    url: "g-69-205",
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

    image:kirpich6,
    imgs:[
      { id: 0, value: kirpich6 },
      { id: 1, value: kirpich7 },
      { id: 3, value: kirpich8 },
      { id: 4, value: kirpich9 },
      { id: 5, value: kirpich10 },


    ],
    url: "g-69-1",
    type: "kirpich",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: " Монолитная железобетонная плита, 300 мм, с разводкой канализации и водопровода.",
    steni :"Кирпичные, толщиной 375 мм, армирование первого ряда и каждого второго ряда по шведским стандартам."
  },

  {
    id: 80,
    name: "Г-69",

    image:  gk4,
    imgs:[
      { id: 0, value: gk5 },
      { id: 1, value: gk6 },
      { id: 2, value: gk7 },
      { id: 3, value: gk8 },
      { id: 4, value: gk9 },
    ],
    url: "g-69-1-3",
    type: "kirpich",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: " Монолитная железобетонная плита, 300 мм, с разводкой канализации и водопровода.",
    steni :"Кирпичные, толщиной 375 мм, армирование первого ряда и каждого второго ряда по шведским стандартам."
  },
  {
    id: 80,
    name: "Г-69",

    image:  kirpich11,
    imgs:[
      { id: 0, value: kirpich12 },
      { id: 1, value: kirpich13 },
      { id: 2, value: kirpich14 },
      { id: 3, value: kirpich15 },

    ],
    url: "g-69-1-3",
    type: "kirpich",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: " Монолитная железобетонная плита, 300 мм, с разводкой канализации и водопровода.",
    steni :"Кирпичные, толщиной 375 мм, армирование первого ряда и каждого второго ряда по шведским стандартам."
  },
  {
    id: 80,
    name: "Г-69",


    image:gkk7,
    imgs:[
      { id: 0, value: gkk8 },
      { id: 1, value: gkk9 },
      { id: 2, value: gkk10 },
      { id: 3, value: gkk11 },
      { id: 4, value: gkk12 },

      ],
    url: "g-69-1-4",
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

    image:karkazn1,
    imgs:[
      { id: 0, value: karkazn2 },
      { id: 1, value: karkazn3 },
      { id: 2, value: karkazn4 },
      { id: 3, value: karkazn5 },
      ],
    url: "g-69-104",
    type: "karkasniy",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: " Свайный фундамент, с разводкой канализации и водопровода.",
    steni :"Каркасные, утепленные минеральной ватой толщиной 250 мм, обшитые снаружи OSB-плитами, ветровлагозащитной мембраной и фасадными панелями."
  },

  {
    id: 101,
    name: "Г-69",

    image:karkazn1,
    imgs:[
      { id: 0, value: karkazn2 },
      { id: 1, value: karkazn3 },
      { id: 2, value: karkazn4 },
      { id: 3, value: karkazn5 },
      ],
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
    image:karkazn6,
    imgs:[
      { id: 0, value: karkazn7 },
      { id: 1, value: karkazn8 },
      { id: 2, value: karkazn9 },
      { id: 3, value: karkazn10 },
      ],
    url: "g-69-4",
    type: "karkasniy",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "Свайный фундамент, с разводкой канализации и водопровода.",
    steni :"Каркасные, утепленные минеральной ватой толщиной 250 мм, обшитые снаружи OSB-плитами, ветровлагозащитной мембраной и фасадными панелями."
  },
  {
    id: 11,
    name: "Г-69",
    image:karkazn11,
    imgs:[
      { id: 0, value: karkazn12 },
      { id: 1, value: karkazn13 },
      { id: 2, value: karkazn14 },
      { id: 3, value: karkazn15 },
      ],
    url: "g-69-4-1",
    type: "karkasniy",
     floor :"",
    room:"",
    price:"",
    space:"",
    fundament: "Свайный фундамент, с разводкой канализации и водопровода.",
    steni :"Каркасные, утепленные минеральной ватой толщиной 250 мм, обшитые снаружи OSB-плитами, ветровлагозащитной мембраной и фасадными панелями."
  },
  {
    id: 11,
    name: "Г-69",
    image:gkk7,
    imgs:[
      { id: 0, value: gkk8 },
      { id: 1, value: gkk9 },
      { id: 2, value: gkk10 },
      { id: 3, value: gkk11 },
      { id: 4, value: gkk12 },

      ],
    url: "g-69-4-2",
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