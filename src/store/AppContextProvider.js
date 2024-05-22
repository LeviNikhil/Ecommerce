import {React,useEffect,useState} from 'react'
import AppContext from './app-context'
import Products from '../components/Products/products';

const AppContextProvider = ({children}) => {

    const [showcart, setshowcart] = useState(false);
    const [cardItems, setcardItems] = useState([]);
    const [showAddProduct, setshowAddProduct] = useState(false);
    const [product, setproduct] = useState({});
    const [loading, setIsloading] = useState(false);
  
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

  //FireBase se product object ke form me aa rhe the isliye
  //jbki phle hmare inmemory product array ke form me aa rhe the isliye
  //Hme mapping ka trika bdalna hoga
  //Hm Keys ke trough iterate krenge na ki index ki trah

    const handleAddProduct = (productName) => {
      const product = {
         id: Object.keys(Products).length + 1,
         name: productName,
         image: "default_product.png"
       };
        sendProuctData(product);
        setproduct((state)=>{
            return {...state,[Object.keys(state).length+1]:product}
        });
        closeAddProduct();
      }
      
      //Ab refersh krne par added data nhi htega kyunki wo backend 
      //me ja chucka hain

      const sendProuctData = async (product) => {
        try {
            await fetch(
            "https://react-store-8d755-default-rtdb.firebaseio.com/products.json",
            {
                method: "POST",
                body: JSON.stringify(product),
            }
              );
        } catch (error) {
              console.log(error);
        }
      };
    
    //Useeffect ke function hmesha synchronous hota hain
    
    useEffect(()=>{
       const fetchProducts= async () =>{
       setIsloading(true);
        try {
            const response = await fetch(
            "https://react-store-8d755-default-rtdb.firebaseio.com/products.json");
            const data = await response.json();
            setproduct(data);
            setIsloading(false);
        } catch (err) {
            console.log(err);
            setIsloading(false);
        }
       }
       fetchProducts();
    },[]);

      //Sare Functions as value provide kra diya diye context ko
      //Instead of Passing Them as Props
      const appContextValue={
         showcart,
         showAddProduct,
         product,
         cardItems,
         openCart,
         loading,
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