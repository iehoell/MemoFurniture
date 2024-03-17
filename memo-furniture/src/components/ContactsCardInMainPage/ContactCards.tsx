import React from 'react';
import contactCardsCardsStyles from './contactCardsStyles.module.scss';
import mainPageImage from '../../assets/MainPageImage.webp';

function ContactCard(props){
    return(
        <div className={contactCardsCardsStyles.Section}>
            <div className={contactCardsCardsStyles.ContactCard__Section__Image}>
                <img src={mainPageImage} className={contactCardsCardsStyles.Image}></img>
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