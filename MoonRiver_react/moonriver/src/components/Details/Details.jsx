import "./Details.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  useParams,
  Route,
  Link,
} from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [jewelry, setJewelry] = useState(null);

  useEffect(() => {
    fetch(`https://67d1bc1090e0670699bb5941.mockapi.io/api/v1/jewelry/${id}`, {
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
    <div>
      <div className="catalog-head">
        <Link className="catalog-head__link" to="/">
          На главную
        </Link>
      </div>
      {loading && <p>Товары загружаются</p>}
      {!loading && (
        <div className="detail-jewelry">
          <div className="detail-prod detail-style">
            <img className="imgJewelry" src={jewelry?.image} alt="" />
          </div>
          <div className="detail-text detail-style">
            <h2 className="detail-product__head">{jewelry.title}</h2>
            <div className="detail-product__des">{jewelry.gender}</div>
            <div className="detail-product__des">{jewelry.desc}</div>
            <div className="price">{jewelry.price}</div>
            <Link className="detail-link" to="/card">
              <button className="button-card">В корзину</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
