import headerStyles from "./Header.module.scss";

function Header() {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.header__box}>
                <img width={40} height={40} src="/img/logo.png" />
                <div className={headerStyles.header__block}>
                    <h3 className={headerStyles.header__heading}>React Sneakers</h3>
                    <p className={headerStyles.header__description}>Магазин лучших кроссовок</p>
                </div>
            </div>

            <ul className={headerStyles.header__list}>
                <li className={headerStyles.header__item}>
                    <img width={18} height={17} src="/img/cart.svg" />
                    <span className={headerStyles.header__price}>1205 руб.</span>
                </li>

                <li className={headerStyles.header__item}>
                    <img width={18} height={17} src="/img/favorites.svg" />
                </li>

                <li className={headerStyles.header__item}>
                    <img width={18} height={17} src="/img/login.svg" />
                </li>

            </ul>
        </header>
    )
}
export default Header;