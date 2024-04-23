import App from "./App";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "checkout", element: <Checkout />},
    ],
  },
];

export default routes;