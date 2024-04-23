import React from 'react';
import placingOrderPageStyles from './placingOrderPageStyles.module.scss';
class PlacingOrderPage extends React.Component<any, any>{
    linkChecker = () => {
        let count = new URL(window.location.href).searchParams.get("count");
        let priceCount = new URL(window.location.href).searchParams.get("priceCount");
        let saleCount = new URL(window.location.href).searchParams.get("saleCount");
        let priceWithoutSaleCount = new URL(window.location.href).searchParams.get("priceWithoutSaleCount");
        let one = document.getElementById('1')
        let two = document.getElementById('2')
        let three = document.getElementById('3')
        let four = document.getElementById('4')

        one.innerText = String(count) + ' ' + 'товара(ов)';
        two.innerText = String(priceCount);
        three.innerText = String(saleCount);
        four.innerText = String(priceWithoutSaleCount);
    }
    render() {
        window.onload = this.linkChecker
        return(
            <div className={placingOrderPageStyles.mainContainer}>
                <div className={placingOrderPageStyles.mainContainer__flexBlocks}>
                    <div className={placingOrderPageStyles.mainContainer__flexBlocks__orderForm}>
                        <p className={placingOrderPageStyles.mainContainer__flexBlocks__orderForm__title}>
                            Оформление заказа
                        </p>
                        <form>
                            <div className={placingOrderPageStyles.flexTitle}>
                                <div className={placingOrderPageStyles.flexInput}>
                                    <p>Имя</p>
                                    <input type='text'/>
                                </div>
                                <div className={placingOrderPageStyles.flexInput}>
                                    <p>Фамилия</p>
                                    <input type='text'/>
                                </div>
                            </div>
                            <p className={placingOrderPageStyles.form__title}>
                                Адрес
                            </p>
                            <input/>
                            <div className={placingOrderPageStyles.flexTitle}>
                                <div className={placingOrderPageStyles.flexInput}>
                                    <p>Индекс</p>
                                    <input type='number'/>
                                </div>
                                <div className={placingOrderPageStyles.flexInput}>
                                    <p>Город</p>
                                    <input type='text'/>
                                </div>
                            </div>
                            <div className={placingOrderPageStyles.flexTitle}>
                                <div className={placingOrderPageStyles.flexInput}>
                                    <p>Номер телефона</p>
                                    <input type='tel'/>
                                </div>
                                <div className={placingOrderPageStyles.flexInput}>
                                    <p>Email</p>
                                    <input type='email'/>
                                </div>
                            </div>
                            <p className={placingOrderPageStyles.form__title}>
                                Комментарий к заказу
                            </p>
                            <textarea/>
                        </form>
                    </div>
                    <div className={placingOrderPageStyles.mainContainer__flexBlocks__finalPrice}>
                        <p className={placingOrderPageStyles.mainContainer__flexBlocks__finalPrice__title}>
                            Сумма заказа
                        </p>
                        <div className={placingOrderPageStyles.mainContainer__flexBlocks__finalPrice__flexBlock}>
                            <p className={placingOrderPageStyles.mainContainer__flexBlocks__finalPrice__item} id='1'>
                                ?
                            </p>
                            <p className={placingOrderPageStyles.mainContainer__flexBlocks__finalPrice__item} id='2'>
                                ?
                            </p>
                        </div>
                        <div className={placingOrderPageStyles.mainContainer__flexBlocks__finalPrice__flexBlock}>
                            <p className={placingOrderPageStyles.mainContainer__flexBlocks__finalPrice__item}>
                                Скидка
                            </p>
                            <p className={placingOrderPageStyles.mainContainer__flexBlocks__finalPrice__item} id='3'>
                                ?
                            </p>
                        </div>
                        <div className={placingOrderPageStyles.mainContainer__flexBlocks__finalPrice__flexBlock}>
                            <p className={placingOrderPageStyles.mainContainer__flexBlocks__finalPrice__item}>
                                Доставка
                            </p>
                            <p className={placingOrderPageStyles.mainContainer__flexBlocks__finalPrice__item__delivery}>
                                Бесплатно
                            </p>
                        </div>
                        <div className={placingOrderPageStyles.mainContainer__flexBlocks__finalPrice__flexBlock}>
                            <p className={placingOrderPageStyles.mainContainer__flexBlocks__finalPrice__lastItem}>
                                Итого
                            </p>
                            <p className={placingOrderPageStyles.mainContainer__flexBlocks__finalPrice__lastItem} id='4'>
                                ?
                            </p>
                        </div>
                        <button type={"submit"} className={placingOrderPageStyles.Pay}>Оплатить</button>
                        <div className={placingOrderPageStyles.PromocodeBlock}>
                            <p className={placingOrderPageStyles.PromocodeBlock__title}>Промокод</p>
                            <div className={placingOrderPageStyles.promocode}>
                                <input className={placingOrderPageStyles.Form__input} placeholder='Ввести промокод'/>
                                <button type={"submit"} className={placingOrderPageStyles.Form__button}>Применить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PlacingOrderPage;