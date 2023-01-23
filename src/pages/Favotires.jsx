import Card from "../components/Card";
import React from "react";
import appContext from "../components/contex";


function Favorites() {
    const {favorites, onAddToFavorite} = React.useContext(appContext)
    return (
        <section className="showcase">
            <article className="showcase__inner showcase__inner--favorite">
                <h1 className="showcase__inner">Мои закладки</h1>
                <ul className="card">
                    {favorites.map((item, index) => (
                        <Card key={index} favorited={true} onFavorite={onAddToFavorite} {...item}
                        />
                    ))}
                </ul>

            </article>

        </section>
    )
}

export default Favorites;