import Modal from "../UI/Modal";
import "./AddProduct.css";
import { useRef } from "react";
function AddProduct({showAddProduct,onCloseAddProduct,onAddProduct}){
    const nameRef=useRef(null);
    function HandleSubmit(event){
       event.preventDefault();
       const nameValue = nameRef.current.value;
       onAddProduct(nameValue);
    }

    return(
        <Modal show={showAddProduct} onclose={onCloseAddProduct} >
            <div className="add-product-container">
                <div className="add-product-heading">Add Product</div>
                <form onSubmit={HandleSubmit} className="add-product-form">
                    <div className="form-label">Enter Product Name</div>
                    <input className="form-input" name="product-name" ref={nameRef}/>
                    <button type="submit"
                     className="yellow-button submit-button" 
                    >AddProduct</button>
                </form>
            </div>
        </Modal>
    )
}

export default AddProduct;