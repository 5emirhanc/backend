import  {ProductsList} from "./components/ProductsList";

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
