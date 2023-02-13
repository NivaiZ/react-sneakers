import cardStyles from "./Card.module.scss";
import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../contex";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const itemObj = { id, parentId: id, title, imageUrl, price };


  const onClickPlus = () => {
    onPlus(itemObj);
  };

  const onClickFavorite = () => {
    onFavorite(itemObj);
    setIsFavorite(!isFavorite);
  };
  return (
    <>
      {loading ?
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader> :
        <li className={cardStyles.card__item}>

          {onFavorite && <button className={cardStyles.card__block} type="button" onClick={onClickFavorite}>
            <img src={isFavorite ? '/img/favorite__active.svg' : '/img/favorite__disabled.svg'} alt="favorite__active"/>
          </button>}

          <img width={133} height={112} src={imageUrl} alt="image"/>
          <p className={cardStyles.card__description}>{title}</p>
          <div className={cardStyles.card__inner}>
            <div className={cardStyles.card__box}>
              <span className={cardStyles.card__text}>Цена:</span>
              <strong className={cardStyles.card__price}>{price} руб.</strong>
            </div>
            {onPlus && <button
              className={cardStyles.card__button}
              type="button"
              onClick={onClickPlus}
            >
              <img width={32} height={32}
                src={isItemAdded(id) ? '/img/btn__check.svg' : '/img/plus.svg'}
                alt="plus"
              />
            </button>}
          </div>
        </li>
      }
    </>

  )
}
export default Card;