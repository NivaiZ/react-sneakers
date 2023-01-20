import Card from "../components/Card";

function Favorites({ items }) {
    return (
        <section className="showcase">
            <article className="showcase__inner showcase__inner--favorite">
                <h1 className="showcase__inner">Мои закладки</h1>
                <ul className="card">
                    {items.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            favorited={true}
                        />
                    ))}
                </ul>

            </article>

        </section>
    )
}
export default Favorites;