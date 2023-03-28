import React from "react";
import {Link,Router} from "react-router-dom";

import style from './Header.module.scss';

export const Header = () => {
    return (
        <header className={style.root}>
            <ul className={style.list}>
                <li><a href="#" className={style.l}>Каталог</a></li>
                <li><a href="#" className={style.l}>Доставка и оплата</a></li>
                <li><a href="#" className={style.l}>О нас</a></li>
                <li><a href="#" className={style.l}>Контакты</a></li>
                <li><a href="#" className={style.l}>FAQ</a></li>
            </ul>
        </header>
    )
}

export default Header;