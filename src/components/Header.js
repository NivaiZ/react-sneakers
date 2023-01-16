function Header() {
    return (
        <header className="header">
            <div className="header__box">
                <img width={40} height={40} src="/img/logo.png" />
                <div className="header__block">
                    <h3 className="header__heading">React Sneakers</h3>
                    <p className="header__description">Магазин лучших кроссовок</p>
                </div>
            </div>

            <ul className="header__list">
                <li className="header__item">
                    <img width={18} height={17} src="/img/cart.svg" />
                    <span className="header__price">1205 руб.</span>
                </li>

                <li className="header__item">
                    <img width={18} height={17} src="/img/favorites.svg" />
                </li>

                <li className="header__item">
                    <img width={18} height={17} src="/img/login.svg" />
                </li>

            </ul>
        </header>
    )
}
export default Header;