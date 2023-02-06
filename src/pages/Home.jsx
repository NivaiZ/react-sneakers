import Card from "../components/Card";
import React from "react";

function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading,
}) {
    const renderItems = () => {
        const filtredItems = items.filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
          <Card
            key={index}
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            loading={isLoading}
            {...item}
          />
        ));
      };


    return (
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

            <ul className="card">{renderItems()}</ul>
        </section>
    )
}


export default Home