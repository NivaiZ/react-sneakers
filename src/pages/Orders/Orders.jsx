import Card from "../../components/Card";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Orders.module.scss";

function Orders() {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        try {
            (async () => {
                const { data } = await axios.get('https://63c93f94c3e2021b2d52f97e.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false);
            })()
        } catch (error) {
            alert('Не удалось получить заказы');
            console.log(error);
        }

    }, [])

    return (
        <section className="showcase">
            <article className="showcase__inner showcase__inner--favorite">
                {orders.length > 0 ? (
                    <>
                        <h1 className="showcase__inner">Мои заказы</h1>
                        <ul className="card">
                            {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                                <Card
                                    key={index}
                                    loading={isLoading}
                                    {...item}
                                />
                            ))}
                        </ul>
                    </>
                ) : (
                    <div className={styles.inner__page__empty}>
                        <img width={70} height={70} src='img/no__orders.png' alt='upset face' className='inner__page__empty__face' />
                        <h3 className={styles.inner__heading}>
                            У вас нет заказов
                        </h3>
                        <p className={styles.inner__text}>
                            Скорее оформляйте заказы <br />по приятным ценам
                        </p>
                        <Link to='/'>
                            <button type='button' className='button-order'>
                                Вернуться назад
                                <img width="13" height="12" alt="arrow" src="img/arrowleft.svg" />

                            </button>
                        </Link>
                    </div>
                )

                }

            </article>

        </section>
    )
}

export default Orders;