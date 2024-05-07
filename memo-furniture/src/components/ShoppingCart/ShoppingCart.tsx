import React from 'react';
import shoppingCartStyles from './shoppingCartStyles.module.scss';
import mainPageImage from '../../assets/MainPageImage.webp';
import placingOrderPageStyles from "../PlacingOrderPage/placingOrderPageStyles.module.scss";
import ShoppingCartItem from "./ShoppingCartItem";
import productsData from "../../mockData/productsData";
import ProductCard from "../ProductCard/ProductCard";
import shoppingCartItem from "./ShoppingCartItem";

class ShoppingCart extends React.Component<any, any>{
    shoppingCartObjects = productsData.TaceryList.map(cards => <ShoppingCartItem
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
    priceObjects = productsData.TaceryList.map(({price}) => (price));
    counter = () => {
        let prices = document.getElementsByClassName(shoppingCartStyles.cartItem__flexContainers__description__price)
        let sale = 10;
        let priceCount = 0;
        let saleCount =  0;
        let priceWithoutSaleCount = Number(priceCount) - Number(saleCount)
        let count = prices.length

        this.priceObjects.forEach(function(item, i){
            priceCount += item;
        })
        saleCount = Math.round(priceCount/100 * sale);
        priceWithoutSaleCount = priceCount - saleCount;

        let one = document.getElementById('1')
        let two = document.getElementById('2')
        let three = document.getElementById('3')
        let four = document.getElementById('4')

        one.innerText = String(priceCount) + ' ₽';
        two.innerText = String(saleCount) + ' ₽';
        three.innerText = String(priceWithoutSaleCount) + ' ₽';
        four.innerText = String(count + ' товара(ов)');

        let div = document.getElementById('final');
        let a = document.createElement('a');
        let button = document.createElement('button');
        div.style.margin = '2% 0 0 5%'
        button.type = 'submit'
        button.innerHTML = 'Оформить заказ'
        button.style.background = '#E7772E'
        button.style.color = '#FFFFFF'
        button.style.cursor = 'pointer'
        button.style.fontSize = '16px'
        button.style.float = 'left'
        button.style.borderRadius = '25px'
        button.style.border = '1px solid #E7772E'
        button.style.width = '50%'
        button.style.padding = '10px'
        button.style.fontWeight = '500'
        a.href = String('/order?count=' + this.priceObjects.length + '&priceCount=' + priceCount + '&saleCount=' + saleCount + '&priceWithoutSaleCount=' + priceWithoutSaleCount);
        div.appendChild(a);
        a.appendChild(button);
    }
    render() {
        window.onload = this.counter
        return(
            <div className={shoppingCartStyles.mainContainer}>
                <div className={shoppingCartStyles.flexContainers}>
                    <div className={shoppingCartStyles.flexContainers__containerLeft}>
                        {this.shoppingCartObjects}
                    </div>
                    <div className={shoppingCartStyles.flexContainers__containerRight}>
                        <div className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice}>
                            <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__title}>
                                Сумма заказа
                            </p>
                            <div className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__flexBlock}>
                                <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__item} id='4'>
                                    ? товара(ов)
                                </p>
                                <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__item} id='1'>
                                    ?
                                </p>
                            </div>
                            <div className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__flexBlock}>
                                <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__item}>
                                    Скидка
                                </p>
                                <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__item} id='2'>
                                    ?
                                </p>
                            </div>
                            <div className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__flexBlock}>
                                <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__item}>
                                    Доставка
                                </p>
                                <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__item__delivery} id='52'>
                                    Бесплатно
                                </p>
                            </div>
                            <div className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__flexBlock}>
                                <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__lastItem}>
                                    Итого
                                </p>
                                <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__lastItem} id='3'>
                                    ?
                                </p>
                            </div>
                            <div id='final'>
                                    {/*<button type={"submit"} className={shoppingCartStyles.Pay}>Оформить заказ</button>*/}
                            </div>
                            {/*<a href={'/order?count=' + this.priceObjects.length + '&priceCount='+  + '&saleCount=3297&priceWithoutSaleCount=29673'}>*/}
                            {/*    <button type={"submit"} className={shoppingCartStyles.Pay}>Оформить заказ</button>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ShoppingCart;