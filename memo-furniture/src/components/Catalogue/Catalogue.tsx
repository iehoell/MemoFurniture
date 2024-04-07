import React from 'react';
import catalogueStyles from './catalogueStyles.module.scss';
import mainPageImage from '../../assets/MainPageImage.webp';
import ProductCard from "../ProductCard/ProductCard";
import productsData from '../../mockData/productsData';

class Catalogue extends React.Component{
    radio1Click = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        productCardsArea__chair.style.display = 'flex';
        productCardsArea__chair.style.height = '100%';

        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';
        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';
    };
    radio2Click = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        productCardsArea__sofa.style.display = 'flex';
        productCardsArea__sofa.style.height = '100%';

        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';
        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';
    };
    radio3Click = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        productCardsArea__bed.style.display = 'flex';
        productCardsArea__bed.style.height = '100%';

        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';
        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';
    };
    radio4Click = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        productCardsArea__cabinet.style.display = 'flex';
        productCardsArea__cabinet.style.height = '100%';

        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';
    };
    radio5Click = () => {
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        productCardsArea__closet.style.display = 'flex';
        productCardsArea__closet.style.height = '100%';

        productCardsArea__all.style.display = 'none';
        productCardsArea__all.style.height = '0';
        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';
    };
    radio6Click(){
        let productCardsArea__chair = document.getElementById('productCardsArea__chair')
        let productCardsArea__sofa = document.getElementById('productCardsArea__sofa')
        let productCardsArea__bed = document.getElementById('productCardsArea__bed')
        let productCardsArea__cabinet = document.getElementById('productCardsArea__cabinet')
        let productCardsArea__closet = document.getElementById('productCardsArea__closet')
        let productCardsArea__all = document.getElementById('productCardsArea__all')
        productCardsArea__all.style.display = 'flex';
        productCardsArea__all.style.height = '100%';

        productCardsArea__closet.style.display = 'none';
        productCardsArea__closet.style.height = '0';
        productCardsArea__chair.style.display = 'none';
        productCardsArea__chair.style.height = '0';
        productCardsArea__sofa.style.display = 'none';
        productCardsArea__sofa.style.height = '0';
        productCardsArea__bed.style.display = 'none';
        productCardsArea__bed.style.height = '0';
        productCardsArea__cabinet.style.display = 'none';
        productCardsArea__cabinet.style.height = '0';

    }
    chairComponents = productsData.chairList.map(cards => <ProductCard
        key={cards.keys}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        image={cards.image}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    bedComponents = productsData.bedList.map(cards => <ProductCard
        key={cards.keys}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        image={cards.image}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    sofaComponents = productsData.sofaList.map(cards => <ProductCard
        key={cards.keys}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        image={cards.image}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    cabinetComponents = productsData.cabinetList.map(cards => <ProductCard
        key={cards.keys}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        image={cards.image}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    closetComponents = productsData.closetList.map(cards => <ProductCard
        key={cards.keys}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        image={cards.image}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    cardsComponents = productsData.productsData.map(cards => <ProductCard
        key={cards.key}
        type={cards.type}
        name={cards.name}
        price={cards.price}
        image={cards.image}
        purpose={cards.purpose}
        material={cards.material}
        color={cards.color}
        style={cards.style}
        brand={cards.brand}
    />)
    render(){
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
                                <input className={catalogueStyles.sortMenu__category__radio}
                                       type='radio'
                                       name='radio'
                                       id='radio6'
                                       onClick={() => this.radio6Click()}
                                />
                                <p>Все товары</p>
                            </div>
                            <div className={catalogueStyles.flexRadioInputs}>
                                <input className={catalogueStyles.sortMenu__category__radio}
                                       type='radio'
                                       name='radio'
                                       id='radio1'
                                       onClick={() => this.radio1Click()}
                                />
                                <p>Кресла и стулья</p>
                            </div>
                            <div className={catalogueStyles.flexRadioInputs}>
                                <input className={catalogueStyles.sortMenu__category__radio}
                                       type='radio'
                                       name='radio'
                                       id='radio2'
                                       onClick={() => this.radio2Click()}
                                />
                                <p>Диваны</p>
                            </div>
                            <div className={catalogueStyles.flexRadioInputs}>
                                <input className={catalogueStyles.sortMenu__category__radio}
                                       type='radio'
                                       name='radio'
                                       id='radio3'
                                       onClick={() => this.radio3Click()}
                                />
                                <p>Кровати</p>
                            </div>
                            <div className={catalogueStyles.flexRadioInputs}>
                                <input className={catalogueStyles.sortMenu__category__radio}
                                       type='radio'
                                       name='radio'
                                       id='radio4'
                                       onClick={() => this.radio4Click()}
                                />
                                <p>Шкафы и стеллажи</p>
                            </div>
                            <div className={catalogueStyles.flexRadioInputs}>
                                <input className={catalogueStyles.sortMenu__category__radio}
                                       type='radio'
                                       name='radio'
                                       id='radio5'
                                       onClick={() => this.radio5Click()}
                                />
                                <p>Комоды и тумбы</p>
                            </div>
                        </div>
                        <div className={catalogueStyles.sortMenu__category}>
                            {/*<p className={catalogueStyles.sortMenu__category__title}>Цена</p>*/}
                            {/*<div className={catalogueStyles.sortMenu__category__priceRadius}>*/}
                            {/*    <p>от 4599</p>*/}
                            {/*    <p>до 98345</p>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                            {/*    <input type="range" id="price" name="price" min="0" max="100" className={catalogueStyles.priceRange}/>*/}
                            {/*</div>*/}
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
                        <div className={catalogueStyles.productCardsArea__all} id='productCardsArea__all'>
                            {this.cardsComponents}
                        </div>
                        <div className={catalogueStyles.productCardsArea__chair} id='productCardsArea__chair'>
                            {this.chairComponents}
                        </div>
                        <div className={catalogueStyles.productCardsArea__sofa} id='productCardsArea__sofa'>
                            {this.sofaComponents}
                        </div>
                        <div className={catalogueStyles.productCardsArea__bed} id='productCardsArea__bed'>
                            {this.bedComponents}
                        </div>
                        <div className={catalogueStyles.productCardsArea__cabinet} id='productCardsArea__cabinet'>
                            {this.cabinetComponents}
                        </div>
                        <div className={catalogueStyles.productCardsArea__closet} id='productCardsArea__closet'>
                            {this.closetComponents}
                        </div>
                        {/*<button className={catalogueStyles.showMoreButton}>*/}
                        {/*    Показать еще товары*/}
                        {/*</button>*/}
                    </div>
                </div>
            </div>
        );
    }
}
export default Catalogue;