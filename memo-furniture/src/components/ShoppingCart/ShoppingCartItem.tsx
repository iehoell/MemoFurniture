import React from 'react';
import shoppingCartStyles from './shoppingCartStyles.module.scss';
import mainPageImage from "../../assets/MainPageImage.webp";
import items from '../../App';
import productsData from "../../mockData/productsData";
import ProductCard from "../ProductCard/ProductCard";

function ShoppingCartItem(props){
    function minusClick(){
        let counter = document.getElementById('counterID');
        let counterText1 = String(Number(counter.innerText) - 1);
        if(Number(counterText1) == 0){
            counterText1 = String(1);
        }
        else{
            counterText1 = String(Number(counter.innerText) - 1);
        }
        counter.innerText = counterText1;
    }
    function plusClick(){
        let counter = document.getElementById('counterID');
        let counterText2 = String(Number(counter.innerText) + 1);
        counter.innerText = counterText2;
    }
    return(
            <div className={shoppingCartStyles.cartItem}>
                <div className={shoppingCartStyles.cartItem__flexContainers}>
                    <a href='/productPage' className={shoppingCartStyles.ToProductPage}>
                        <img src={mainPageImage}
                         className={shoppingCartStyles.cartItem__flexContainers__image}/>
                    </a>
                    <div className={shoppingCartStyles.cartItem__flexContainers__description}>
                        <a href='/productPage' className={shoppingCartStyles.ToProductPage}>
                            <p className={shoppingCartStyles.cartItem__flexContainers__description__title}>
                                <a href='/productPage' className={shoppingCartStyles.ToProductPage1}>
                                    {props.name}
                                </a>
                            </p>
                            <p className={shoppingCartStyles.cartItem__flexContainers__description__color}>
                                Цвет: {props.color}
                            </p>
                            <p className={shoppingCartStyles.cartItem__flexContainers__description__price}>
                                {props.price} ₽
                            </p>
                            <p className={shoppingCartStyles.cartItem__flexContainers__description__counter2}>
                                Количество товара:
                            </p>
                        </a>
                        <div className={shoppingCartStyles.counter}>
                            <div className={shoppingCartStyles.counter__flex}>
                                <button className={shoppingCartStyles.counter__button__minus} id='minusButton' onClick={minusClick}>-</button>
                                <p id='counterID' className={shoppingCartStyles.counterText}>1</p>
                                <button className={shoppingCartStyles.counter__button__plus} id='plusButton' onClick={plusClick}>+</button>
                            </div>
                            {/*<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>*/}
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ShoppingCartItem;