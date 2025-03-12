import "./App.css";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ProductCategory from "./components/ProductCategory/ProductCategory";
import LinkProducts from "./components/LinkProducts/LinkProducts";
import CarouselProducts from "./components/CarouselProducts/CarouselProducts";
import Link from "./components/Link/Link";
import FPRightPanel from "./layouts/FPRightPanel/FPRightPanel";
import FPLeftPanel from "./layouts/FPLeftPanel/FPLeftPanel";
import Products from "./components/Products/Products";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function App() {
  const data = [
    {
      nameCategory: "Для мужчин",
      photoBG: "./image/photoMen.svg",
    },
    {
      nameCategory: "Для женщин",
      photoBG: "./image/photoWoman.svg",
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
      <FirstPage>
        <FPLeftPanel>
          <LinkProducts>
            <Link />
          </LinkProducts>
        </FPLeftPanel>
        <FPRightPanel />
      </FirstPage>
      <SecondPage>
        {data.map((item, index) => (
          <ProductCategory
            key={index}
            nameCategory={item.nameCategory}
            photoBG={item.photoBG}
            style={{ backgroundImage: `url(${item.photoBG})` }}
          ></ProductCategory>
        ))}
      </SecondPage>
      <CarouselProducts>
        {listProducts.map((item) => (
          <img src={item.photo} alt="картинка" />
        ))}
      </CarouselProducts>
      <Products />
    </div>
  );
}
export default App;
