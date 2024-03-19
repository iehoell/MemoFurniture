import React from 'react';
import productPageStyles from './productPageStyles.module.scss';
import Slider from "../Slider/Slider";
import mainPageImage from '../../assets/MainPageImage.webp';
import Reviews from "../Reviews/Reviews";

function ProductPage(){
    return(
        <div className={productPageStyles.mainContainer}>
            <div className={productPageStyles.routing}>
                Главная-Каталог-Товар
            </div>
            <div className={productPageStyles.flexBlock}>
                <div className={productPageStyles.flexBlock__slider}>
                    <Slider/>
                </div>
                <div className={productPageStyles.flexBlock__description}>
                    <p className={productPageStyles.flexBlock__description__title}>
                        Кресло компьютерное Sure
                    </p>
                    <div className={productPageStyles.flexBlock__description__rating}>
                        <p>
                            36 отзывов
                        </p>
                    </div>
                    <div className={productPageStyles.flexBlock__description__price}>
                        <p>
                            12 990₽
                        </p>
                    </div>
                    <div className={productPageStyles.flexBlock__description__productDescription__title}>
                        <p>
                            Описание
                        </p>
                    </div>
                    <div className={productPageStyles.flexBlock__description__productDescription__description}>
                        <p>
                            Кресло "Sure" - кресло для отдыха, обладающее уникальным дизайном, блягодаря которому
                            станет жемчужиной любого интерьера.
                        </p>
                    </div>
                    <div className={productPageStyles.flexBlock__description__flexInputs}>
                        <div className={productPageStyles.flexBlock__description__flexInputs__colorInput}>
                            <p>Цвет</p>
                            <select className={productPageStyles.flexBlock__description__flexInputs__colorInput__select}>
                                <option>Коричневый</option>
                                <option>Бежевый</option>
                                <option>Красный</option>
                            </select>
                        </div>
                        <div className={productPageStyles.flexBlock__description__flexInputs__amountInput}>
                            <p>Количество</p>
                            <input type='number' className={productPageStyles.flexBlock__description__flexInputs__amountInput__input}></input>
                        </div>
                    </div>
                    <div className={productPageStyles.flexBlock__description__productDescription__delivery}>
                        <p>Доставка</p>
                        <p className={productPageStyles.flexBlock__description__productDescription__delivery__deliveryTime}>
                            1-4 дня
                        </p>
                    </div>
                    <div className={productPageStyles.flexBlock__description__productDescription__buttons}>
                        <button className={productPageStyles.flexBlock__description__productDescription__buttons__buyNowButton}>
                            Купить сейчас
                        </button>
                        <button  className={productPageStyles.ImageSection__buttons__toShoppingCartButton}>
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
            <div className={productPageStyles.SectionsList}>
                <div className={productPageStyles.SectionsList__reviews}>Отзывы</div>
                <div className={productPageStyles.SectionsList__characteristics}>Характеристики</div>
                <div className={productPageStyles.SectionsList__delivery}>Доставка</div>
                <div className={productPageStyles.SectionsList__ourStores}>Наши магазины</div>
            </div>
            <div className={productPageStyles.reviewsBlock}>
                <div className={productPageStyles.reviewsBlock__productRating}></div>
                <div className={productPageStyles.reviewsBlock__reviewers}>
                    <p className={productPageStyles.reviewsBlock__reviewers__title}>Отзывы</p>

                    {/*тут карточки отзывов*/}
                    <Reviews/>
                </div>
            </div>
        </div>
    );
}
export default ProductPage;