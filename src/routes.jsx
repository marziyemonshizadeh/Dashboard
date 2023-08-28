import Home from "./pages/home/home";
import NewUser from "./pages/newUser/newUser";
import Products from "./pages/products/products";
import UsersList from "./pages/usersList/usersList";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newuser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
];
export default routes;
