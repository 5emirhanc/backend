import { useState } from "react";

export const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
      <form>
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
