import React from 'react'
import '../Catalog/Header.module.sass'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#">Каталог</a></li>
                    <li><a href="#">Доставка и оплата </a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">поиск</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
