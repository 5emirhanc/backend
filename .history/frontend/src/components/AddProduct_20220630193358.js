import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // import useNavigate()


export const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate(); // make const
  
  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:500/products',{
        title:title,
        price:price
    });
    navigate.push('/')
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
