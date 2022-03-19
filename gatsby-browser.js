import "./src/assets/css/styles.css"

// import React from 'react';
// import { ProductContextProvider } from './src/context/ProductContext';
// import { CartContextProvider } from './src/context/CartContext';

// export const wrapRootElement = ({ element }) => (
//   <ProductContextProvider>
//     <CartContextProvider>{element}</CartContextProvider>
//   </ProductContextProvider>
// );


import CombinedProvider from "./src/context/CombinedProvider"

export const wrapRootElement = CombinedProvider