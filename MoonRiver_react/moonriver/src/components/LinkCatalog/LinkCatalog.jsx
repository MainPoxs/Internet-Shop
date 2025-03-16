import "./LinkCatalog.css";
import { Link } from "react-router-dom";

function LinkCatalog({ children }) {
  return (
    <div className="link-block">
      {children}
      <h1 class="linkProducts-h1">HIGH JEWELRY</h1>
      <Link class="link" to="/catalog">
        <hr />
        Смотреть коллекцию
      </Link>
    </div>
  );
}

export default LinkCatalog;
