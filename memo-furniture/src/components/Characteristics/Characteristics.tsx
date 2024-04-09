import React from "react";
import characteristicsStyles from './characteristicsStyles.module.scss';

function Characteristics(){
    return(
        <div className={characteristicsStyles.mainContainer}>
            <div className={characteristicsStyles.mainContainer__flexBlock}>
                <p>Бренд: </p>
                <p>Sure</p>
            </div>
            <div className={characteristicsStyles.mainContainer__flexBlock}>
                <p>Наличие: </p>
                <p>На заказ от 3 недель</p>
            </div>
            <div className={characteristicsStyles.mainContainer__flexBlock}>
                <p>Ширина: </p>
                <p>236 см.</p>
            </div>
            <div className={characteristicsStyles.mainContainer__flexBlock}>
                <p>Высота: </p>
                <p>70 см.</p>
            </div>
            <div className={characteristicsStyles.mainContainer__flexBlock}>
                <p>Цвет: </p>
                <p>Бежевый</p>
            </div>
            <div className={characteristicsStyles.mainContainer__flexBlock}>
                <p>Гарантия: </p>
                <p>24 месяца</p>
            </div>
            <div className={characteristicsStyles.mainContainer__flexBlock}>
                <p>Страна: </p>
                <p>Россия</p>
            </div>
        </div>
    );
}
export default Characteristics;