import React from "react";
import appContext from "./contex";

const Info = ({ title, image, description }) => {
    const { setCartOpened } = React.useContext(appContext)
    return (
        <ul className="cart-empty">
            <li className="cart-empty__items">
                <img className="sidebar__picture" src={image} />
            </li>
            <li className="cart-empty__items cart-empty__items-offset--center">
                <h2 className="cart-empty__heading">{title}</h2>
                <p className="cart-empty__text">
                    {description}.
                </p>
            </li>
            <li className="cart-empty__items cart-empty__items-block--width">
                <button onClick={() => setCartOpened(false)} className="button-order button-order__arrow--left" type="button">Оформить заказ<img className="cart-empty__picture" width={13} height={12} src="/img/arrowleft.svg" /></button>
            </li>
        </ul>
    )
}
export default Info;