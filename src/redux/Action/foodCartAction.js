import { type } from "@testing-library/user-event/dist/type";

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_ORDER_ADD = 'SET_ORDER_INFO'
export const DECREASE_QUANTITY ='DECREASE_QUANTITY'
export const SET_CARD_DETAILS = 'SET_CARD_DETAILS'

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
});

export const decreaseQuantity = (productId) => {
    return {
      type: "DECREASE_QUANTITY",
      payload: productId,
    };
  };

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId
});

export const updateQuantity = (productId, quantity) =>({
    type: UPDATE_QUANTITY,
    payload:{ productId, quantity}
});
export const setUserInfo = (userInfo) => ({
    type: 'SET_USER_INFO',
    payload: userInfo
});
export const setOrderAdd = (orderAdd) => ({
    type: 'SET_ORDER_ADD',
    payload: orderAdd
});
export const setCardDetails =(cardDetails)=>({
    type: 'SET_CARD_DETAILS',
    payload: cardDetails
});
