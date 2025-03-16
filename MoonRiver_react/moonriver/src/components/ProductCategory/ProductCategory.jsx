import "./ProductCategory.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  useParams,
  Route,
  Link,
} from "react-router-dom";

function ProductCategory({ children, nameCategory, photoBG, path }) {
  return (
    <>
      <section
        className="ctg-MenWomen"
        style={{ backgroundImage: `url(${photoBG})` }}
      >
        {children}
        <Link to={path} className="ctg-link">
          <div>Перейти в раздел</div>
          <h2 className="style-text__menWoman">{nameCategory}</h2>
          <hr className="hr" />
        </Link>
      </section>
    </>
  );
}

export default ProductCategory;
