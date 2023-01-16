function Card () {
    return (
        <li className="card__item">
            <button className="card__block" type="button">
              <img src="/img/btn__add.svg" />
            </button>
            <img width={133} height={112} src="/img/sneakers/sneakers__1.png" />
            <p className="card__description">
              Мужские Кроссовки Nike Blazer Mid Suede
            </p>
            <div className="card__inner">
              <div className="card__box">
                <span className="card__text">Цена:</span>
                <strong className="card__price">12 999 руб.</strong>
              </div>
              <button className="card__button">
                <img width={32} height={32} src="/img/plus.svg" />
              </button>
            </div>
          </li>
    )
}
export default Card;