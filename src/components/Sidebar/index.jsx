import React from "react";
import Info from "../Info";
import axios from "axios";
import { useCart } from "../hooks/useCart";
import styles from "./Sidebar.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Sidebar({ onClose, opened, onRemove, items = [] }) {

    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const { cartItems, setCartItems, totalPrice } = useCart();

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://63c93f94c3e2021b2d52f97e.mockapi.io/orders', {
                items: cartItems,
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
            alert('Ошибка при создании заказа :(');
        }
        setIsLoading(false);
    };


    return (
        <aside className={`${styles.overlay} ${opened ? styles.overlay__visible : ''}`}>

            <div className={styles.sidebar}>
                <h2 className={styles.sidebar__heading}>Корзина
                    <button onClick={onClose} className={styles.sidebar__button} type="button">
                        <img src="/img/btn__remove.svg" />
                    </button>
                </h2>

                {items.length > 0 ? (
                    <ul className={styles.sidebar__list}>

                        {items.map((obj) => (
                            <li key={obj.id} className={styles.sidebar__item}>
                                <img className={styles.sidebar__picture} width={70} height={70} src={`${obj.imageUrl}`} />
                                <div className="sidebar__box">
                                    <p className={styles.sidebar__description}>{obj.title}</p>
                                    <strong className={styles.sidebar__price}>{obj.price} руб.</strong>
                                </div>
                                <button onClick={() => onRemove(obj.id)} className={styles.sidebar__button} type="button">
                                    <img src="/img/btn__remove.svg" />
                                </button>
                            </li>
                        ))}
                        <ul className="total__list">

                            <li className="total__item">
                                <span className="total__text">Итого:</span>
                                <span className="total__dotter"></span>
                                <strong className="total__price">{totalPrice} руб. </strong>
                            </li>

                            <li className="total__item">
                                <span className="total__text">Налог 20%:</span>
                                <span className="total__dotter"></span>
                                <strong className="total__price">{(totalPrice / 100) * 20} руб.</strong>
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