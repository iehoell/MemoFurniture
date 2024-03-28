import React from "react";
import deliveryStyles from './deliveryStyles.module.scss';

function Delivery(){
    return(
        <div className={deliveryStyles.mainContainer}>
            <h1>Доставка на дом курьером</h1>
            <div className={deliveryStyles.mainContainer__block1}>
                <div className={deliveryStyles.mainContainer__block1__firstPart}>
                    <p>Только при оформлении заказа с 8:00 до 20:00</p>
                </div>
                <div className={deliveryStyles.mainContainer__block1__secondPart}>
                    <p>Доставка на дом осуществляется бесплатно при покупке товара от 9999₽</p>
                    <p>Оплата осуществляется:</p>
                    <ul>
                        <li>Оплата онлайн</li>
                        <li>Картой или наличными при получении</li>
                        <li>По счёту банковским переводом</li>
                    </ul>
                </div>
            </div>
            <h1>Забрать в магазине</h1>
            <div className={deliveryStyles.mainContainer__block2}>
                <div className={deliveryStyles.mainContainer__block2__firstPart}>
                    <p>Вы можете забронировать нужный вам товар в любом нашем магазине.</p>
                    <p>Сразу после получения подтверждения заказа вы можете оплатить и забрать заказ в выбранном магазине</p>
                </div>
                <div className={deliveryStyles.mainContainer__block2__secondPart}>
                    <p>Оплата осуществляется:</p>
                    <ul>
                        <li>Оплата онлайн</li>
                        <li>Картой или наличными при получении</li>
                        <li>По счёту банковским переводом</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Delivery;