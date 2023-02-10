import Card from "../components/Card";
import React from "react";
import AppContext from "../components/contex";
import { Link } from 'react-router-dom'

function Favorites() {
    const { favorites, onAddToFavorite } = React.useContext(AppContext)
    return (

        <section className="showcase">
            <article className="showcase__inner showcase__inner--favorite">
                {favorites.length > 0 ? (
                    <>
                        <h1 className="showcase__inner">Мои закладки</h1>

                        <ul className="card">
                            {favorites.map((item, index) => (
                                <Card key={index} favorited={true} onFavorite={onAddToFavorite} {...item} />
                            ))}
                        </ul>
                    </>
                ) : (
                    <div className='inner__page__empty'>
                        <img width={300} height={100} src='img/page__empty__face.png' alt='upset face' className='inner__page__empty__face' />
                        <h3>
                            Закладок нет
                        </h3>
                        <p>
                            Вы ничего не добавляли в закладки
                        </p>
                        <Link to='/'>
                            <button type='button' className='button-order'>
                                Go back
                                <img width="13" height="12" src="/img/arrow.svg" />

                            </button>
                        </Link>
                    </div>
                )
                }
            </article>

        </section>
    )
}

export default Favorites;