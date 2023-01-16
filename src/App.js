import Card from "./components/Card";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
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
          <Card />
        </ul>
      </section>
    </div>

  );
}

export default App;
