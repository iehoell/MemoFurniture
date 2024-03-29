import React, {useState} from 'react';
import productPageStyles from './productPageStyles.module.scss';
import Slider from "../Slider/Slider";
import mainPageImage from '../../assets/MainPageImage.webp';
import Characteristics from "../Characteristics/Characteristics";
import Delivery from '../Delivery/Delivery';
import OurStores from '../OurStores/OurStores';
import Reviews from "../Reviews/Reviews";
import Graphic from "../Chart/Chart";

class ProductPage extends React.Component{
    reviewsButtonClick = () => {
        //находим все кнопки, по которым будет срабатывать скрипт
        let reviewsButton = document.getElementById('reviewsButton');
        let characteristicsButton = document.getElementById('characteristicsButton');
        let deliveryButton = document.getElementById('deliveryButton');
        let ourStoresButton = document.getElementById('ourStoresButton');
        //находим все блоки, которые будем менять
        let reviewsBlock = document.getElementById('reviewsBlock');
        let characteristicsBlock = document.getElementById('characteristicsBlock');
        let deliveryBlock = document.getElementById('deliveryBlock');
        let ourStoresBlock = document.getElementById('ourStoresBlock');
        //меняем цвет кнопок, когда произошло нажатие
        characteristicsButton.style.color = '#B7B7B7';
        deliveryButton.style.color = '#B7B7B7';
        ourStoresButton.style.color = '#B7B7B7';
        reviewsButton.style.color = '#E7772E';
        //показываем тот блок, который нам нужен, и скрываем все остальные
        deliveryBlock.style.visibility = 'hidden';
        deliveryBlock.style.height = '0';

        characteristicsBlock.style.visibility = 'hidden';
        characteristicsBlock.style.height = '0';

        ourStoresBlock.style.visibility = 'hidden';
        ourStoresBlock.style.height = '0';

        reviewsBlock.style.visibility = 'visible';
        reviewsBlock.style.height = '100%';
    };
    characteristicsButtonClick = () => {
        //находим все кнопки, по которым будет срабатывать скрипт
        let reviewsButton = document.getElementById('reviewsButton');
        let characteristicsButton = document.getElementById('characteristicsButton');
        let deliveryButton = document.getElementById('deliveryButton');
        let ourStoresButton = document.getElementById('ourStoresButton');
        //находим все блоки, которые будем менять
        let reviewsBlock = document.getElementById('reviewsBlock');
        let characteristicsBlock = document.getElementById('characteristicsBlock');
        let deliveryBlock = document.getElementById('deliveryBlock');
        let ourStoresBlock = document.getElementById('ourStoresBlock');
        //меняем цвет кнопок, когда произошло нажатие
        reviewsButton.style.color = '#B7B7B7';
        deliveryButton.style.color = '#B7B7B7';
        ourStoresButton.style.color = '#B7B7B7';
        characteristicsButton.style.color = '#E7772E';
        //показываем тот блок, который нам нужен, и скрываем все остальные
        reviewsBlock.style.visibility = 'hidden';
        reviewsBlock.style.height = '0';

        deliveryBlock.style.visibility = 'hidden';
        deliveryBlock.style.height = '0';

        ourStoresBlock.style.visibility = 'hidden';
        ourStoresBlock.style.height = '0';

        characteristicsBlock.style.visibility = 'visible';
        characteristicsBlock.style.height = '100%';
    };

    deliveryButtonClick = () => {
        //находим все кнопки, по которым будет срабатывать скрипт
        let reviewsButton = document.getElementById('reviewsButton');
        let characteristicsButton = document.getElementById('characteristicsButton');
        let deliveryButton = document.getElementById('deliveryButton');
        let ourStoresButton = document.getElementById('ourStoresButton');
        //находим все блоки, которые будем менять
        let reviewsBlock = document.getElementById('reviewsBlock');
        let characteristicsBlock = document.getElementById('characteristicsBlock');
        let deliveryBlock = document.getElementById('deliveryBlock');
        let ourStoresBlock = document.getElementById('ourStoresBlock');
        //меняем цвет кнопок, когда произошло нажатие
        reviewsButton.style.color = '#B7B7B7';
        characteristicsButton.style.color = '#B7B7B7';
        ourStoresButton.style.color = '#B7B7B7';
        deliveryButton.style.color = '#E7772E';
        //показываем тот блок, который нам нужен, и скрываем все остальные
        reviewsBlock.style.visibility = 'hidden';
        reviewsBlock.style.height = '0';

        characteristicsBlock.style.visibility = 'hidden';
        characteristicsBlock.style.height = '0';

        ourStoresBlock.style.visibility = 'hidden';
        ourStoresBlock.style.height = '0';

        deliveryBlock.style.visibility = 'visible';
        deliveryBlock.style.height = '100%';
    };

    ourStoresButtonClick = () => {
        //находим все кнопки, по которым будет срабатывать скрипт
        let reviewsButton = document.getElementById('reviewsButton');
        let characteristicsButton = document.getElementById('characteristicsButton');
        let deliveryButton = document.getElementById('deliveryButton');
        let ourStoresButton = document.getElementById('ourStoresButton');
        //находим все блоки, которые будем менять
        let reviewsBlock = document.getElementById('reviewsBlock');
        let characteristicsBlock = document.getElementById('characteristicsBlock');
        let deliveryBlock = document.getElementById('deliveryBlock');
        let ourStoresBlock = document.getElementById('ourStoresBlock');
        //меняем цвет кнопок, когда произошло нажатие
        reviewsButton.style.color = '#B7B7B7';
        characteristicsButton.style.color = '#B7B7B7';
        deliveryButton.style.color = '#B7B7B7';
        ourStoresButton.style.color = '#E7772E';
        //показываем тот блок, который нам нужен, и скрываем все остальные
        reviewsBlock.style.visibility = 'hidden';
        reviewsBlock.style.height = '0';

        characteristicsBlock.style.visibility = 'hidden';
        characteristicsBlock.style.height = '0';

        deliveryBlock.style.visibility = 'hidden';
        deliveryBlock.style.height = '0';

        ourStoresBlock.style.visibility = 'visible';
        ourStoresBlock.style.height = '100%';
    };
    render(){
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
                            <a href='/shoppingCart'>
                                <button  className={productPageStyles.ImageSection__buttons__toShoppingCartButton}>
                                    В корзину
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <h5 className={productPageStyles.Graphic__title} id='graphic'>График изменения цен на товар</h5>
                <Graphic/>



                <div className={productPageStyles.SectionsList}>
                    <div className={productPageStyles.SectionsList__reviews}
                         id='reviewsButton'
                         onClick={() => this.reviewsButtonClick()}>
                        Отзывы
                    </div>
                    <div className={productPageStyles.SectionsList__characteristics}
                         id='characteristicsButton'
                         onClick={() => this.characteristicsButtonClick()}>
                        Характеристики
                    </div>
                    <div className={productPageStyles.SectionsList__delivery}
                         id='deliveryButton'
                         onClick={() => this.deliveryButtonClick()}>
                        Доставка
                    </div>
                    <div className={productPageStyles.SectionsList__ourStores}
                         id='ourStoresButton'
                         onClick={() => this.ourStoresButtonClick()}>
                        Наши магазины
                    </div>
                </div>



                <div className={productPageStyles.reviewsBlock}
                     id='reviewsBlock'>
                    <div className={productPageStyles.reviewsBlock__reviewers}>
                        <Reviews/>
                    </div>
                </div>

                <div className={productPageStyles.characteristicsBlock}
                     id='characteristicsBlock'>
                    <div className={productPageStyles.characteristicsBlock__characteristics}>
                        <Characteristics/>
                    </div>
                </div>

                <div className={productPageStyles.deliveryBlock}
                     id='deliveryBlock'>
                    <div className={productPageStyles.deliveryBlock__delivers}>
                        <Delivery/>
                    </div>
                </div>

                <div className={productPageStyles.ourStoresBlock}
                     id='ourStoresBlock'>
                    <div className={productPageStyles.ourStoresBlock__ourStores}>
                        <OurStores/>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductPage;