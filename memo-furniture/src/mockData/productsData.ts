const productsData = [
  {
    key: 1,
    type : "кресло",
    name: "Кресло для отдыха Triniti",
    price : "22 399₽",
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
    purpose: "предмет декора",
    material: "кожа",
    color: "серый",
    style: "modern",
    brand: "Talot"
  },
  {
    key: 4,
    type : "стул",
    name: "Стул Tacery monde",
    price : "13 599₽",
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
    purpose: "предмет декора",
    material: "ткань",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  },


  {
    key: 12,
    type : "кровать",
    name: "Кровать двуспальная Panther",
    price : "44 399₽",
    purpose: "предмет декора",
    material: "ткань",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 13,
    type : "кровать",
    name: "Трехместная кровать Кальвадос",
    price : "62 399₽",
    purpose: "предмет декора",
    material: "ткань",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 14,
    type : "кровать",
    name: "Односпальная кровать Мадагаскар",
    price : "18 499₽",
    purpose: "предмет декора",
    material: "ткань",
    color: "бардовый",
    style: "modern",
    brand: "Talot"
  },
  {
    key: 15,
    type : "кровать",
    name: "Кровать-раскладушка New Era",
    price : "47 599₽",
    purpose: "предмет декора",
    material: "велюр",
    color: "бардовый",
    style: "modern",
    brand: "Tacery"
  },
  {
    key: 16,
    type : "кровать",
    name: "Кровать одноместная Paradise",
    price : "82 999₽",
    purpose: "предмет декора",
    material: "кожа",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  },


  {
    key: 17,
    type : "Шкаф",
    name: "Шкаф Triniti Decay",
    price : "19 399₽",
    purpose: "предмет декора",
    material: "дерево",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 18,
    type : "Шкаф",
    name: "Шкаф для вещей Converge",
    price : "32 399₽",
    purpose: "предмет декора",
    material: "дсп",
    color: "серый",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 19,
    type : "Шкаф",
    name: "Шкафчик-вешалка декоративный Quas",
    price : "21 159₽",
    purpose: "предмет декора",
    material: "дерево",
    color: "синий",
    style: "modern",
    brand: "Talot"
  },
  {
    key: 20,
    type : "Шкаф",
    name: "Шкафчик вещевой декоративный Wex",
    price : "28 599₽",
    purpose: "предмет декора",
    material: "дсп",
    color: "фиолетовый",
    style: "modern",
    brand: "Tacery"
  },
  {
    key: 21,
    type : "Шкаф",
    name: "Шкафчик для принадлежностей Exort",
    price : "12 999₽",
    purpose: "предмет декора",
    material: "дсп",
    color: "оранжевый",
    style: "modern",
    brand: "Triniti"
  },


  {
    key: 22,
    type : "Тумба",
    name: "Комод Lunar Blessing",
    price : "24 399₽",
    purpose: "предмет декора",
    material: "дерево",
    color: "бежевый",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 23,
    type : "Тумба",
    name: "Тумба Lucent Beam",
    price : "27 399₽",
    purpose: "предмет декора",
    material: "дсп",
    color: "серый",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 24,
    type : "Тумба",
    name: "Комод Eclipse",
    price : "21 159₽",
    purpose: "предмет декора",
    material: "дерево",
    color: "черный",
    style: "modern",
    brand: "Talot"
  },
  {
    key: 25,
    type : "Тумба",
    name: "Тумба прикроватная с зеркалом Blur",
    price : "25 599₽",
    purpose: "предмет декора",
    material: "дерево",
    color: "серый",
    style: "modern",
    brand: "Tacery"
  },
  {
    key: 26,
    type : "Тумба",
    name: "Мини-тумба moment of courage декоративная",
    price : "25 999₽",
    purpose: "предмет декора",
    material: "дсп",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  },
  {
    key: 26,
    type : "Тумба",
    name: "Тумба-комод декоративная Reverse Polarity",
    price : "28 999₽",
    purpose: "предмет декора",
    material: "дсп",
    color: "черный",
    style: "modern",
    brand: "Triniti"
  }
]
export default productsData;