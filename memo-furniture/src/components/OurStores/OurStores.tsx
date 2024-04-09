import React from "react";
import ourStoresStyles from './ourStoresStyles.module.scss';

function OurStores(){
    return(
        <div className={ourStoresStyles.mainContainer}>
            <h1>Список наших магазинов в городе Москва:</h1>
            <div className={ourStoresStyles.mainContainer__container}>
                <h3>Региональный склад "MemoFurniture", Московская область, г.о. Химки, посёлок Лунёво, д.1, корп. Б, офис 6</h3>
                <p>+7 (916) 202-01-28</p>
                <p>+7 (964) 510-90-38</p>
                <p>Memofurniture@mail.ru</p>
                <p>пн-пт: с 8.00 до 17.00; сб-вс: выходной</p>
            </div>
            <div className={ourStoresStyles.mainContainer__container}>
                <h3>ЦМ "Нобби", Фирменный магазин "MemoFurniture", г.Подольск, пр-т Юных Ленинцев, д. 61, этаж 2</h3>
                <p>+7 (915) 091-62-10</p>
                <p>Memofurniture@mail.ru</p>
                <p>с 10:00 до 21:00 без перерыва и выходных</p>
            </div>
            <div className={ourStoresStyles.mainContainer__container}>
                <h3>ТЦ "Формат", Фирменный салон "MemoFurniture", г. Мытищи, пр-т Олимпийский, вл. 29, стр.1, 2 этаж, секция Г-1</h3>
                <p>+7 (919) 961-95-95</p>
                <p>Memofurniture@mail.ru</p>
                <p>с 10.00 до 21.00 ежедневно</p>
            </div>
        </div>
    );
}
export default OurStores;