import Card from "./components/Card";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const arrayCard = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/sneakers__1.png'
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270', price: 13999, imageUrl: '/img/sneakers/sneakers__2.png'
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270', price: 8499, imageUrl: '/img/sneakers/sneakers__3.png'
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270', price: 8999, imageUrl: '/img/sneakers/sneakers__4.png'
  },


]

function App() {
  return (
    <div className="wrapper">

      <Sidebar />
      <Header />

      <section className="showcase">
        <div className="showcase__inner">
          <h1 className="showcase__heading search">Все кроссовки</h1>
          <div className="search__block">
            <img src="/img/search.svg" alt="search" />
            <input className="search__input" placeholder="Поиск..." />
          </div>
        </div>

        <ul className="card">
          {arrayCard.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </ul>
      </section>
    </div>

  );
}

export default App;
