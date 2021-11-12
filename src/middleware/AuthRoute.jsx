import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, useLocation } from "react-router-dom";
import { initialize_App } from "../store/actions/user";

const AuthRoute = (props) => {
  const location = useLocation();
  React.useEffect(() => {
    props.initialize_App();
  }, [location]);

  if (props.type === "new" && props.token)
    return <Redirect to="/admin/dashboard" />;
  else if (props.type === "private" && !props.token)
    return <Redirect to="/auth/login" />;

  return <Route {...props} />;
};

const mapStateToProps = (state) => ({
  token: state.user.token,
});
const mapStateToDispatch = (dispatch) => ({
  initialize_App: () => dispatch(initialize_App()),
});

export default connect(mapStateToProps, mapStateToDispatch)(AuthRoute);
