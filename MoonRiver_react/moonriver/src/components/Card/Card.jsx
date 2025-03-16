import "./Card.css";
import {
  BrowserRouter as Router,
  Routes,
  useParams,
  Route,
  Link,
} from "react-router-dom";
function Card({ children }) {
  return (
    <div>
      {children}
      <div className="catalog-head">
        <Link className="catalog-head__link" to="/">
          На главную
        </Link>
      </div>
      <div className="card">Корзина находится в стадии разработки</div>
    </div>
  );
}

export default Card;
