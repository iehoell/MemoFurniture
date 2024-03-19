import React from 'react';
import mainPageStyles from './mainPage.module.scss';
import mainPageImage from '../../assets/MainPageImage.webp';
import CatalogueCards from "../CatalogueCardsInMainPage/CatalogueCards";
import AdvantagesCards from "../AdvantagesCardsInMainPage/AdvantagesCards";
import ContactCard from "../ContactsCardInMainPage/ContactCards";

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
                    <a href='/catalogue' className={mainPageStyles.ImageSection__buttons__catalogue__link}>
                        Каталог
                    </a>
                </button>
                <button  className={mainPageStyles.ImageSection__buttons__detailed}>
                    <a href='#aboutUs' className={mainPageStyles.ImageSection__buttons__detailed__link}>
                        Подробнее
                    </a>
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
                <CatalogueCards></CatalogueCards>
            </div>
            <div className={mainPageStyles.CatalogueSection} id='aboutUs'>
                <p className={mainPageStyles.CatalogueSection__title}>
                    Преимущества
                </p>
                <AdvantagesCards></AdvantagesCards>
            </div>
            <div className={mainPageStyles.CatalogueSection} id='contacts'>
                <p className={mainPageStyles.CatalogueSection__title}>
                    Контакты
                </p>
                <ContactCard></ContactCard>
            </div>
        </div>
    );
}
export default MainPage;