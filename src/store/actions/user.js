import { createAction } from "store/utills/index.js";
import * as ctx from "../constants/user.js";

export const Log_In = createAction(ctx.LOG_IN.REQUEST);
export const initialize_App = createAction(ctx.INITIALIZE_APP.REQUEST);
export const Log_Out = createAction(ctx.LOG_OUT.REQUEST);

