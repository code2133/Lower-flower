import React from "react";
import {Link,Router} from "react-router-dom";

import style from './Header.module.scss';

export const Header = () => {
    return (
        <header className={style.root}>
            <div className="container">
                <div className="wrapper">
                    <div className={style.header_block}>
                        <nav>
                            <ul className={style.list}>
                                <li><a href="#" className={style.l}>Каталог</a></li>
                                <li><a href="#" className={style.l}>Доставка и оплата</a></li>
                                <li><a href="#" className={style.l}>О нас</a></li>
                                <li><a href="#" className={style.l}>Контакты</a></li>
                                <li><a href="#" className={style.l}>FAQ</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;