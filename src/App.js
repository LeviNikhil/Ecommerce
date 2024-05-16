import AddProduct from "./components/AddProduct/AddProduct";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/products";
import React, { useState } from "react";
import initialproducts from "./Data/products.json";
function App() {
  const [showcart, setshowcart] = useState(false);
  const [cardItems, setcardItems] = useState([]);
  const [showAddProduct, setshowAddProduct] = useState(false);
  const [product, setproduct] = useState(initialproducts);

  const openCart = () => setshowcart(true);
  const closeCart = () => setshowcart(false);

  const openAddProduct = () => setshowAddProduct(true);
  const closeAddProduct = () => setshowAddProduct(false);

  const handleAddtoCart = (productId, productName, productImage) => {
    const productInCardIndex = cardItems.findIndex(
      (item) => item.id === productId
    );

    if (productInCardIndex == -1) {
      const cardItem = {
        id: productId,
        name: productName,
        image: productImage,
        quantity: 1,
      };
      setcardItems((state) => [...state, cardItem]);
    } else {
      const updatedCardItems = [...cardItems];
      updatedCardItems[productInCardIndex].quantity += 1;
      setcardItems(updatedCardItems);
    }
  };

  const handleIncreaseQuantity = (productId) => {
    const productInCardIndex = cardItems.findIndex(
      (item) => item.id === productId
    );
    const updatedCardItems = [...cardItems];
    updatedCardItems[productInCardIndex].quantity += 1;
    setcardItems(updatedCardItems);
  };

  const handleDecreaseQuantity = (productId) => {
    const productInCardIndex = cardItems.findIndex(
      (item) => item.id === productId
    );
    let updatedCardItems = [...cardItems];
    if (updatedCardItems[productInCardIndex].quantity == 1) {
      updatedCardItems = updatedCardItems.filter(
        (item, index) => index !== productInCardIndex
      );
    } else {
      updatedCardItems[productInCardIndex].quantity -= 1;
    }
    setcardItems(updatedCardItems);
  };

  const handleAddProduct = (productName) => {
    // console.log(productName);
    const product = {
       id: Products.length + 1,
       name: productName,
       image: "default_product.png"
     };
      setproduct((state)=>[...state, product])
      closeAddProduct();
    }

  return (
    <div>
      <Header openCart={openCart} openAddProduct={openAddProduct} />
      <Products Products={product} onAddtoCart={handleAddtoCart} />
      <Cart
        showcart={showcart}
        closeCart={closeCart}
        cardItems={cardItems}
        onIncQuantity={handleIncreaseQuantity}
        onDecQuantity={handleDecreaseQuantity}
      />
      <AddProduct
        showAddProduct={showAddProduct}
        onCloseAddProduct={closeAddProduct}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
}

export default App;
