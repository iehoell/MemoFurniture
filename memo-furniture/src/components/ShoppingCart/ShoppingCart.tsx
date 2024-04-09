import React from 'react';
import shoppingCartStyles from './shoppingCartStyles.module.scss';
import mainPageImage from '../../assets/MainPageImage.webp';
import placingOrderPageStyles from "../PlacingOrderPage/placingOrderPageStyles.module.scss";

function ShoppingCart(){
    return(
        <div className={shoppingCartStyles.mainContainer}>
            <p className={shoppingCartStyles.mainContainer__title}>
                Главная-Каталог-Козина
            </p>
            <div className={shoppingCartStyles.flexContainers}>
                <div className={shoppingCartStyles.flexContainers__containerLeft}>
                    <div className={shoppingCartStyles.cartItem}>
                        <div className={shoppingCartStyles.cartItem__flexContainers}>
                            <a href='/productPage' className={shoppingCartStyles.ToProductPage}>
                                <img src={mainPageImage} className={shoppingCartStyles.cartItem__flexContainers__image}/>
                            </a>
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
                                    10 990Р
                                </p>
                                <p className={shoppingCartStyles.cartItem__flexContainers__description__counter2}>
                                    В наличии: 8 штук
                                </p>
                                <input type='number' className={shoppingCartStyles.cartItem__flexContainers__description__counter} min='1'/>
                            </div>
                        </div>
                    </div>
                    <div className={shoppingCartStyles.cartItem}>
                        <div className={shoppingCartStyles.cartItem__flexContainers}>
                            <a href='/productPage' className={shoppingCartStyles.ToProductPage}>
                                <img src={mainPageImage} className={shoppingCartStyles.cartItem__flexContainers__image}/>
                            </a>
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
                                    10 990Р
                                </p>
                                <p className={shoppingCartStyles.cartItem__flexContainers__description__counter2}>
                                    В наличии: 8 штук
                                </p>
                                <input type='number' className={shoppingCartStyles.cartItem__flexContainers__description__counter} min='1'/>
                            </div>
                        </div>
                    </div>
                    <div className={shoppingCartStyles.cartItem}>
                        <div className={shoppingCartStyles.cartItem__flexContainers}>
                            <a href='/productPage' className={shoppingCartStyles.ToProductPage}>
                                <img src={mainPageImage} className={shoppingCartStyles.cartItem__flexContainers__image}/>
                            </a>
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
                                    10 990Р
                                </p>
                                <p className={shoppingCartStyles.cartItem__flexContainers__description__counter2}>
                                    В наличии: 8 штук
                                </p>
                                <input type='number' className={shoppingCartStyles.cartItem__flexContainers__description__counter} min='1'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={shoppingCartStyles.flexContainers__containerRight}>
                    <div className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice}>
                        <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__title}>
                            Сумма заказа
                        </p>
                        <div className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__flexBlock}>
                            <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__item}>
                                ? товара
                            </p>
                            <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__item}>
                                undefined
                            </p>
                        </div>
                        <div className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__flexBlock}>
                            <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__item}>
                                Скидка
                            </p>
                            <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__item}>
                                undefined
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
                            <p className={shoppingCartStyles.mainContainer__flexBlocks__finalPrice__lastItem}>
                                undefined
                            </p>
                        </div>
                        <button type={"submit"} className={shoppingCartStyles.Pay}>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ShoppingCart;