import AppContext from "../../store/app-context";
import "./Header.css";
import { useContext } from "react";
//Want to make modal components reusable
//since we need it two times in add product and cart
function Header() {
  const {openCart,openAddProduct}=useContext(AppContext);

  return (
    <div className="header">
      <h1>My React Store</h1>
      <div>
        <button className="yellow-button" 
        onClick={openAddProduct}
        style={{marginRight : "20px"}}>
          Add Product
        </button>
        <button className="yellow-button" 
        onClick={openCart}>
          Cart
        </button>
      </div>
    </div>
  );
}

export default Header;
