import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  useParams,
  Route,
  Link,
} from "react-router-dom";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ProductCategory from "./components/ProductCategory/ProductCategory";
import LinkProducts from "./components/LinkProducts/LinkProducts";
import CarouselProducts from "./components/CarouselProducts/CarouselProducts";
import LinkCatalog from "./components/LinkCatalog/LinkCatalog";
import FPRightPanel from "./layouts/FPRightPanel/FPRightPanel";
import FPLeftPanel from "./layouts/FPLeftPanel/FPLeftPanel";
import Products from "./components/Products/Products";
import Details from "./components/Details/Details";
import FilterMen from "./components/FilterMen/FilterMen";
import FilterWoman from "./components/FilterWoman/FilterWoman";
import Card from "./components/Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Container from "./components/Container/Container";

import Menu from "./components/Menu/Menu";
import Button from "./components/Button/Button";

function App() {
  const gender = [
    {
      nameCategory: "Для мужчин",
      photoBG: "./image/photoMen.svg",
      path: "/filterMen",
    },
    {
      nameCategory: "Для женщин",
      photoBG: "./image/photoWoman.svg",
      path: "/filterWoman",
    },
  ];
  const listProducts = [
    { photo: "./image/photo1.svg" },
    { photo: "./image/photo2.svg" },
    { photo: "./image/photo3.svg" },
    { photo: "./image/photo4.svg" },
    { photo: "./image/photo5.svg" },
    { photo: "./image/photo1.svg" },
    { photo: "./image/photo2.svg" },
    { photo: "./image/photo3.svg" },
    { photo: "./image/photo4.svg" },
    { photo: "./image/photo5.svg" },
    { photo: "./image/photo1.svg" },
    { photo: "./image/photo2.svg" },
    { photo: "./image/photo3.svg" },
    { photo: "./image/photo4.svg" },
    { photo: "./image/photo5.svg" },
  ];

  return (
    <div className="app">
      <div className="app-header">
        <img className="logo" src="logoNavMenu.svg" alt="логотип" />
      </div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <details>
                  <summary>
                    <Button />
                  </summary>
                  <Menu />
                </details>
                <FirstPage>
                  <FPLeftPanel>
                    <LinkProducts>
                      <LinkCatalog />
                    </LinkProducts>
                  </FPLeftPanel>
                  <FPRightPanel></FPRightPanel>
                </FirstPage>
                <SecondPage>
                  {gender.map((item, index) => (
                    <ProductCategory
                      key={index}
                      nameCategory={item.nameCategory}
                      photoBG={item.photoBG}
                      style={{ backgroundImage: `url(${item.photoBG})` }}
                      path={item.path}
                    ></ProductCategory>
                  ))}
                </SecondPage>
                <CarouselProducts>
                  {listProducts.map((item) => (
                    <img src={item.photo} alt="картинка" />
                  ))}
                </CarouselProducts>
              </Container>
            }
          />
          <Route path="/" element={<Container />} />
          <Route path="/catalog" element={<Products />} />
          <Route path="/catalog/:id" element={<Details />} />
          <Route path="/filterMen" element={<FilterMen />} />
          <Route path="/filterWoman" element={<FilterWoman />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </Router>
      <div className="footer">
        <div className="footer-logo">
          <img src="logoNavMenu.svg" alt="" />
        </div>
        <a
          target="blanck"
          href="https://трудкрут.рф/doc/Politika_konfidentcialnosti_personalnykh_dannykh.docx"
        >
          политика конфиденциальности
        </a>
        <div className="footer-info">ТЕЛЕФОН ГОРЯЧЕЙ ЛИНИИ +7 800 456 456</div>
      </div>
    </div>
  );
}
export default App;
