function Sidebar({ onClose, onRemove, items = [] }) {
    return (
        <aside className="overlay">

            <div className="sidebar">
                <h2 className="sidebar__heading">Корзина
                    <button onClick={onClose} className="sidebar__button" type="button">
                        <img src="/img/btn__remove.svg" />
                    </button>
                </h2>

                {items.length > 0 ? <ul className="sidebar__list sidebar__list--stretching">

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
                            <button className="button-order" type="button">Оформить заказ<img className="total__picture" width={13} height={12} src="/img/arrow.svg" /></button>
                        </li>
                    </ul>
                </ul> :
                    <ul className="cart-empty">
                        <li className="cart-empty__items">
                            <img className="sidebar__picture" src="/img/cartempty.png" />
                        </li>
                        <li className="cart-empty__items cart-empty__items-offset--center">
                            <h2 className="cart-empty__heading">Корзина пустая</h2>
                            <p className="cart-empty__text">
                                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                            </p>
                        </li>
                        <li className="cart-empty__items cart-empty__items-block--width">
                            <button onClick={onClose} className="button-order button-order__arrow--left" type="button">Оформить заказ<img className="cart-empty__picture" width={13} height={12} src="/img/arrowleft.svg" /></button>
                        </li>
                    </ul>

                }

            </div>
        </aside>
    )
}
export default Sidebar;