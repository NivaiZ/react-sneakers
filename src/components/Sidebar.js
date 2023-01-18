function Sidebar(props) {
    return (
        <aside className="overlay">

            <div className="sidebar">
                <h2 className="sidebar__heading">Корзина
                    <button  onClick={props.onClose} className="sidebar__button" type="button">
                        <img src="/img/btn__remove.svg" />
                    </button>
                </h2>

                <ul className="sidebar__list sidebar__list--stretching">

                    <li className="sidebar__item">
                        <img className="sidebar__picture" width={70} height={70} src="/img/sneakers/sneakers__1.png" />
                        <div className="sidebar__box">
                            <p className="sidebar__description">Мужские Кроссовки Nike Air Max 270</p>
                            <strong className="sidebar__price">12 999 руб.</strong>
                        </div>
                        <button className="sidebar__button" type="button">
                            <img src="/img/btn__remove.svg" />
                        </button>
                    </li>

                    <li className="sidebar__item">
                        <img className="sidebar__picture" width={70} height={70} src="/img/sneakers/sneakers__1.png" />
                        <div className="sidebar__box">
                            <p className="sidebar__description">Мужские Кроссовки Nike Air Max 270</p>
                            <strong className="sidebar__price">12 999 руб.</strong>
                        </div>
                        <button className="sidebar__button" type="button">
                            <img src="/img/btn__remove.svg" />
                        </button>
                    </li>
                </ul>

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
                </ul>

                <button className="total__button" type="button">Оформить заказ<img className="total__picture" width={13} height={12} src="/img/arrow.svg" /></button>
            </div>
        </aside>
    )
}
export default Sidebar;