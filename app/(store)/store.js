import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'


const useCart = create(
  persist(
    (set, get) => ({
      cart: [],
      product: {},
      openModal: false,
      setOpenModal: () => {
        set((state) => {
          return {
            ...state,
            openModal: !state.openModal
          }
        })
      },
      setProduct: (params) => {
        const { newProduct } = params
        set((state) => {
          return {
            ...state,
            product: newProduct
          }
        })
      },
      addItemToCart: (params) => {
        const { newItem } = params
        set((state) => {
          const newCart = [...state.cart, newItem]
          return {
            ...state,
            cart: newCart
          }
        })
      },
      removeItemFromCart: (params) => {
        const { itemIndex } = params
        set((state) => {
          const newCart = state.cart.filter((ele, eleIndex) => {
            console.log(itemIndex)
            return itemIndex !== eleIndex
          })
          return {
            ...state,
            cart: newCart
          }
        })
      },
      emptyCart: () => {
        set((state) => {
          const newCart = []
          return {
            ...state,
            cart: newCart
          }
        })
      }
    }),
    // persisting data
    {
      storage: createJSONStorage(() => localStorage)
    },
  )
)

export default useCart