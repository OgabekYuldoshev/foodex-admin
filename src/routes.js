import Dashboard from "views/Dashboard.js";
import Dellers from "views/Dellers.js";
import Icons from "views/Icons.js";

import Login from "views/Login.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";
import Orders from "views/Orders.js";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "tim-icons icon-chart-pie-36",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/dellers",
    name: "Dellers",
    icon: "tim-icons icon-badge",
    component: Dellers,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "tim-icons icon-bullet-list-67",
    component: Orders,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "tim-icons icon-single-02",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
  },
];
export default routes;
