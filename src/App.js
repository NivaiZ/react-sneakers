function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__box">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="header__block">
            <h3 className="header__heading">React Sneakers</h3>
            <p className="header__description">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="header__list">
          <li className="header__item">
            <img width={18} height={17} src="/img/cart.svg" />
            <span className="header__price">1205 руб.</span>
          </li>

          <li className="header__item">
            <img width={18} height={17} src="/img/favorites.svg" />
          </li>

          <li className="header__item">
            <img width={18} height={17} src="/img/login.svg" />
          </li>

        </ul>
      </header>
      <section className="showcase">
        <h1 className="showcase__heading">Все кроссовки</h1>
        <ul className="cart">
          <li className="cart__item">
            <img width={133} height={112} src="/img/sneakers/sneakers__1.png" />
            <p className="cart__description">
              Мужские Кроссовки Nike Blazer Mid Suede
            </p>
            <div className="cart__inner">
              <div className="cart__box">
                <span className="cart__text">Цена:</span>
                <strong className="cart__price">12 999 руб.</strong>
              </div>
              <button className="cart__button">
                <img width={32} height={32} src="/img/plus.svg" />
              </button>
            </div>
          </li>

          <li className="cart__item">
            <img width={133} height={112} src="/img/sneakers/sneakers__2.png" />
            <p className="cart__description">
              Мужские Кроссовки Nike Blazer Mid Suede
            </p>
            <div className="cart__inner">
              <div className="cart__box">
                <span className="cart__text">Цена:</span>
                <strong className="cart__price">12 999 руб.</strong>
              </div>
              <button className="cart__button">
                <img width={32} height={32} src="/img/plus.svg" />
              </button>
            </div>
          </li>

          <li className="cart__item">
            <img width={133} height={112} src="/img/sneakers/sneakers__3.png" />
            <p className="cart__description">
              Мужские Кроссовки Nike Blazer Mid Suede
            </p>
            <div className="cart__inner">
              <div className="cart__box">
                <span className="cart__text">Цена:</span>
                <strong className="cart__price">12 999 руб.</strong>
              </div>
              <button className="cart__button">
                <img width={32} height={32} src="/img/plus.svg" />
              </button>
            </div>
          </li>

          <li className="cart__item">
            <img width={133} height={112} src="/img/sneakers/sneakers__4.png" />
            <p className="cart__description">
              Мужские Кроссовки Nike Blazer Mid Suede
            </p>
            <div className="cart__inner">
              <div className="cart__box">
                <span className="cart__text">Цена:</span>
                <strong className="cart__price">12 999 руб.</strong>
              </div>
              <button className="cart__button">
                <img width={32} height={32} src="/img/plus.svg" />
              </button>
            </div>
          </li>
        </ul>
      </section>
    </div>

  );
}

export default App;
