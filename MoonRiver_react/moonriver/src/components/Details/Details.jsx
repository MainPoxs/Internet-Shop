import "./Details";
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
    <div className="detail-jewelry">
      <div className="catalog-head">
        <Link className="catalog-head__link" to="/">
          На главную
        </Link>
      </div>
      <div className="detail-jewelry">
        {loading && <p>Товары загружаются</p>}
        {!loading && (
          <div className="detail-prod">
            <img className="imgJewelry" src={jewelry?.image} alt="" />
            <h2 className="detail-product__head">{jewelry.title}</h2>
            <div>{jewelry.price}</div>
            <div>{jewelry.gender}</div>
            <div className="detail-product__description">{jewelry.desc}</div>
            <div>{jewelry.category}</div>
          </div>
        )}
        <div>
          <Link to="/card">
            <button className="button-card">В корзину</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
