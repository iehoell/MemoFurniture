import React from 'react';
import footerStyles from "./footerStyles.module.scss";

function Footer(){
    return(
        <footer>
            <div className={footerStyles.footerSections}>
                <div>
                    <h3 className={footerStyles.footerSections__Title}>Каталог</h3>
                    <p className={footerStyles.footerSections__navItem}>Диваны и кресла</p>
                    <p className={footerStyles.footerSections__navItem}>Столы и стулья</p>
                    <p className={footerStyles.footerSections__navItem}>Кровати</p>
                    <p className={footerStyles.footerSections__navItem}>Шкафы и стеллажи</p>
                    <p className={footerStyles.footerSections__navItem}>Камоды и тумбы</p>
                </div>
                <div>
                    <h3 className={footerStyles.footerSections__Title}>Клиентам</h3>
                    <p className={footerStyles.footerSections__navItem}>Распродажа</p>
                    <p className={footerStyles.footerSections__navItem}>О магазине</p>
                    <p className={footerStyles.footerSections__navItem}>Оплата товара</p>
                    <p className={footerStyles.footerSections__navItem}>Дизайн проекта</p>
                    <p className={footerStyles.footerSections__navItem}>Доставка и сборка</p>
                </div>
                <div>
                    <h3 className={footerStyles.footerSections__Title}>Контакты</h3>
                    <p className={footerStyles.footerSections__navItem}>8 (800) 000 00 00</p>
                    <p className={footerStyles.footerSections__navItem}>Пятницкая улица, 25с1, Москва, 115326</p>
                    <p className={footerStyles.footerSections__navItem}>Memofurniture@mail.ru</p>
                    <div>
                        <p>иконки соц сетей</p>
                    </div>
                </div>
            </div>
            <div className={footerStyles.underlineSection}>
                <p className={footerStyles.underlineSection__company}>Memo Furniture</p>
                <p className={footerStyles.underlineSection__description}>Производители изделий оставляют за собой право вносить
                изменения в конструккцию изделий, не влияющие на её функциональность
                и художественное решение. В связи с разлиями в настройках цветопередачи мониторов
                и невозможностью в полной мере передать некоторые свойства материалов</p>
                <p className={footerStyles.underlineSection__privacyPolice} >Политика конфиденциальности</p>
            </div>
        </footer>
    );
}
export default Footer;