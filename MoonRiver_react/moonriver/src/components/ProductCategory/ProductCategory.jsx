import "./ProductCategory.css";

function ProductCategory({ children, nameCategory, photoBG }) {
  return (
    <section
      className="ctg-MenWomen"
      style={{ backgroundImage: `url(${photoBG})` }}
    >
      {children}
      <a href="#" class="ctg-link">
        <div>Перейти в раздел</div>
        <h2 className="style-text__menWoman">{nameCategory}</h2>
        <hr className="hr" />
      </a>
    </section>
  );
}

export default ProductCategory;
