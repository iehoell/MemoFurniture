import chair_1 from '../assets/chair_1.webp'
import chair_2 from '../assets/chair_2.webp'
import chair_3 from '../assets/chair_3.jpg'
import chair_4 from '../assets/chair_4.jpg'
import chair_5 from '../assets/chair_5.jpg'
import chair_6 from '../assets/chair3.jpg'
import sofa_1 from '../assets/sofa_1.jpg'
import sofa_2 from '../assets/sofa_2.jpg'
import sofa_3 from '../assets/sofa_3.jpg'
import sofa_4 from '../assets/sofa_4.jpg'
import sofa_5 from '../assets/sofa_5.jpg'
import bed_1 from '../assets/bed_1.jpg';
import bed_2 from '../assets/bed_2.webp';
import bed_3 from '../assets/bed_3.jpg';
import bed_4 from '../assets/bed_4.jpg';
import bed_5 from '../assets/bed_5.jpg';
import cabinet_1 from '../assets/cabinet_1.jpg';
import cabinet_2 from '../assets/cabinet_2.jpg';
import cabinet_3 from '../assets/cabinet_3.webp';
import cabinet_4 from '../assets/cabinet_4.webp';
import cabinet_5 from '../assets/cabinet_5.jpg';
import closet_1 from '../assets/closet_1.jpg';
import closet_2 from '../assets/closet_2.jpg';
import closet_3 from '../assets/closet_3.jpg';
import closet_4 from '../assets/closet_4.jpg';
import closet_5 from '../assets/closet_5.jpg';
import closet_6 from '../assets/closet_6.jpg';

const productsData = [
  {
    key: 1,
    type : "кресло",
    name: "Кресло для отдыха Triniti",
    price : "22 399₽",
    image: {chair_1},
    purpose: "предмет декора",
    material: "ткань",
    color: "бежевый",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 2,
    type : "кресло",
    name: "Кресло-раскладушка Triniti",
    price : "18 399₽",
    image: {chair_2},
    purpose: "предмет декора",
    material: "ткань",
    color: "бежевый",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 3,
    type : "кресло",
    name: "Кресло-кровать Talot",
    price : "18 499₽",
    image: {chair_3},
    purpose: "предмет декора",
    material: "кожа",
    color: "серый",
    style: "modern",
    brand: "Talot"
  },
  {
    key: 4,
    type : "кресло",
    name: "Стул Tacery monde",
    price : "13 599₽",
    image: {chair_4},
    purpose: "предмет декора",
    material: "ткань",
    color: "черный",
    style: "modern",
    brand: "Tacery"
  },
  {
    key: 5,
    type : "кресло",
    name: "Кресло декоративное Triniti",
    price : "22 399₽",
    image: {chair_5},
    purpose: "предмет декора",
    material: "ткань",
    color: "бежевый",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 6,
    type : "кресло",
    name: "Кресло для отдыха Talot",
    price : "15 499₽",
    image: {chair_6},
    purpose: "предмет декора",
    material: "велюр",
    color: "бардовый",
    style: "modern",
    brand: "Talot"
  },


  {
    key: 7,
    type : "диван",
    name: "Диван Нельс Велюр Triniti",
    price : "44 399₽",
    image: {sofa_1},
    purpose: "предмет декора",
    material: "велюр",
    color: "бежевый",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 8,
    type : "диван",
    name: "Трехместный диван L Gray",
    price : "22 399₽",
    image: {sofa_2},
    purpose: "предмет декора",
    material: "ткань",
    color: "серый",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 9,
    type : "диван",
    name: "Двухместный диван L Gray",
    price : "18 499₽",
    image: {sofa_3},
    purpose: "предмет декора",
    material: "ткань",
    color: "серый",
    style: "modern",
    brand: "Talot"
  },
  {
    key: 10,
    type : "диван",
    name: "Диван-раскладушка Tacery",
    price : "47 599₽",
    image: {sofa_4},
    purpose: "предмет декора",
    material: "кожа",
    color: "черный",
    style: "modern",
    brand: "Tacery"
  },
  {
    key: 11,
    type : "диван",
    name: "4-местный диван Triniti new",
    price : "52 999₽",
    image: {sofa_5},
    purpose: "предмет декора",
    material: "ткань",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 12,
    type : "диван",
    name: "4-местный диван Triniti new",
    price : "52 999₽",
    image: {sofa_5},
    purpose: "предмет декора",
    material: "ткань",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  },


  {
    key: 13,
    type : "кровать",
    name: "Кровать двуспальная Panther",
    price : "44 399₽",
    image: {bed_1},
    purpose: "предмет декора",
    material: "ткань",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 14,
    type : "кровать",
    name: "Трехместная кровать Кальвадос",
    price : "62 399₽",
    image: {bed_2},
    purpose: "предмет декора",
    material: "ткань",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 15,
    type : "кровать",
    name: "Односпальная кровать Мадагаскар",
    price : "18 499₽",
    image: {bed_3},
    purpose: "предмет декора",
    material: "ткань",
    color: "бардовый",
    style: "modern",
    brand: "Talot"
  },
  {
    key: 16,
    type : "кровать",
    name: "Кровать-раскладушка New Era",
    price : "47 599₽",
    image: {bed_4},
    purpose: "предмет декора",
    material: "велюр",
    color: "бардовый",
    style: "modern",
    brand: "Tacery"
  },
  {
    key: 17,
    type : "кровать",
    name: "Кровать одноместная Paradise",
    price : "82 999₽",
    image: {bed_5},
    purpose: "предмет декора",
    material: "кожа",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 18,
    type : "кровать",
    name: "Кровать одноместная Paradise",
    price : "82 999₽",
    image: {bed_5},
    purpose: "предмет декора",
    material: "кожа",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  },


  {
    key: 19,
    type : "Шкаф",
    name: "Шкаф Triniti Decay",
    price : "19 399₽",
    image: {cabinet_1},
    purpose: "предмет декора",
    material: "дерево",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 20,
    type : "Шкаф",
    name: "Шкаф для вещей Converge",
    price : "32 399₽",
    image: {cabinet_2},
    purpose: "предмет декора",
    material: "дсп",
    color: "серый",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 21,
    type : "Шкаф",
    name: "Шкафчик-вешалка декоративный Quas",
    price : "21 159₽",
    image: {cabinet_3},
    purpose: "предмет декора",
    material: "дерево",
    color: "синий",
    style: "modern",
    brand: "Talot"
  },
  {
    key: 22,
    type : "Шкаф",
    name: "Шкафчик вещевой декоративный Wex",
    price : "28 599₽",
    image: {cabinet_4},
    purpose: "предмет декора",
    material: "дсп",
    color: "фиолетовый",
    style: "modern",
    brand: "Tacery"
  },
  {
    key: 23,
    type : "Шкаф",
    name: "Шкафчик для принадлежностей Exort",
    price : "12 999₽",
    image: {cabinet_5},
    purpose: "предмет декора",
    material: "дсп",
    color: "оранжевый",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 24,
    type : "Шкаф",
    name: "Шкафчик для принадлежностей Exort",
    price : "12 999₽",
    image: {cabinet_5},
    purpose: "предмет декора",
    material: "дсп",
    color: "оранжевый",
    style: "modern",
    brand: "Triniti"
  },


  {
    key: 25,
    type : "Тумба",
    name: "Комод Lunar Blessing",
    price : "24 399₽",
    image: {closet_1},
    purpose: "предмет декора",
    material: "дерево",
    color: "бежевый",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 26,
    type : "Тумба",
    name: "Тумба Lucent Beam",
    price : "27 399₽",
    image: {closet_2},
    purpose: "предмет декора",
    material: "дсп",
    color: "серый",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 27,
    type : "Тумба",
    name: "Комод Eclipse",
    price : "21 159₽",
    image: {closet_3},
    purpose: "предмет декора",
    material: "дерево",
    color: "черный",
    style: "modern",
    brand: "Talot"
  },
  {
    key: 28,
    type : "Тумба",
    name: "Тумба прикроватная с зеркалом Blur",
    price : "25 599₽",
    image: {closet_4},
    purpose: "предмет декора",
    material: "дерево",
    color: "серый",
    style: "modern",
    brand: "Tacery"
  },
  {
    key: 29,
    type : "Тумба",
    name: "Мини-тумба moment of courage декоративная",
    price : "25 999₽",
    image: {closet_5},
    purpose: "предмет декора",
    material: "дсп",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 30,
    type : "Тумба",
    name: "Тумба-комод декоративная Reverse Polarity",
    price : "28 999₽",
    image: {closet_6},
    purpose: "предмет декора",
    material: "дсп",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  }
]
//для стульев
let chairList = []
for(const item of productsData){
  if(item.type == 'кресло') chairList.push(item)
}
//для диванов
let sofaList = []
for (const item of productsData) {
  if(item.type == 'диван') sofaList.push(item)
}
//для кроватей
let bedList = []
for (const item of productsData) {
  if(item.type == 'кровать') bedList.push(item)
}
//для шкафов
let cabinetList = []
for (const item of productsData) {
  if(item.type == 'Шкаф') cabinetList.push(item)
}
//для тумб
let closetList = []
for (const item of productsData) {
  if(item.type == 'Тумба') closetList.push(item)
}
//для ткани
let textileList = []
for (const item of productsData){
  if(item.material == 'ткань') textileList.push(item)
}
//для кожи
let leatherList = []
for (const item of productsData){
  if(item.material == 'кожа') leatherList.push(item)
}
//для велюра
let veloursList = []
for (const item of productsData){
  if(item.material == 'велюр') veloursList.push(item)
}
//для дерева
let woodList = []
for (const item of productsData){
  if(item.material == 'дерево') woodList.push(item)
}
//для дсп
let DSPList = []
for (const item of productsData){
  if(item.material == 'дсп') DSPList.push(item)
}

let TrinitiList = []
for (const item of productsData){
  if(item.brand == 'Triniti') TrinitiList.push(item)
}

let TalotList = []
for (const item of productsData){
  if(item.brand == 'Talot') TalotList.push(item)
}

let TaceryList = []
for (const item of productsData){
  if(item.brand == 'Tacery') TaceryList.push(item)
}

export default {
  productsData: productsData,
  chairList: chairList,
  bedList: bedList,
  sofaList: sofaList,
  cabinetList: cabinetList,
  closetList: closetList,
  textileList: textileList,
  leatherList: leatherList,
  veloursList: veloursList,
  woodList: woodList,
  DSPList: DSPList,
  TrinitiList: TrinitiList,
  TalotList: TalotList,
  TaceryList: TaceryList
};