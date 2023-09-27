import Analytics from "./pages/analytics/analytics";
import Clock from "./pages/clock/clock";
import Home from "./pages/home/home";
import NewUser from "./pages/newUser/newUser";
import Product from "./pages/product/product";
import Products from "./pages/products/products";
import Sale from "./pages/sale/sale";
import UsersList from "./pages/usersList/usersList";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newuser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/analytics", element: <Analytics /> },
  { path: "/product/:productID", element: <Product /> },
  { path: "/sale", element: <Sale /> },
  { path: "/newuser", element: <NewUser /> },
  { path: "/clock", element: <Clock /> },
];
export default routes;
