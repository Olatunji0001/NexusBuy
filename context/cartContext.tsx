"use client";
import {
  createContext,
  useReducer,
  useContext,
  Dispatch,
  ReactNode,
} from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  image: any;
  oldPrice: string;
  brand: string;
};

type CartState = {
  addToCartProdt: Product[];
};

type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: number };

export const cartContext = createContext<{
  state: CartState;
  dispatch: Dispatch<CartAction>;
}>({
  state: { addToCartProdt: [] },
  dispatch: () => {},
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (
        state.addToCartProdt.some((product) => product.id === action.payload.id)
      ) {
        return state;
      }
      return {
        addToCartProdt: [...state.addToCartProdt, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        addToCartProdt: state.addToCartProdt.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const cartContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { addToCartProdt: [] })
  return (
      <cartContext.Provider value={{state, dispatch}}>
          {children}
      </cartContext.Provider>
  )
};

export const useAddToCartHook = () => useContext
(cartContext)

