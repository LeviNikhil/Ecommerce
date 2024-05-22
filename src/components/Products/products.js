import { useContext } from "react";
import "./products.css";
import AppContext from "../../store/app-context";
import Loader from "../UI/Loader";
//Map from productsdata

//Using props for destructuring and passing info
function Product({id,name,image})
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
    const {product,loading}=useContext(AppContext);
    if(loading){
        return <Loader/>;
    }
    return(
    <div className="products-container">
        {Object.keys(product).map((k)=>(
            <Product
                key={k}
                id={product[k].id}
                name={product[k].name}
                image={product[k].image}
            />
        ))}
    </div>
);
   
}

export default Products;
