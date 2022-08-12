import  {ProductsList} from "./components/ProductsList";

function App() {
  return (
    <div className="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <ProductsList></ProductsList>
        </div>
      </div>
    </div>
  );
}

export default App;
