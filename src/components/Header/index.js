import headerStyles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.header__box}>
                <Link to="/">
                    <div className={headerStyles.header__logo}>
                        <img width={40} height={40} src="/img/logo.png" />
                    </div>
                </Link>
                <div className={headerStyles.header__block}>
                    <h3 className={headerStyles.header__heading}>React Sneakers</h3>
                    <p className={headerStyles.header__description}>Магазин лучших кроссовок</p>
                </div>
            </div>

            <ul className={headerStyles.header__list}>
                <li onClick={props.onClickCart} className={headerStyles.header__item}>
                    <button className="header__button" type="button">
                        <img width={18} height={17} src="/img/cart.svg" />
                        <span className={headerStyles.header__price}>1205 руб.</span>
                    </button>
                </li>

                <li className={headerStyles.header__item}>
                    <Link to="/favorites">
                        <button className={headerStyles.header__button} type="button">
                            <img width={18} height={17} src="/img/favorites.svg" />
                        </button>
                    </Link>
                </li>

                <li className={headerStyles.header__item}>
                    <button className="header__button" type="button">
                        <img width={18} height={17} src="/img/login.svg" />
                    </button>
                </li>

            </ul>
        </header>
    )
}
export default Header;