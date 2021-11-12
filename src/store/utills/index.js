export const createAction =
  (actionType) =>
  (values, cb = () => {}, errorCb = () => {}) => ({
    type: actionType,
    payload: values,
    cb,
    errorCb,
  });

export const createConstant = (name) => ({
  REQUEST: `${name}_START`,
  SUCCESS: `${name}_SUCCESS`,
  FAILURE: `${name}_FAIL`,
});
