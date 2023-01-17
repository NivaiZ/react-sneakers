import cardStyles from "./Card.module.scss";

function Card(props) {
  return (
    <li className={cardStyles.card__item}>
      <button className={cardStyles.card__block} type="button">
        <img src="/img/btn__add.svg" />
      </button>
      <img width={133} height={112} src={props.imageUrl} />
      <p className={cardStyles.card__description}>{props.title}</p>
      <div className={cardStyles.card__inner}>
        <div className={cardStyles.card__box}>
          <span className={cardStyles.card__text}>Цена:</span>
          <strong className={cardStyles.card__price}>{props.price} руб.</strong>
        </div>
        <button className={cardStyles.card__button} onClick={props.onClick}>
          <img width={32} height={32} src="/img/plus.svg" />
        </button>
      </div>
    </li>
  )
}
export default Card;