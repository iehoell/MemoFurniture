import React from 'react';
import footerStyles from "./footerStyles.module.scss";

function Footer(){
    return(
        <footer>
            <div className={footerStyles.footerSections}>
                <div>
                    <h3 className={footerStyles.footerSections__Title}>Каталог</h3>
                    <a href='/catalogue' className={footerStyles.navLink}>
                        <p className={footerStyles.footerSections__navItem}>Диваны и кресла</p>
                    </a>
                    <a href='/catalogue' className={footerStyles.navLink}>
                        <p className={footerStyles.footerSections__navItem}>Столы и стулья</p>
                    </a>
                    <a href='/catalogue' className={footerStyles.navLink}>
                        <p className={footerStyles.footerSections__navItem}>Кровати</p>
                    </a>
                    <a href='/catalogue' className={footerStyles.navLink}>
                        <p className={footerStyles.footerSections__navItem}>Шкафы и стеллажи</p>
                    </a>
                    <a href='/catalogue' className={footerStyles.navLink}>
                        <p className={footerStyles.footerSections__navItem}>Комоды и тумбы</p>
                    </a>
                </div>
                <div>
                    <h3 className={footerStyles.footerSections__Title}>Клиентам</h3>
                    <a href='/' className={footerStyles.navLink}>
                        <p className={footerStyles.footerSections__navItem}>Распродажа</p>
                    </a>
                    <a href='/' className={footerStyles.navLink}>
                        <p className={footerStyles.footerSections__navItem}>О магазине</p>
                    </a>
                    <a href='/' className={footerStyles.navLink}>
                        <p className={footerStyles.footerSections__navItem}>Оплата товара</p>
                    </a>
                    <a href='/' className={footerStyles.navLink}>
                        <p className={footerStyles.footerSections__navItem}>Дизайн проекта</p>
                    </a>
                    <a href='/' className={footerStyles.navLink}>
                        <p className={footerStyles.footerSections__navItem}>Доставка и сборка</p>
                    </a>
                </div>
                <div>
                    <h3 className={footerStyles.footerSections__Title}>Контакты</h3>
                    <p className={footerStyles.footerSections__navItemContacts}>8 (800) 000 00 00</p>
                    <p className={footerStyles.footerSections__navItemContacts}>Пятницкая улица, 25с1, Москва, 115326</p>
                    <p className={footerStyles.footerSections__navItemContacts}>Memofurniture@mail.ru</p>
                    <div>
                        <a href='https://www.whatsapp.com/?lang=ru_RU' target="_blank">
                            <svg width='40' height='40' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="#e7772e"></path> </g></svg>
                        </a>
                        <a href='https://www.twitter.com/?lang=ru' target="_blank">
                            <svg width='40' height='40' viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>twitter [#154]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#e7772e"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]"> </path> </g> </g> </g> </g></svg>
                        </a>
                        <a href='https://m.vk.com/' target="_blank">
                            <svg width='40' height='40' fill="#e7772e" viewBox="-2.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#e7772e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>vk</title> <path d="M16.563 15.75c-0.5-0.188-0.5-0.906-0.531-1.406-0.125-1.781 0.5-4.5-0.25-5.656-0.531-0.688-3.094-0.625-4.656-0.531-0.438 0.063-0.969 0.156-1.344 0.344s-0.75 0.5-0.75 0.781c0 0.406 0.938 0.344 1.281 0.875 0.375 0.563 0.375 1.781 0.375 2.781 0 1.156-0.188 2.688-0.656 2.75-0.719 0.031-1.125-0.688-1.5-1.219-0.75-1.031-1.5-2.313-2.063-3.563-0.281-0.656-0.438-1.375-0.844-1.656-0.625-0.438-1.75-0.469-2.844-0.438-1 0.031-2.438-0.094-2.719 0.5-0.219 0.656 0.25 1.281 0.5 1.813 1.281 2.781 2.656 5.219 4.344 7.531 1.563 2.156 3.031 3.875 5.906 4.781 0.813 0.25 4.375 0.969 5.094 0 0.25-0.375 0.188-1.219 0.313-1.844s0.281-1.25 0.875-1.281c0.5-0.031 0.781 0.406 1.094 0.719 0.344 0.344 0.625 0.625 0.875 0.938 0.594 0.594 1.219 1.406 1.969 1.719 1.031 0.438 2.625 0.313 4.125 0.25 1.219-0.031 2.094-0.281 2.188-1 0.063-0.563-0.563-1.375-0.938-1.844-0.938-1.156-1.375-1.5-2.438-2.563-0.469-0.469-1.063-0.969-1.063-1.531-0.031-0.344 0.25-0.656 0.5-1 1.094-1.625 2.188-2.781 3.188-4.469 0.281-0.5 0.938-1.656 0.688-2.219-0.281-0.625-1.844-0.438-2.813-0.438-1.25 0-2.875-0.094-3.188 0.156-0.594 0.406-0.844 1.063-1.125 1.688-0.625 1.438-1.469 2.906-2.344 4-0.313 0.375-0.906 1.156-1.25 1.031z"></path> </g></svg>
                        </a>
                        <a href='https://www.facebook.com/?locale=ru_RU' target="_blank">
                            <svg width='40' height='40' fill="#e7772e" version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"  stroke="#e7772e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="7935ec95c421cee6d86eb22ecd11b7e3"> <path  d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379 c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302 c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263 l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z"> </path> </g> </g></svg>
                        </a>
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