import AddProduct from "./components/AddProduct/AddProduct";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/products";
import React from "react";
import AppContextProvider from "./store/AppContextProvider";
function App() {
  
  return (
    <AppContextProvider>
      <Header />
      <Products />
      <Cart/>
      <AddProduct/>
    </AppContextProvider>
  );
}

export default App;