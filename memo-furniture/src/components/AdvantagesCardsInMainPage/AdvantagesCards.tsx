import React from 'react';
import advantagesCardsCardsStyles from './AdvantagesCardsStyles.module.scss';
import mainPageImage from '../../assets/MainPageImage.webp';

function AdvantagesCards(props){
    return(
        <div className={advantagesCardsCardsStyles.Section}>
            <div className={advantagesCardsCardsStyles.AdvantageCards__Section__Blocks}>
                <div className={advantagesCardsCardsStyles.Blocks__Goods}>
                    <p className={advantagesCardsCardsStyles.Blocks__Goods__title}>Более 2500 товаров</p>
                    <p>
                        В нашем магазине вы можете увидеть множество категорий товаров и разнообразные мебельные
                        решения для вашего интерьера
                    </p>
                </div>
                <div className={advantagesCardsCardsStyles.Blocks__Employees}>
                    <p className={advantagesCardsCardsStyles.Blocks__Employees__title}>34+</p>
                    <p>
                        Сотрудников работает в нашем штате
                    </p>
                </div>
                <div className={advantagesCardsCardsStyles.Blocks__Experience}>
                    <p className={advantagesCardsCardsStyles.Blocks__Experience__title}>6 лет</p>
                    <p>
                        Работаем в этой сфере и поставляем мебель
                    </p>
                </div>
            </div>
            <div className={advantagesCardsCardsStyles.AdvantageCards__Section__Image}>
                <img src={mainPageImage} className={advantagesCardsCardsStyles.Image}></img>
            </div>
        </div>
    );
}
export default AdvantagesCards;