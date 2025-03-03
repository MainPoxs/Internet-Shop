import "./App.css";
import Header from "./components/Header/Header";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ProductCategory from "./components/ProductCategory/ProductCategory";
import LinkProducts from "./components/LinkProducts/LinkProducts";

function App() {
  const data = [
    {
      nameCategory: "Для мужчин",
    },
    {
      nameCategory: "Для женщин",
    },
  ];
  return (
    <div className="app">
      <FirstPage>
        <Header />
        <LinkProducts />
      </FirstPage>
      <SecondPage>
        {data.map((item, index) => (
          <ProductCategory key={index} nameCategory={item.nameCategory} />
        ))}
      </SecondPage>
    </div>
  );
}
export default App;
