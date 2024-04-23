import React from 'react';
import shoppingCartStyles from './shoppingCartStyles.module.scss';
import mainPageImage from '../../assets/MainPageImage.webp';
import placingOrderPageStyles from "../PlacingOrderPage/placingOrderPageStyles.module.scss";

class ShoppingCart extends React.Component<any, any>{
    counter = () => {
        let prices = document.getElementsByClassName(shoppingCartStyles.cartItem__flexContainers__description__price)
        let sale = 10;
        let priceCount = (Number(prices[0].innerHTML) + Number(prices[1].innerHTML) + Number(prices[2].innerHTML));
        let saleCount =  (Number(prices[0].innerHTML) + Number(prices[1].innerHTML) + Number(prices[2].innerHTML))/100 * sale;
        let priceWithoutSaleCount = Number(priceCount) - Number(saleCount)
        let count = prices.length

        let one = document.getElementById('1')
        let two = document.getElementById('2')
        let three = document.getElementById('3')
        let four = document.getElementById('4')

        one.innerText = String(priceCount);
        two.innerText = String(saleCount);
        three.innerText = String(priceWithoutSaleCount);
        four.innerText = String(count + ' ' + 'товара(ов)');
    }
    render() {
        window.onload = this.counter
        return(
            <div className={shoppingCartStyles.mainContainer}>
                <div className={shoppingCartStyles.flexContainers}>
                    <div className={shoppingCartStyles.flexContainers__containerLeft}>
                        <a href='/productPage' className={shoppingCartStyles.ToProductPage}>
                            <div className={shoppingCartStyles.cartItem}>
                                <div className={shoppingCartStyles.cartItem__flexContainers}>
                                    <img src={mainPageImage}
                                         className={shoppingCartStyles.cartItem__flexContainers__image}/>
                                    <div className={shoppingCartStyles.cartItem__flexContainers__description}>
                                        <p className={shoppingCartStyles.cartItem__flexContainers__description__title}>
                                            <a href='/productPage' className={shoppingCartStyles.ToProductPage1}>
                                                Кресло для отдыха Амарант
                                            </a>
                                        </p>
                                        <p className={shoppingCartStyles.cartItem__flexContainers__description__color}>
                                            Цвет: бежевый
                                        </p>
                                        <p className={shoppingCartStyles.cartItem__flexContainers__description__price}>
                                            10990
                                        </p>
                                        <p className={shoppingCartStyles.cartItem__flexContainers__description__counter2}>
                                            В наличии: 8 штук
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href='/productPage' className={shoppingCartStyles.ToProductPage}>
                            <div className={shoppingCartStyles.cartItem}>
                                <div className={shoppingCartStyles.cartItem__flexContainers}>
                                    <img src={mainPageImage}
                                         className={shoppingCartStyles.cartItem__flexContainers__image}/>
                                    <div className={shoppingCartStyles.cartItem__flexContainers__description}>
                                        <p className={shoppingCartStyles.cartItem__flexContainers__description__title}>
                                            <a href='/productPage' className={shoppingCartStyles.ToProductPage1}>
                                                Кресло для отдыха Амарант
                                            </a>
                                        </p>
                                        <p className={shoppingCartStyles.cartItem__flexContainers__description__color}>
                                            Цвет: бежевый
                                        </p>
                                        <p className={shoppingCartStyles.cartItem__flexContainers__description__price}>
                                            10990
                                        </p>
                                        <p className={shoppingCartStyles.cartItem__flexContainers__description__counter2}>
                                            В наличии: 8 штук
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href='/productPage' className={shoppingCartStyles.ToProductPage}>
                            <div className={shoppingCartStyles.cartItem}>
                                <div className={shoppingCartStyles.cartItem__flexContainers}>
                                    <img src={mainPageImage}
                                         className={shoppingCartStyles.cartItem__flexContainers__image}/>
                                    <div className={shoppingCartStyles.cartItem__flexContainers__description}>
                                        <p className={shoppingCartStyles.cartItem__flexContainers__description__title}>
                                            <a href='/productPage' className={shoppingCartStyles.ToProductPage1}>
                                                Кресло для отдыха Амарант
                                            </a>
                                        </p>
                                        <p className={shoppingCartStyles.cartItem__flexContainers__description__color}>
                                            Цвет: бежевый
                                        </p>
                                        <p className={shoppingCartStyles.cartItem__flexContainers__description__price}>
                                            10990
                                        </p>
                                        <p className={shoppingCartStyles.cartItem__flexContainers__description__counter2}>
                                            В наличии: 8 штук
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
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
                                <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__item__delivery}>
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
                            <a href='/order?count=3&priceCount=32970&saleCount=3297&priceWithoutSaleCount=29673'>
                                <button type={"submit"} className={shoppingCartStyles.Pay}>Оформить заказ</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ShoppingCart;