// store.js
import create from 'zustand';

const useStore = create((set) => ({
  cart: [],
  // Add an item to the cart
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  // Increment the quantity of an item in the cart
  incrementItem: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  // Remove an item from the cart
  removeItem: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  // Empty the cart
  emptyCart: () => set(() => ({ cart: [] })),
  // Calculate the total cost of items in the cart
  calculateTotal: () =>
    set((state) => ({
      total: state.cart.reduce(
        (accumulator, item) => accumulator + item.price * item.quantity,
        0
      ),
    })),
}));

export default useStore;