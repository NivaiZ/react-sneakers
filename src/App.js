import axios from "axios";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favotires";
import AppContext from "./components/contex";
import Orders from "./pages/Orders/Orders";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('https://63c7fee35c0760f69ac2d96a.mockapi.io/cart'),
          axios.get('https://63c93f94c3e2021b2d52f97e.mockapi.io/favorites'),
          axios.get('https://63c7fee35c0760f69ac2d96a.mockapi.io/items')])

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('ошибка при запросе данных')
      }
    }

    fetchData();
  }, []);


  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://63c7fee35c0760f69ac2d96a.mockapi.io/cart/${findItem.id}`);
        
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://63c7fee35c0760f69ac2d96a.mockapi.io/cart', obj);
        setCartItems((prev) => prev.map((item) => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            }
          }
          return item
        }))
      }
      console.log(obj);
    } catch (error) {
      alert('Не получилось добавить товар в корзину');
      console.error(error);
    }
  };


  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://63c7fee35c0760f69ac2d96a.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Не удалось удалить товар');
      console.error(error);
    }

  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://63c93f94c3e2021b2d52f97e.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://63c93f94c3e2021b2d52f97e.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}>
      <div className="wrapper">

        <Sidebar items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} opened={cartOpened} />
        <Header onClickCart={() => setCartOpened(true)} />


        <Routes>
          <Route path="/" element=
            {<Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
            }
          />

          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>

      </div>

    </AppContext.Provider>
  );
}

export default App;
