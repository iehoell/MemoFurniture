import React from 'react';
import headerStyles from "./headerStyles.module.scss";

function Header(){
    return(
        <header>
            <div className={headerStyles.header__flexItems}>
                <div className={headerStyles.header__title}>Memo Furniture</div>
                <input placeholder={'Поиск'} className={headerStyles.header__inputField}></input>
                <div className={headerStyles.header__navMenu}>
                    <a className={headerStyles.navMenu__navMenuItem}>Главная</a>
                    <a className={headerStyles.navMenu__navMenuItem}>Каталог</a>
                    <a className={headerStyles.navMenu__navMenuItem}>Распродажа</a>
                    <a className={headerStyles.navMenu__navMenuItem}>О магазине</a>
                    <a className={headerStyles.navMenu__navMenuItem}>Контакты</a>
                </div>
                <div className={headerStyles.header__icons}>
                    <a>ico</a>
                    <a>ns</a>
                </div>
            </div>
        </header>
    );
}
export default Header;