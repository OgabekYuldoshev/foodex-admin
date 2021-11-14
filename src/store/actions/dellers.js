import { createAction } from "store/utills/index.js";
import * as ctx from "../constants/dellers";

export const getDellers = createAction(ctx.DELLERS_INFO.REQUEST);

