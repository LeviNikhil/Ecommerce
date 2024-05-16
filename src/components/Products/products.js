import "./products.css";
//Map from productsdata

//Using props for destructuring and passing info
function Product({id,name,image,onAddtoCart})
{
    return(
        <div key={id} className="product">
        <img src={require(`../../assets/${image}`)} alt={name} />
        <div className="product-name">{name}</div>
        <button onClick={()=> onAddtoCart(id,name,image)}>Add to Cart</button>
        </div>
    )
}
function Products({Products,onAddtoCart})
{
    return(
    <div className="products-container">
        {Products.map((products) => (
          <Product key={products.id}
            id={products.id}
            name={products.name}
            image={products.image}
            onAddtoCart={onAddtoCart}
           />
        ))}
    </div>
);
   
}

export default Products;
