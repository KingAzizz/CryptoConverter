import CurrencyConverter from "./component/CurrencyConverter";
import NewsFeed from "./component/NewsFeed";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <CurrencyConverter />
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;
