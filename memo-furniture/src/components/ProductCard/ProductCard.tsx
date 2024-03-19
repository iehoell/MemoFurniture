import ProductPageStyles from './ProductCardStyles.module.scss';
import mainPageImage from "../../assets/MainPageImage.webp";
import React from "react";
import productPageStyles from "../ProductPage/productPageStyles.module.scss";
function ProductPage(){
    return(
        <div className={ProductPageStyles.productCardsArea__row}>
            <div className={ProductPageStyles.productCardsArea__cell}>
                <img src={mainPageImage} className={ProductPageStyles.productCardsArea__cell__image}/>
                <a className={ProductPageStyles.productCardsArea__cell__link} href='/productPage'>
                    <p className={ProductPageStyles.productCardsArea__cell__title}>Диван Нельс Велюр Triniti</p>
                </a>
                <div className={ProductPageStyles.productCardsArea__cell__flex}>
                    <p className={ProductPageStyles.productCardsArea__cell__flex__price}>33 990₽</p>
                    <p className={ProductPageStyles.productCardsArea__cell__flex__rating}>
                        <div className={ProductPageStyles.rating}>
                            <svg
                                fill='yellow'
                                width="15"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                            </svg>
                            <svg
                                fill='yellow'
                                width="15"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                            </svg>
                            <svg
                                fill='yellow'
                                width="15"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                            </svg>
                            <svg
                                fill='yellow'
                                width="15"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                            </svg>
                            <svg
                                fill='yellow'
                                width="15"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                            </svg>
                        </div>
                    </p>
                </div>
                <div className={ProductPageStyles.productCardsArea__cell__flex}>
                    <button className={ProductPageStyles.productCardsArea__cell__button}>
                        В корзину
                    </button>
                    <p className={ProductPageStyles.productCardsArea__cell__delivery}>Сегодня</p>
                </div>
            </div>

            <div className={ProductPageStyles.productCardsArea__cell}>
                <img src={mainPageImage} className={ProductPageStyles.productCardsArea__cell__image}/>
                <a className={ProductPageStyles.productCardsArea__cell__link} href='/productPage'>
                    <p className={ProductPageStyles.productCardsArea__cell__title}>Диван Нельс Велюр Triniti</p>
                </a>
                <div className={ProductPageStyles.productCardsArea__cell__flex}>
                    <p className={ProductPageStyles.productCardsArea__cell__flex__price}>33 990₽</p>
                    <p className={ProductPageStyles.productCardsArea__cell__flex__rating}>
                        <div className={ProductPageStyles.rating}>
                            <svg
                                fill='yellow'
                                width="15"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                            </svg>
                            <svg
                                fill='yellow'
                                width="15"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                            </svg>
                            <svg
                                fill='yellow'
                                width="15"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                            </svg>
                            <svg
                                fill='yellow'
                                width="15"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                            </svg>
                            <svg
                                fill='yellow'
                                width="15"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                            </svg>
                        </div>
                    </p>
                </div>
                <div className={ProductPageStyles.productCardsArea__cell__flex}>
                    <button className={ProductPageStyles.productCardsArea__cell__button}>
                        В корзину
                    </button>
                    <p className={ProductPageStyles.productCardsArea__cell__delivery}>Сегодня</p>
                </div>
            </div>

            <div className={ProductPageStyles.productCardsArea__cell}>
                <img src={mainPageImage} className={ProductPageStyles.productCardsArea__cell__image}/>
                <a className={ProductPageStyles.productCardsArea__cell__link} href='/productPage'>
                    <p className={ProductPageStyles.productCardsArea__cell__title}>Диван Нельс Велюр Triniti</p>
                </a>
                <div className={ProductPageStyles.productCardsArea__cell__flex}>
                    <p className={ProductPageStyles.productCardsArea__cell__flex__price}>33 990₽</p>
                    <p className={ProductPageStyles.productCardsArea__cell__flex__rating}>
                        <div className={ProductPageStyles.rating}>
                            <svg
                                fill='yellow'
                                width="15"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                            </svg>
                            <svg
                                fill='yellow'
                                width="15"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                            </svg>
                            <svg
                                fill='yellow'
                                width="15"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                            </svg>
                            <svg
                                fill='yellow'
                                width="15"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                            </svg>
                            <svg
                                fill='yellow'
                                width="15"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32">
                                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                            </svg>
                        </div>
                    </p>
                </div>
                <div className={ProductPageStyles.productCardsArea__cell__flex}>
                    <button className={ProductPageStyles.productCardsArea__cell__button}>
                        В корзину
                    </button>
                    <p className={ProductPageStyles.productCardsArea__cell__delivery}>Сегодня</p>
                </div>
            </div>
        </div>
    );
}
export default ProductPage;