import { createContext, useReducer } from "react";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";

export const FETCH_CART_REQUEST = 'FETCH_CART_REQUEST'
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS'
export const FETCH_CART_FAILURE = 'FETCH_CART_FAILURE'


export const fetchHome = () => {
  return (dispatch) => {
    dispatch(fetchRequest())
    dispatch(fetchSuccess())
    dispatch(fetchFailure())
  }
}


const CartContext = createContext({
  products: [],
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {}
});


export const fetchRequest = () => {
  return {
    type: FETCH_CART_REQUEST
  }
}

export const fetchSuccess = info => {
  return {
    type: FETCH_CART_SUCCESS,
    payload: info
  }
}

export const fetchFailure = error => {
  return {
    type: FETCH_CART_FAILURE,
    payload: error
  }
}
const initialState = {
    products: null
}

function CartProvider(props){
    const[state, dispatch] = useReducer(shopReducer, { cart: [] }, initialState);
    const addProductToCart = product => {
    setTimeout(() => {
      
      dispatch({ type: ADD_PRODUCT, product: product });
      }, 700);
    };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
      }, 700);
    };
    return(
        <CartContext.Provider
            value={{
              products: state.products,
              cart: state.cart,
              addProductToCart: addProductToCart,
              removeProductFromCart: removeProductFromCart
      }}
            {...props}
        />
    )
}
export  { CartContext, CartProvider }