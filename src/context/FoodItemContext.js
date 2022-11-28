import React from 'react'

const FoodItemContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  removeCartItems: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
})
export default FoodItemContext
