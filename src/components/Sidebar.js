import React from "react";
import Info from "./Info";
import appContext from "./contex";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


function Sidebar({ onClose, onRemove, items = [] }) {
    const { cartItems, setCartItems } = React.useContext(appContext);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://63c93f94c3e2021b2d52f97e.mockapi.io/orders', {
                items: cartItems
            });

            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://63c93f94c3e2021b2d52f97e.mockapi.io/cart' + item.id);
                await delay(1000);

            }

        } catch (error) {
            alert('Не удалось создать заказ')
        }
        setIsLoading(false);
    }

    return (
        <aside className="overlay">

            <div className="sidebar">
                <h2 className="sidebar__heading">Корзина
                    <button onClick={onClose} className="sidebar__button" type="button">
                        <img src="/img/btn__remove.svg" />
                    </button>
                </h2>

                {items.length > 0 ? (
                    <ul className="sidebar__list sidebar__list--stretching">

                        {items.map((obj) => (
                            <li key={obj.id} className="sidebar__item">
                                <img className="sidebar__picture" width={70} height={70} src={`${obj.imageUrl}`} />
                                <div className="sidebar__box">
                                    <p className="sidebar__description">{obj.title}</p>
                                    <strong className="sidebar__price">{obj.price} руб.</strong>
                                </div>
                                <button onClick={() => onRemove(obj.id)} className="sidebar__button" type="button">
                                    <img src="/img/btn__remove.svg" />
                                </button>
                            </li>
                        ))}
                        <ul className="total__list">

                            <li className="total__item">
                                <span className="total__text">Итого:</span>
                                <span className="total__dotter"></span>
                                <strong className="total__price">21 498 руб. </strong>
                            </li>

                            <li className="total__item">
                                <span className="total__text">Налог 5%:</span>
                                <span className="total__dotter"></span>
                                <strong className="total__price">1074 руб.</strong>
                            </li>

                            <li className="total__item">
                                <button disabled={isLoading} onClick={onClickOrder} className="button-order" type="button">Оформить заказ<img className="total__picture" width={13} height={12} src="/img/arrow.svg" /></button>
                            </li>
                        </ul>
                    </ul>
                ) : (
                    <Info
                        title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
                        description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                        image={isOrderComplete ? "img/compliteorder.png" : "img/cartempty.png"}
                    />
                )}

            </div>
        </aside>
    )
}
export default Sidebar;