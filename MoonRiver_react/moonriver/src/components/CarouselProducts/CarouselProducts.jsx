import { useState, useEffect } from "react";
import "./CarouselProducts.css";

function CarouselProducts({ children, photo }) {
  const [index, setIndex] = useState(0);
  const [list, setList] = useState([]);

  const fun = () => {
    if (index < 5) {
      setIndex((s) => s + 1);
    } else {
      setIndex((s) => (s = 0));
    }
  };
  return (
    <div className="carouselProducts">
      <h3 className="carousel-title">Мы в социальных сетях</h3>

      {setInterval(() => {
        fun();
      }, 4000)}

      <div
        className="carousel"
        style={{ transform: `translateX(${index * 50}px)` }}
      >
        {children}
        {photo}
      </div>
      <div className="carousel-footer">
        <a className="instagram" href="https://vk.com/" target="_blank">
          <img src="./image/vk.svg" />
        </a>
        <div className="arrow">
          <button
            className="arrow-next"
            onClick={() => {
              setIndex((s) => s - 1);
            }}
          />
          <button
            className="arrow-prev"
            onClick={() => {
              setIndex((s) => s + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default CarouselProducts;
