import { createSlice } from "@reduxjs/toolkit";
import { data } from "../component/trail";


const initialState = {
  countCart: 0,
  cartList: [...data],
  productAdd: [],
};

export const cartSlice = createSlice({
  name: "cart",

  initialState: initialState,

  reducers: {
    cartUpdate: (state, action) => {
      const { id, quantity } = action.payload;
     

      let updateQtySubtotal = state.cartList.map((el, i) => {
        if (el.id === id) {
          return {
            ...el,
            quantity: +quantity,
            subtotal: +quantity * el.price,
            // subtotal:el.subtotal+el.shipFee
          };
        } else {
          return el;
        }
      });

      state.cartList = updateQtySubtotal;
      // console.log(updateQtySubtotal);
    },

    cartAdd: (state, action) => {
      state.productAdd.push(action.payload);
    },
    increment: (state) => {
      state.countCart = state.countCart + 1;
    },
    decrement: (state) => {
      state.countCart = state.countCart - 1;
    },

    cartDelete: (state, action) => {
      const { id } = action.payload;

      console.log(id);
      let removedItem = state.cartList.filter((el, i) => {
        return el.id !== id;

        // if(el.id === id){
        //   state.cartList.splice(i,1)
        // }
      });

      state.cartList = removedItem;
    },
  },
});

export const { cartAdd, increment, decrement, cartUpdate, cartDelete } =
  cartSlice.actions;
export default cartSlice.reducer;