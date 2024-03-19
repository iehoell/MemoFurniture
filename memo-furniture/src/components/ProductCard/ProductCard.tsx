import ProductPageStyles from './ProductCardStyles.module.scss';
import mainPageImage from "../../assets/MainPageImage.webp";
import React from "react";
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
                    <p className={ProductPageStyles.productCardsArea__cell__flex__rating}>*****</p>
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
                    <p className={ProductPageStyles.productCardsArea__cell__flex__rating}>*****</p>
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
                    <p className={ProductPageStyles.productCardsArea__cell__flex__rating}>*****</p>
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