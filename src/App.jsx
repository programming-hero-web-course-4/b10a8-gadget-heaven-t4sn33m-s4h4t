import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './routes/Routes';
import { createContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
export const CartContext = createContext();
export const WishlistContext = createContext();
export const IsCardContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCart, setIsCart] = useState(true);
  return (
    <div>

      <IsCardContext.Provider value={{ isCart, setIsCart }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <WishlistContext.Provider value={{ wishlist, setWishlist }}>
          <ToastContainer
    	position="top-center"
    	/>
            <RouterProvider router={Router} />
          </WishlistContext.Provider>
        </CartContext.Provider>
      </IsCardContext.Provider>
    </div>
  )
}

export default App
