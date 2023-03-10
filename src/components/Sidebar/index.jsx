import React from "react";
import Info from "../Info";
import axios from "axios";
import { useCart } from "../hooks/useCart";
import styles from "./Sidebar.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Sidebar({ onClose, opened, onRemove, items = [] }) {

    const { cartItems, setCartItems, totalPrice } = useCart();
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://63c93f94c3e2021b2d52f97e.mockapi.io/orders', { items: cartItems });
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                console.log(item);
                await axios.delete('https://63c7fee35c0760f69ac2d96a.mockapi.io/cart/' + item.id);
                await delay(1000);
            }
        } catch (error) {
            console.warn(error);
            alert('не удалось отправить заказ');
        }
        setIsLoading(false);
    };

    return (
        <aside className={`${styles.overlay} ${opened ? styles.overlay__visible : ''}`} onClick={() => onClose(false)}>

            <div className={styles.sidebar} onClick={e => e.stopPropagation()}>
                <h2 className={styles.sidebar__heading}>Корзина
                    <button onClick={onClose} className={styles.sidebar__button} type="button">
                        <img src="/img/btn__remove.svg" alt="remove" />
                    </button>
                </h2>

                {items.length > 0 ? (
                    <ul className={styles.sidebar__list}>

                        {items.map((obj) => (
                            <li key={obj.id} className={styles.sidebar__item}>
                                <img className={styles.sidebar__picture} width={70} height={70} src={`${obj.imageUrl}`} alt="product" />
                                <div className="sidebar__box">
                                    <p className={styles.sidebar__description}>{obj.title}</p>
                                    <strong className={styles.sidebar__price}>{obj.price} руб.</strong>
                                </div>
                                <button onClick={() => onRemove(obj.id)} className={styles.sidebar__button} type="button">
                                    <img src="/img/btn__remove.svg" alt="remove" />
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
                                <span className="total__text">Налог 18%:</span>
                                <span className="total__dotter"></span>
                                <strong className="total__price">{(totalPrice / 100) * 18} руб.</strong>
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