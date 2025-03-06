import "./CarouselProducts.css";

function CarouselProducts({ children, photo }) {
  return (
    <div className="carouselProducts">
      <h3>Мы в социальных сетях</h3>
      <div className="carousel">
        {children}
        {photo}
      </div>
    </div>
  );
}
export default CarouselProducts;
