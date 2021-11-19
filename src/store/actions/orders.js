import { createAction } from "store/utills/index.js";
import * as ctx from "../constants/orders";

export const getOrders = createAction(ctx.GET_ORDERS.REQUEST);

