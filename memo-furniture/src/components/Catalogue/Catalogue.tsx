import React from 'react';
import catalogueStyles from './catalogueStyles.module.scss';
import mainPageImage from '../../assets/MainPageImage.webp';
import ProductCard from "../ProductCard/ProductCard";
import productsData from '../../mockData/productsData';

function Catalogue(){
    const cardsComponents = productsData.map(cards => <ProductCard
        key={cards.key}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    return(
        <div className={catalogueStyles.mainContainer}>
            <div className={catalogueStyles.routing}>
                Главная-Каталог
            </div>
            <p className={catalogueStyles.title}>
                Каталог
            </p>
            <div className={catalogueStyles.flexBlocks}>
                <div className={catalogueStyles.sortMenu}>
                    <div className={catalogueStyles.sortMenu__category}>
                        <p className={catalogueStyles.sortMenu__category__title}>Категория</p>
                        <div className={catalogueStyles.flexRadioInputs}>
                            <input className={catalogueStyles.sortMenu__category__radio} type='radio' name='radio'/>
                            <p>Кресла и стулья</p>
                        </div>
                        <div className={catalogueStyles.flexRadioInputs}>
                            <input className={catalogueStyles.sortMenu__category__radio} type='radio' name='radio'/>
                            <p>Диваны</p>
                        </div>
                        <div className={catalogueStyles.flexRadioInputs}>
                            <input className={catalogueStyles.sortMenu__category__radio} type='radio' name='radio'/>
                            <p>Кровати</p>
                        </div>
                        <div className={catalogueStyles.flexRadioInputs}>
                            <input className={catalogueStyles.sortMenu__category__radio} type='radio' name='radio'/>
                            <p>Шкафы и стеллажи</p>
                        </div>
                        <div className={catalogueStyles.flexRadioInputs}>
                            <input className={catalogueStyles.sortMenu__category__radio} type='radio' name='radio'/>
                            <p>Комоды и тумбы</p>
                        </div>
                    </div>
                    <div className={catalogueStyles.sortMenu__category}>
                        <p className={catalogueStyles.sortMenu__category__title}>Цена</p>
                        <div className={catalogueStyles.sortMenu__category__priceRadius}>
                            <p>от 4599</p>
                            <p>до 98345</p>
                        </div>
                        <div>
                            <input type="range" id="price" name="price" min="0" max="100" className={catalogueStyles.priceRange}/>
                        </div>
                        <p className={catalogueStyles.titleOfDropdown}>Назначение</p>
                        <select className={catalogueStyles.dropbtn}>
                            <option>предмет декора</option>
                        </select>
                        <p className={catalogueStyles.titleOfDropdown}>Материал</p>
                        <select className={catalogueStyles.dropbtn}>
                            <option>ткань</option>
                            <option>кожа</option>
                            <option>велюр</option>
                            <option>дерево</option>
                            <option>дсп</option>
                        </select>
                        <p className={catalogueStyles.titleOfDropdown}>Цвет</p>
                        <select className={catalogueStyles.dropbtn}>
                            <option>бежевый</option>
                            <option>серый</option>
                            <option>черный</option>
                            <option>бардовый</option>
                            <option>черный</option>
                            <option>синий</option>
                            <option>фиолетовый</option>
                            <option>оранжевый</option>
                        </select>
                        <p className={catalogueStyles.titleOfDropdown}>Стиль</p>
                        <select className={catalogueStyles.dropbtn}>
                            <option>modern</option>
                        </select>
                        <p className={catalogueStyles.titleOfDropdown}>Бренд</p>
                        <select className={catalogueStyles.dropbtn}>
                            <option>Triniti</option>
                            <option>Talot</option>
                            <option>Tacery</option>
                        </select>
                    </div>
                </div>
                <div className={catalogueStyles.productCardsArea}>
                    {cardsComponents}
                    <button className={catalogueStyles.showMoreButton}>
                        Показать еще товары
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Catalogue;