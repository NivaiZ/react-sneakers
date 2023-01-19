import cardStyles from "./Card.module.scss";
import React from "react";

function Card({ OnAddToCard, onAddToFavorite, imageUrl, title, price }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState([]);

  const onClickPlus = () => {
    OnAddToCard({ title, imageUrl, price });
    setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    onAddToFavorite({ title, imageUrl, price });
    setIsFavorite(!isFavorite)
  }

  React.useEffect(() => {
  }, [isAdded])

  return (
    <li className={cardStyles.card__item}>
      <button className={cardStyles.card__block} type="button" onClick={onClickFavorite}>
        <img src={isFavorite ? '/img/favorite__disabled.svg' : '/img/favorite__active.svg'} />
      </button>
      <img width={133} height={112} src={imageUrl} />
      <p className={cardStyles.card__description}>{title}</p>
      <div className={cardStyles.card__inner}>
        <div className={cardStyles.card__box}>
          <span className={cardStyles.card__text}>Цена:</span>
          <strong className={cardStyles.card__price}>{price} руб.</strong>
        </div>
        <button className={cardStyles.card__button} type="button" onClick={onClickPlus}>
          <img width={32} height={32} src={isAdded ? '/img/btn__check.svg' : '/img/plus.svg'} />
        </button>
      </div>
    </li>
  )
}
export default Card;