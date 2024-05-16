import Modal from "../UI/Modal";
import "./AddProduct.css";
import {useState } from "react";
function AddProduct({showAddProduct,onCloseAddProduct,onAddProduct}){
    const [ProductName,setProductName]= useState("");
    function HandleSubmit(event){
       event.preventDefault();
       onAddProduct(ProductName);
    }
    
    const handleProductNameChange=(event) => {
       const enteredProductName = event.target.value;
       setProductName(enteredProductName);
    }

    return(
        <Modal show={showAddProduct} onclose={onCloseAddProduct} >
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