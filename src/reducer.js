export const initialState = {
  basket: [],
  user: null,
};



const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
        console.log(action.item.id);
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      console.log(index);
      let newBasket = [...state.basket];
      newBasket.splice(index, 1);
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
