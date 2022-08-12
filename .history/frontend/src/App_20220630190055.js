import { ProductsList } from "./components/ProductsList";
import AddProduct from "./components/AddProduct";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <ProductsList /> },
    { path: "/add", element: <AddProduct /> },
  ]);

  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
