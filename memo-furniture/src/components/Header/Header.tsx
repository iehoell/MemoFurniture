import React from 'react';
import headerStyles from "./headerStyles.module.scss";

function Header(){
    return(
        <header>
            <div className={headerStyles.header__flexItems}>
                <div className={headerStyles.header__title}>Memo Furniture</div>
                <input placeholder={'Поиск'} className={headerStyles.header__inputField}></input>
                <div className={headerStyles.header__navMenu}>
                    <a className={headerStyles.navMenu__navMenuItem} href='/'>Главная</a>
                    <a className={headerStyles.navMenu__navMenuItem} href='/catalogue'>Каталог</a>
                    <a className={headerStyles.navMenu__navMenuItem}>Распродажа</a>
                    <a className={headerStyles.navMenu__navMenuItem} href='/#aboutUs'>О магазине</a>
                    <a className={headerStyles.navMenu__navMenuItem} href='/#contacts'>Контакты</a>
                </div>
                <div className={headerStyles.header__icons}>
                    <svg
                        className={headerStyles.firstSVG}
                         width='25'
                         height='25'
                         fill="#ffffff"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                            <path id="primary"
                                  d="M19.57,5.44a4.91,4.91,0,0,1,0,6.93L12,20,4.43,12.37A4.91,4.91,0,0,1,7.87,4a4.9,4.9,0,0,1,3.44,1.44,4.46,4.46,0,0,1,.69.88,4.46,4.46,0,0,1,.69-.88,4.83,4.83,0,0,1,6.88,0Z"/>
                    </svg>
                    <svg
                        className={headerStyles.secondSVG}
                        width='25'
                        height='25'
                        viewBox="0 0 24 24"
                        fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8H17.1597C18.1999 8 19.0664 8.79732 19.1528 9.83391L19.8195 17.8339C19.9167 18.9999 18.9965 20 17.8264 20H6.1736C5.00352 20 4.08334 18.9999 4.18051 17.8339L4.84718 9.83391C4.93356 8.79732 5.80009 8 6.84027 8H8M16 8H8M16 8L16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7L8 8M16 8L16 12M8 8L8 12" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
            </div>
        </header>
    );
}
export default Header;