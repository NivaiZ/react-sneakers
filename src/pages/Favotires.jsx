import Card from "../components/Card";

function Favorites({ items, onAddToFavorite }) {
    return (
        <section className="showcase">
            <article className="showcase__inner showcase__inner--favorite">
                <h1 className="showcase__inner">Мои закладки</h1>
                <ul className="card">
                    {items.map((item, index) => (
                        <Card
                            key={index}
                            favorited={true}
                            onFavorite={onAddToFavorite}
                            {...item}
                        />
                    ))}
                </ul>

            </article>

        </section>
    )
}
export default Favorites;