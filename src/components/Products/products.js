import { useContext } from "react";
import "./products.css";
import AppContext from "../../store/app-context";
//Map from productsdata

//Using props for destructuring and passing info
function Product({id,name,image,onAddtoCart})
{
    const {handleAddtoCart}=useContext(AppContext);
    return(
        <div key={id} className="product">
        <img src={require(`../../assets/${image}`)} alt={name} />
        <div className="product-name">{name}</div>
        <button onClick={()=> handleAddtoCart(id,name,image)}>Add to Cart</button>
        </div>
    )
}
function Products()
{
    const {product}=useContext(AppContext);
    return(
    <div className="products-container">
        {product.map((products) => (
          <Product key={products.id}
            id={products.id}
            name={products.name}
            image={products.image}
           />
        ))}
    </div>
);
   
}

export default Products;
