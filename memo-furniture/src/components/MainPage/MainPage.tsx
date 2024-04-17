import React from 'react';
import mainPageStyles from './mainPage.module.scss';
import mainPageImage from '../../assets/MainPageImage.webp';
import CatalogueCards from "../CatalogueCardsInMainPage/CatalogueCards";
import AdvantagesCards from "../AdvantagesCardsInMainPage/AdvantagesCards";
import ContactCard from "../ContactsCardInMainPage/ContactCards";

function MainPage(){
    let project1 = setInterval(projectDone1, 800)
    let project2 = setInterval(projectDone2, 0.01)
    let project3 = setInterval(projectDone3, 1)
    let count1 = 1;
    let count2 = 17500;
    let count3 = 1500;
    function projectDone1(){
        count1++;
        document.getElementById('number1').innerHTML = String(count1);
        if(count1 == 6){
            clearInterval(project1)
        }
    }
    function projectDone2(){
        count2++;
        document.getElementById('number2').innerHTML = String(count2);
        if(count2 == 18500){
            clearInterval(project2)
        }
    }
    function projectDone3(){
        count3++;
        document.getElementById('number3').innerHTML = String(count3);
        if(count3 == 2500){
            clearInterval(project3)
        }
    }
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
                <a href='/catalogue' className={mainPageStyles.ImageSection__buttons__catalogue__link}>
                    <button className={mainPageStyles.ImageSection__buttons__catalogue}>
                        Каталог
                    </button>
                </a>
                <a href='#aboutUs' className={mainPageStyles.ImageSection__buttons__detailed__link}>
                    <button  className={mainPageStyles.ImageSection__buttons__detailed}>
                        Подробнее
                    </button>
                </a>
                <strong className={mainPageStyles.strong1} id='number1'>0</strong>
                <p className={mainPageStyles.achievement1}>
                     Лет опыта
                </p>
                <strong className={mainPageStyles.strong2} id='number2'>18500+</strong>
                <p className={mainPageStyles.achievement2}>
                     Довольных клиентов
                </p>
                <strong className={mainPageStyles.strong3} id='number3'>2500+</strong>
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
            <p id='sale'>loremdsaghdgsahgjdas</p>
            <div className={mainPageStyles.Sale}>
                <p className={mainPageStyles.Sale__title}>
                    Получите сегодня, а заплатите только 25%
                </p>
                <button className={mainPageStyles.Sale__button}>
                    Подробнее
                </button>
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