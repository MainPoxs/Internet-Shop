import "./FilterWoman";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";

function FilterWoman() {
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

  const gender = jewelry.filter((e) => e.gender === "Для женщин");
  return (
    <>
      <div className="catalog-head">
        <Link className="catalog-head__link" to="/">
          На главную
        </Link>
      </div>
      <div className="catalog-jewelry">
        {loading && <p>Товары загружаются</p>}
        {!loading &&
          gender.map((product) => (
            <div key={product.id}>
              <h2 className="catalog-h2">{product.title}</h2>
              <Link
                className="catalog-product__link"
                to={`/catalog/${product.id}`}
              >
                <div className="catalog-item_image">
                  <img className="imgJewelry" src={product?.image} alt="" />
                </div>
              </Link>
              <div className="catalog-price">{product.price}</div>
              <Link
                className="catalog-product__link"
                to={`/catalog/${product.id}`}
              >
                Подробнее
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
export default FilterWoman;
