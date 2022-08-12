import { useState ,useEffect} from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


export const EditProduct = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/products/${id}`,{
      email:email,
      fullname:fullname
    });
    navigate('/');
    
  }

    useEffect(()=>{
        getProductById();
    },);

  const getProductById = async () =>{
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setEmail(response.data.email);
    setFullname(response.data.fullname);

}

  return (
    <div>
      <form onSubmit={ updateProduct}>
        <div className="field">
          <label className="label">Title</label>
          <input
            className="input"
            type="text"
            placeholder="Title"
            value={email[1]}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="field">
          <label className="label">Price</label>
          <input
            className="input"
            type="text"
            placeholder="Price"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
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