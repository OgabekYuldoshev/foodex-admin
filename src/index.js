import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store";
import AuthRoute from "./middleware/AuthRoute";

import AdminLayout from "layouts/Admin/Admin.js";
import AuthLayout from "layouts/Auth/Auth.js";
import Error from "views/404";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

ReactDOM.render(
  <Provider store={store}>
    <BackgroundColorWrapper>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <BrowserRouter>
        <Switch>
          <AuthRoute
            type="private"
            path="/admin"
            render={(props) => <AdminLayout {...props} />}
          />
          <AuthRoute
            type="new"
            path="/auth"
            render={(props) => <AuthLayout {...props} />}
          />
          <Redirect from="/" to="/admin/dashboard" />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </Provider>,
  document.getElementById("root")
);
