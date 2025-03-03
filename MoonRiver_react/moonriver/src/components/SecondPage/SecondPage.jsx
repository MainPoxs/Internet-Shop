import { Children } from "react";
import "./SecondPage.css";
import ProductCategory from "../ProductCategory/ProductCategory";

function SecondPage({ children }) {
  return <div className="secondPage">{children}</div>;
}

export default SecondPage;
