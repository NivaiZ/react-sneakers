import Card from "../components/Card";
import React from "react";
import axios from "axios";
import AppContext from "../components/contex";


function Orders() {
    const { onAddToFavorite, onAddToCart } = React.useContext(AppContext)
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://63c93f94c3e2021b2d52f97e.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            } catch (error) {
                alert('Не удалось получить заказы');
                console.log(error);
            }
        })()

    }, [])

    return (
        <section className="showcase">
            <article className="showcase__inner showcase__inner--favorite">
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

            </article>

        </section>
    )
}

export default Orders;