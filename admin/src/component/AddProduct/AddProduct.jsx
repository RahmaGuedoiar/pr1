import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import { add_product } from '../../Redux/Slices/ProductSlices';
import axios from 'axios';
const AddProduct = () => {
    const dispatch = useDispatch()
    const [productDetails, setProductDetails] = useState({
        name: '',
        image: '',
        category: 'women',
        new_price: '',
        old_price: ''

    })
    console.log(productDetails)


    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }


    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [res, setRes] = useState({});
    const handleSelectFile = (e) => setFile(e.target.files[0]);
    const handleUpload = async () => {
        try {
            setLoading(true);
            const data = new FormData();
            data.append("my_file", file);
            const res = await axios.post("/upload", data);

            // Update productDetails with uploaded image URL
            setProductDetails({ ...productDetails, image: res.data.url });

        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className='add-product'>
            <div className="addproduct-iemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here'></input>
            </div>
            <div className="addproduct-price">
                <div className="addproduct-iemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Type here'></input>
                </div>
                <div className="addproduct-iemfield">
                    <p> Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type here'></input>
                </div>

            </div>
            <div className="addproduct_itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
                    <option value='women'>women</option>
                    <option value='men'>men</option>
                    <option value='kid'>kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file" className="btn-grey">
                    {" "}
                    select file
                </label>
                {file && <center> {file.name}</center>}
                <input
                    id="file"
                    type="file"
                    onChange={handleSelectFile}
                    multiple={false}
                />

                {file && (
                    <>
                        <button onClick={handleUpload} className="btn-green">
                            {loading ? "uploading..." : "upload to cloudinary"}
                        </button>
                    </>
                )}
                {/* <label htmlFor='file-input'>
                    <img src={image?URL.createObjectURL(image):upload_area} alt='' className='addproduct-thumail-img'></img>
                </label>
                <input onChange={imageHandler}type='file' name='image' id='file-input' hidden></input> */}
            </div>
            <img src={res}></img>
          
              
                <button onClick={() => { dispatch(add_product(productDetails)) }} className='addproduct-btn'>Add</button>
        </div>
    )
}

export default AddProduct