import Card from "../../components/Card";
import React from "react";
import AppContext from "../../components/contex";
import { Link } from 'react-router-dom';
import styles from "./Favorites.module.scss";

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
                    <div className={styles.inner__page__empty}>
                        <img width={70} height={70} src='img/page__empty__face.png' alt='upset face' className='inner__page__empty__face' />
                        <h3 className={styles.inner__heading}>
                            Нет в избранном
                        </h3>
                        <p className={styles.inner__text}>
                        Вы ничего не добавляли в закладки
                        </p>
                        <Link to='/'>
                            <button type='button' className='button-order'>
                                Вернуться назад
                                <img width="13" height="12" alt="arrow" src="/img/arrowleft.svg" />

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