import axios from "axios";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Favorites from "./pages/Favotires";
import appContext from "./components/contex";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCardItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponce = await axios.get('https://63c7fee35c0760f69ac2d96a.mockapi.io/cart');
      const favoriteResponce = await axios.get('https://63c93f94c3e2021b2d52f97e.mockapi.io/favorites');
      const itemResponce = await axios.get('https://63c7fee35c0760f69ac2d96a.mockapi.io/items');

      setIsLoading(false);
      setCardItems(cartResponce.data);
      setFavorites(favoriteResponce.data);
      setItems(itemResponce.data);
    }
    fetchData()
  }, [])


  const onAddtoCardHandler = (obj) => {
    console.log(obj);
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://63c7fee35c0760f69ac2d96a.mockapi.io/cart/${obj.id}`);
      setCardItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
    } else {
      axios.post('https://63c7fee35c0760f69ac2d96a.mockapi.io/cart', obj)
      setCardItems((prev) => [...prev, obj])
    }

  }

  const onAddToFavorite = async (obj) => {
    console.log(obj);
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://63c93f94c3e2021b2d52f97e.mockapi.io/favorites/${obj.id}`)
      } else {
        const { data } = await axios.post('https://63c93f94c3e2021b2d52f97e.mockapi.io/favorites', obj)
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить товары в избранное')
    }

  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onRemoveCart = (id) => {
    axios.delete(`https://63c7fee35c0760f69ac2d96a.mockapi.io/cart/${id}`);
    setCardItems((prev) => prev.filter((item) => item.id !== id))
  }
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }

  return (
    <appContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite }}>
      <div className="wrapper">

        {cartOpened && <Sidebar items={cartItems} onClose={() => { setCartOpened(false) }} onRemove={onRemoveCart} />}

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route path="/" element={<Home items={items} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} onAddToFavorite={onAddToFavorite} cartItems={cartItems} isLoading={isLoading} onAddtoCardHandler={onAddtoCardHandler} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

      </div>

    </appContext.Provider>
  );
}

export default App;
