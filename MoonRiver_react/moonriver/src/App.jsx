import './App.css'

import ProductCategory from './components/ProductCategory/ProductCategory'

function App() {
  const data = [
    { nameCategory: "Для мужчин"},
    { nameCategory: "Для женщин"}
  ]
   
  return (
    <>
      <div className="category">
        {
          data.map((item, index) => (
            <ProductCategory key={index} nameCategory={item.nameCategory}/>
          ))
        }

      </div>
    </>
  )
}
export default App
