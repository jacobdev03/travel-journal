import NavBar from "./components/NavBar";
import Data from "../Data";
import Card from "./components/Card";

function App() {
  const cards = Data.map((card) => <Card key={card.id} {...card} />);
  return (
    <div className="App">
      <NavBar />
      <section>{cards}</section>
    </div>
  );
}

export default App;
