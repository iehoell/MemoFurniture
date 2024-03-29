//import React from 'react';
import React, {useState} from 'react';
import productPageStyles from './productPageStyles.module.scss';
import Slider from "../Slider/Slider";
import mainPageImage from '../../assets/MainPageImage.webp';
import Reviews from "../Reviews/Reviews";
import Graphic from "../Chart/Chart";

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
                        <div className={productPageStyles.rating}>
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
                        <p className={productPageStyles.ratingTitle}>
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
                            <input type='number' className={productPageStyles.flexBlock__description__flexInputs__amountInput__input} min='1' placeholder='1'></input>
                        </div>
                    </div>
                    <div className={productPageStyles.flexBlock__description__productDescription__delivery}>
                        <p>Доставка</p>
                        <p className={productPageStyles.flexBlock__description__productDescription__delivery__deliveryTime}>
                            1-4 дня
                        </p>
                    </div>
                    <div className={productPageStyles.flexBlock__description__productDescription__buttons}>
                        <a href='/order'>
                            <button className={productPageStyles.flexBlock__description__productDescription__buttons__buyNowButton}>
                                Купить сейчас
                            </button>
                        </a>
                        <button  className={productPageStyles.ImageSection__buttons__toShoppingCartButton}>
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
            <h5 className={productPageStyles.Graphic__title} id='graphic'>График изменения цен на товар</h5>
            <p className={productPageStyles.Graphic__MiniTitle}>Выберите тип графика: </p>
            <Graphic active={''} setActive={''}/>
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