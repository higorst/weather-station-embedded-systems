import routesPath from "constants/routes";

import Home from "views/Home";

const views = {
  Home,
};

const routes = [
  {
    path: routesPath.home,
    component: views.Home,
    pageTitle: "Início",
  },
];

export default routes;
