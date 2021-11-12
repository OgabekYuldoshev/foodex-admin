import * as ctx from "../constants/user.js";

const userState = {
  user: {},
  loading: false,
  token: null,
  error: null,
};

const userReducer = (state = userState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ctx.INITIALIZE_APP.SUCCESS: {
      return {
        ...state,
        user: payload.user,
        token: payload.token,
      };
    }
    case ctx.LOG_IN.REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ctx.LOG_IN.SUCCESS: {
      return {
        ...state,
        loading: false,
        token: payload,
      };
    }
    case ctx.LOG_IN.FAILURE: {
      return {
        ...state,
        loading: false,
        error: "erro",
      };
    }
    case ctx.LOG_OUT.SUCCESS: {
      return { ...userState };
    }

    default:
      return state;
  }
};

export default userReducer;
