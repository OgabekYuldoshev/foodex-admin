import * as ctx from "../constants/dellers";

const dellersState = {
  dellers: [],
  loading: false,
};

const dellersReducer = (state = dellersState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ctx.DELLERS_INFO.REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ctx.DELLERS_INFO.SUCCESS: {
      return {
        ...state,
        loading: false,
        dellers: payload,
      };
    }
    case ctx.DELLERS_INFO.FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default dellersReducer;
