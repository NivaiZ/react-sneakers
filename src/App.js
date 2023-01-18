import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://63c7fee35c0760f69ac2d96a.mockapi.io/items')
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      setItems(json);
    })
  }, [])
  return (
    <div className="wrapper">

      {cartOpened && <Sidebar onClose={() => { setCartOpened(false) }} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <section className="showcase">
        <div className="showcase__inner">
          <h1 className="showcase__heading search">Все кроссовки</h1>
          <div className="search__block">
            <img src="/img/search.svg" alt="search" />
            <input className="search__input" placeholder="Поиск..." />
          </div>
        </div>

        <ul className="card">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onAddToFavorite={() => console.log('Добавили в закладки')}
              OnAddToCard={() => console.log('Нажали на плюс')}
            />
          ))}
        </ul>
      </section>
    </div>

  );
}

export default App;
