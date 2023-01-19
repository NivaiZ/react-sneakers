import axios from "axios";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Favorites from "./pages/Favotires";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCardItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://63c7fee35c0760f69ac2d96a.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://63c7fee35c0760f69ac2d96a.mockapi.io/cart').then((res) => {
      setCardItems(res.data);
    });
    axios.get('https://63c93f94c3e2021b2d52f97e.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    })
  }, [])

  const onAddtoCardHandler = (obj) => {
    axios.post('https://63c7fee35c0760f69ac2d96a.mockapi.io/cart', obj)
      .then(res => setCardItems((prev) => [...prev, res.data]))
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://63c93f94c3e2021b2d52f97e.mockapi.io/favorites', obj)
      .then(res => setFavorites((prev) => [...prev, res.data]))
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
      
      <Routes>
        <Route path="/" element={<Home items={items} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} onAddToFavorite={onAddToFavorite} onAddtoCardHandler={onAddtoCardHandler} />}></Route>
        <Route path="/favorites" items={favorites} element={<Favorites />}></Route>
      </Routes>

    </div>

  );
}

export default App;
