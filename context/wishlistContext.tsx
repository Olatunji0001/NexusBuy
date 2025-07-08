'use client'
import { createContext, ReactNode, useReducer, useContext, Dispatch } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  image: any;
  oldPrice: string;
  brand: string;
};

type WishlistState = {
  likedProducts: Product[];
};

type WishlistAction =
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: number }; // payload is product ID 

export const WishlistContext = createContext<{
  state: WishlistState;
  dispatch: Dispatch<WishlistAction>;
}>({
  state: { likedProducts: [] },
  dispatch: () => {}
});

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      // Check if product already exists
      //console.log('liking');
      if (state.likedProducts.some(product => product.id === action.payload.id)) {
        return state;
      }
      return {
        likedProducts: [...state.likedProducts, action.payload]
      };
    case 'REMOVE_FROM_WISHLIST':
      return {
        likedProducts: state.likedProducts.filter(product => product.id !== action.payload)
      };
    default:
      return state;
  }
};

export const WishlistContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(wishlistReducer, { likedProducts: [] });

  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistHook = () => useContext(WishlistContext);
 