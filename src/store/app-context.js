import { createContext } from "react";

const AppContext = createContext({
         showcart:false,
         showAddProduct:false,
         loading:false,
         product:[],
         cardItems:[],
         openCart: () => {},
         closeCart: () => {},
         openAddProduct: () => {},
         closeAddProduct: () => {},
         handleAddProduct: () => {},
         handleAddtoCart: () => {},
         handleIncreaseQuantity: () => {},
         handleDecreaseQuantity: () => {}
});

export default AppContext;