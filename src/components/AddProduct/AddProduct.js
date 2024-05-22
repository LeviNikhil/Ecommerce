import AppContext from "../../store/app-context";
import Modal from "../UI/Modal";
import "./AddProduct.css";
import {useContext, useState } from "react";
function AddProduct(){
    const {showAddProduct,closeAddProduct,handleAddProduct}=useContext(AppContext);

    const [ProductName,setProductName]= useState("");
    function HandleSubmit(event){
       event.preventDefault();
       handleAddProduct(ProductName);
    }
    
    const handleProductNameChange=(event) => {
       const enteredProductName = event.target.value;
       setProductName(enteredProductName);
    }

    return(
        <Modal show={showAddProduct} onclose={closeAddProduct} >
            <div className="add-product-container">
                <div className="add-product-heading">Add Product</div>
                <form onSubmit={HandleSubmit} className="add-product-form">
                    <div className="form-label">Enter Product Name</div>
                    <input className="form-input" 
                      value={ProductName} 
                      onChange={handleProductNameChange}/>
                    <button type="submit"
                     className="yellow-button submit-button" 
                    >AddProduct</button>
                </form>
            </div>
        </Modal>
    )
}

export default AddProduct;