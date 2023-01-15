function App() {
  return (
    <div className="wrapper">

      <aside className="overlay">
        <div className="sidebar">
          <h2 className="sidebar__heading">Корзина</h2>
          <ul className="sidebar__list">
            <li className="sidebar__item">
              <img className="sidebar__picture" width={70} height={70} src="/img/sneakers/sneakers__1.png" />
              <div className="sidebar__box">
                <p className="sidebar__description">Мужские Кроссовки Nike Air Max 270</p>
                <strong className="sidebar__price">12 999 руб.</strong>
              </div>
              <button className="sidebar__button" type="button">
                <img src="/img/btn__remove.svg" />
              </button>
            </li>
          </ul>
        </div>
      </aside>

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
        <div className="showcase__inner">
          <h1 className="showcase__heading search">Все кроссовки</h1>
          <div className="search__block">
            <img src="/img/search.svg" alt="search" />
            <input className="search__input" placeholder="Поиск..." />
          </div>
        </div>
        <ul className="cart">
          <li className="cart__item">
            <button className="cart__block" type="button">
              <img src="/img/btn__add.svg" />
            </button>
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
