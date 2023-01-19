import Card from "../components/Card";

function Favorites({ items }) {
    return (
        <section className="showcase">
            <div className="showcase__inner">
                <h1 className="showcase__inner">Мои закладки</h1>
                <ul className="card">
                    {items.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                        />
                    ))}
                </ul>

            </div>

        </section>
    )
}
export default Favorites;