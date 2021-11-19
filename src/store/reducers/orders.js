import * as ctx from "../constants/orders";

const ordersState = {
  orders: [],
  loading: false,
};

const ordersReducer = (state = ordersState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ctx.GET_ORDERS.REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ctx.GET_ORDERS.SUCCESS: {
      return {
        ...state,
        loading: false,
        orders: payload,
      };
    }
    case ctx.GET_ORDERS.FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default ordersReducer;
