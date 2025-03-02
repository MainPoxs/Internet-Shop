import './ProductCategory.css';

function ProductCategory({nameCategory}){
    return (      
            <section class="ctg-MenWomen">
                <a href="#" class="ctg-link">
                    <div>Перейти в раздел</div>
                    <h2 class="style-text__menWoman">{nameCategory}</h2>                   
                </a>
            </section>            
    )
}

export default ProductCategory