import axios from "axios";
import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCardItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://63c7fee35c0760f69ac2d96a.mockapi.io/items').then((res) => {
      setItems(res.data);
    })
    axios.get('https://63c7fee35c0760f69ac2d96a.mockapi.io/cart').then((res) => {
      setCardItems(res.data);
    })
  }, [])

  const onAddtoCardHandler = (obj) => {
    axios.post('https://63c7fee35c0760f69ac2d96a.mockapi.io/cart', obj)
    .then(res =>setCardItems(prev => [...prev, res.data])) 
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onRemoveCart = (id) => {
    axios.delete(`https://63c7fee35c0760f69ac2d96a.mockapi.io/cart/${id}`);
    setCardItems((prev) => prev.filter((item) => item.id !== id))
  }
  return (
    <div className="wrapper">

      {cartOpened && <Sidebar items={cartItems} onClose={() => { setCartOpened(false) }} onRemove={onRemoveCart} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <section className="showcase">
        <div className="showcase__inner">
          <h1 className="showcase__heading search">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search__block">
            {searchValue && <button className="button" type="button" onClick={() => { setSearchValue('') }}>
              <img src="/img/btn__remove.svg" />
            </button>}
            <img src="/img/search.svg" alt="search" />
            <input onChange={onChangeSearchInput} value={searchValue} className="search__input" placeholder="Поиск..." />
          </div>
        </div>

        <ul className="card">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onAddToFavorite={() => console.log('Добавили в закладки')}
                OnAddToCard={(obj) => { onAddtoCardHandler(obj); }}
              />
            ))}
        </ul>
      </section>
    </div>

  );
}

export default App;
