import {React,useState} from 'react'
import AppContext from './app-context'
import Products from '../components/Products/products';

import initialproducts from '../Data/products.json';

const AppContextProvider = ({children}) => {

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
      const product = {
         id: Products.length + 1,
         name: productName,
         image: "default_product.png"
       };
        setproduct((state)=>[...state, product])
        closeAddProduct();
      }

      //Sare Functions as value provide kra diya diye context ko
      //Instead of Passing Them as Props
      
      const appContextValue={
         showcart,
         showAddProduct,
         product,
         cardItems,
         openCart,
         closeCart,
         openAddProduct,
         closeAddProduct,
         handleAddProduct,
         handleAddtoCart,
         handleIncreaseQuantity,
         handleDecreaseQuantity,
      };


  return (
    <AppContext.Provider value={appContextValue}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider