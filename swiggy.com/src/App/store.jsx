import { configureStore } from '@reduxjs/toolkit'
import Cart from '../Components/features/cart/cart'
export default configureStore({
  reducer: {
  cart:Cart
 },
})