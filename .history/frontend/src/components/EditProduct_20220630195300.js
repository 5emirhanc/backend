import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/products',{
        title:title,
        price:price
    });
    navigate('/');
    
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
          <button className="button is-primary ">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;