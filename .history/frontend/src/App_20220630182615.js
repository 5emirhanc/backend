import  {ProductsList} from "./components/ProductsList";
import AddProduct from './components/AddProduct';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <ProductsList></ProductsList>
        </div>
      </div>
    </div>
  );
}

export default App;
