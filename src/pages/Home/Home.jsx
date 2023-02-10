import Card from "../../components/Card";
import React from "react";
import styles from "./Home.module.scss";
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
        <section className={styles.main}>
            <div className={styles.main__inner}>
                <h1 className={styles.main__heading}>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className={styles.main__search}>
                    {searchValue && <button className="button" type="button" onClick={() => { setSearchValue('') }}>
                        <img src="img/btn__remove.svg" alt="remove"/>
                    </button>}
                    <img src="img/search.svg" alt="search" />
                    <input onChange={onChangeSearchInput} value={searchValue} className="search__input" placeholder="Поиск..." />
                </div>
            </div>

            <ul className="card">{renderItems()}</ul>
        </section>
    )
}


export default Home