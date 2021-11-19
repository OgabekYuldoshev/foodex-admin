import userReducer from "./reducers/user.js";
import dellersReducer from "./reducers/dellers.js";
import ordersReducer from "./reducers/orders.js";

const allReducers = {
  user: userReducer,
  dellers: dellersReducer,
  orders: ordersReducer,
};

export default allReducers;
