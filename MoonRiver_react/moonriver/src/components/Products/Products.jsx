import { useState, useEffect } from "react";
import React from "react";
import "./Products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    fetch("https://67d1bc1090e0670699bb5941.mockapi.io/api/v1/jewelry", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setJewelry(data);
        setLoading(false);
      });
  }, []);

  return (
    <div catalog-jewelry>
      <h2 className="catalog-h2">Каталог товаров</h2>
      {loading && <p>Товары загружаются</p>}
      {!loading &&
        jewelry.map((product) => (
          <div className="catalog" key={product.id}>
            <div className="catalog-item">
              <h2>{product.title}</h2>
              <div className="catalog-item_image">
                <img className="imgJewelry" src={product?.image} alt="" />
              </div>
              <p>{product.desc}</p>
              <div>{product.price}</div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Products;
