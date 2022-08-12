import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";


export const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  let history = useHistory();
  const saveProduct = async (e) => {
    e.prventDefual();
    await axios.post('http://localhost:500/products',{
        title:title,
        price:price
    });
    history.push("/");
  }

  return (
    <div>
      <form onSubmit={ saveProduct}>
        <div className="field">
          <label className="label">Title</label>
          <input
            className="input"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div className="field">
          <label className="label">Price</label>
          <input
            className="input"
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>

        <div className="field">
          <button className="button is-primary ">Save</button>
        </div>
      </form>
    </div>
  );
};
