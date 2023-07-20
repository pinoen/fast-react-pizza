import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: []

  // initial example:
  // cart: [{
  //   pizzaId: 12,
  //   name: "Napolitana",
  //   quantity: 2,
  //   unitPrice: 16,
  //   totalPrice: 32
  // }]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload)
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find(item => item.pizzaId === action.payload)
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find(item => item.pizzaId === action.payload)
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice
    },
    clearCart(state) {
      state.cart = []
    }
  }
})

export const getCart = (store) => store.cart.cart

// Jonas code:
// export const getCurrentQuantityById = (id) => (store) => store.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0

// This code looks more understandable for me:
export const getCurrentQuantityById = (id) => (store) => {
  const pizza = store.cart.cart.find((item) => item.pizzaId === id);

  // If the pizza is found, return its quantity, otherwise, return 0.
  return pizza?.quantity ?? 0;
};

export const getTotalCartQuantity = (store) => store.cart.cart.reduce((acc, item) => acc + item.quantity, 0)

export const getTotalCartPrice = (store) => store.cart.cart.reduce((acc, item) => acc + item.unitPrice, 0)

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer