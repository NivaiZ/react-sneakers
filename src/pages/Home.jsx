import Card from "../components/Card";

function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddtoCardHandler }) {
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

            <ul className="card">
                {items.filter((item) => item.title.toLowerCase().includes(searchValue))
                    .map((item, index) => (
                        <Card
                            key={index}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            OnAddToCard={(obj) => onAddtoCardHandler(obj)}
                            {...item}
                        />
                    ))}
            </ul>
        </section>
    )
}
export default Home