import { useState, useEffect } from "react";
import axios from "axios";

export const ProductsList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProduct(response.data);
  };

  return (
    <div>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Prices</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product , index) => (
            <tr>
              <td>{index + 1} </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <button className="button is-small is-info">Edit</button>
                <button className="button is-small is-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
