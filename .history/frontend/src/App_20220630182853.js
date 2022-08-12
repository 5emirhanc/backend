import { ProductsList } from "./components/ProductsList";
import AddProduct from "./components/AddProduct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Switch>
              <Route excat path="/">
              <ProductsList />
              </Route>
            </Switch>
            <Switch>
              <Route path="/add">
                <AddProduct/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
