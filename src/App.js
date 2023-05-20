import Header from "./components/Header";
import Content from "./components/Content";
import data from "./data";
// import "./App.css";

function App() {
  const contentElement = data.map(function (item) {
    return <Content key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <Header />
      {contentElement}
    </div>
  );
}

export default App;
