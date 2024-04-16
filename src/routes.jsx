import App from "./App";
import Home from "./components/Home";
import Shop from "./components/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
    ],
  },
];

export default routes;