import React from 'react';
import mainPageStyles from './mainPage.module.scss';
import mainPageImage from '../../assets/MainPageImage.webp';
import CatalogueCards from "../CatalogueCardsInMainPage/CatalogueCards";

function MainPage(){
    return(
        <div className={mainPageStyles.MainPage}>
            <div className={mainPageStyles.ImageSection}>
                <img src={mainPageImage} className={mainPageStyles.ImageSection__image}></img>
                <p className={mainPageStyles.ImageSection__title}>
                    Мебель для вашего бизнеса в Москве
                </p>
                <p className={mainPageStyles.ImageSection__description}>
                    Оставьте заявку и мы сделаем для вас дизайн-проект бесплатно
                </p>
                <button className={mainPageStyles.ImageSection__buttons__catalogue}>
                    Каталог
                </button>
                <button  className={mainPageStyles.ImageSection__buttons__detailed}>
                    Подробнее
                </button>
                <strong className={mainPageStyles.strong1}>6</strong>
                <p className={mainPageStyles.achievement1}>
                     Лет опыта
                </p>
                <strong className={mainPageStyles.strong2}>18500+</strong>
                <p className={mainPageStyles.achievement2}>
                     Довольных клиентов
                </p>
                <strong className={mainPageStyles.strong3}>2500+</strong>
                <p className={mainPageStyles.achievement3}>
                     Товаров
                </p>
            </div>
            <div className={mainPageStyles.CatalogueSection}>
                <p className={mainPageStyles.CatalogueSection__title}>
                    Каталог
                </p>
                <div className={mainPageStyles.CatalogueSection__productionCards}>
                        {/*<button className={mainPageStyles.CatalogueSection__productionCards__item__button}></button>*/}
                    <CatalogueCards></CatalogueCards>
                    <CatalogueCards></CatalogueCards>
                    <CatalogueCards></CatalogueCards>
                    <CatalogueCards></CatalogueCards>
                </div>
            </div>
        </div>
    );
}
export default MainPage;