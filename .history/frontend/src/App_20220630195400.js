import { ProductsList } from "./components/ProductsList";
import { AddProduct } from "./components/AddProduct";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import EditProduct from "./components/EditProduct";
const App = () => {
  const routes = useRoutes([
    { path: "/", element: <ProductsList /> },
    { path: "/add", element: <AddProduct /> },
    { path: "/edit/:id", element: <EditProduct /> },
  ]);

  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className = "column is-half is-offset-one-quarter">
            <App />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AppWrapper;
