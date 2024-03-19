import React from 'react';
import contactCardsCardsStyles from './contactCardsStyles.module.scss';
import mainPageImage from '../../assets/MainPageImage.webp';

function ContactCard(props){
    return(
        <div className={contactCardsCardsStyles.Section}>
            <div className={contactCardsCardsStyles.ContactCard__Section__Image}>
                <div className={contactCardsCardsStyles.firstMapStyle}>
                    <a href="https://yandex.ru/maps/225/russia/?utm_medium=mapframe&utm_source=maps"
                        className={contactCardsCardsStyles.secondMapStyle}>
                        Россия
                    </a>
                    <a href="https://yandex.ru/maps/213/moscow/house/pyatnitskaya_ulitsa_25s1/Z04YcARgQEAAQFtvfXt1c31iZw==/?azimuth=5.406327159827727&ll=37.630739%2C55.741198&tilt=0.07226938445335129&utm_medium=mapframe&utm_source=maps&z=17.7"
                        className={contactCardsCardsStyles.thirdMapStyle}>
                        Пятницкая улица, 25с1 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?azimuth=5.406327159827727&ll=37.630739%2C55.741198&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcwNDM5MBJA0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCf0Y_RgtC90LjRhtC60LDRjyDRg9C70LjRhtCwLCAyNdGBMSIKDRuGFkIV7fdeQg%2C%2C&tilt=0.07226938445335129&z=17.7"
                        width="550" height="550" frameBorder="1"
                        className={contactCardsCardsStyles.fourthMapStyle}></iframe>
                </div>
            </div>
            <div className={contactCardsCardsStyles.ContactCard__Section__Block}>
                <div className={contactCardsCardsStyles.Block__AboutUs}>
                    <div className={contactCardsCardsStyles.AboutUs__Cards}>
                        <p className={contactCardsCardsStyles.AboutUs__Cards__item}>8 (800) 000 00 00</p>
                        <p className={contactCardsCardsStyles.AboutUs__Cards__item}>Наши социальные сети</p>
                        <p className={contactCardsCardsStyles.AboutUs__Cards__item}>Пятницкая улица, 25с1, Москва, 115326</p>
                        <p className={contactCardsCardsStyles.AboutUs__Cards__item}>Соц сети (ватс, твит)</p>
                        <p className={contactCardsCardsStyles.AboutUs__Cards__item}>Memofurniture@mail.ru</p>
                        <p className={contactCardsCardsStyles.AboutUs__Cards__item}>Соц сети (вк, фейс)</p>
                    </div>
                </div>
                <div className={contactCardsCardsStyles.Form}>
                    <form>
                        <p className={contactCardsCardsStyles.Form__Title}>Остались вопросы? Свяжитесь с нами</p>
                        <input placeholder={'Тема'} type={'text'}></input>
                        <input placeholder={'ФИО'} type={'text'}></input>
                        <div className={contactCardsCardsStyles.Form__flexInputs}>
                            <input type={'email'} placeholder={'Почта'} className={contactCardsCardsStyles.Form__flexInputs__item}></input>
                            <input type={'tel'} placeholder={'Телефон'}></input>
                        </div>
                        <textarea placeholder={'Текст сообщения'}>
                        </textarea>
                        <button type={"submit"} className={contactCardsCardsStyles.Form__button}>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ContactCard;