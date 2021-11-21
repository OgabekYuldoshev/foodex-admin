import { createAction } from "store/utills/index.js";
import * as ctx from "../constants/dellers";

export const getDellers = createAction(ctx.DELLERS_INFO.REQUEST);
export const deleteDeller = createAction(ctx.DELETE_DELLER.REQUEST);
export const updateAccess = createAction(ctx.UPDATE_ACCESS.REQUEST);
