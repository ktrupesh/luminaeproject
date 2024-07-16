import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import Sidebar from './Sidebar';
import Swal from 'sweetalert2';

function AdminEdit() {
    const [data, setData] = useState({
        image: "",
        title: "",
        text: "",
        offprice: "",
        newprice: "",
        offer: "",
        price: "",
        category: "",
        company : "",
        size : "",
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // Fetch data for flash sales
        axios.get(`http://localhost:4000/flashsales/${id}`)
            .then((response) => {
                setData(response.data); // Assuming response.data directly matches state structure
            })
            .catch((error) => {
                console.error('Error fetching flash sales data:', error);
            });
    
        // Fetch data for woman subcategory
        axios.get(`http://localhost:4000/womansubcategrie/${id}`)
            .then((response) => {
                const shoesdata = response.data[0]?.shoes || {}; // Assuming response structure, adjust as per your API response
                setData(prevData => ({ ...prevData, ...shoesdata }));
            })
            .catch((error) => {
                console.error('Error fetching woman subcategory data:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleUpdateProduct = (e) => {
        e.preventDefault();
    
        // Update flash sales data
        axios.put(`http://localhost:4000/flashsales/${id}`, data)
            .then(() => {
                Swal.fire({
                    title: "Success",
                    text: "Product updated successfully",
                    icon: "success"
                });
                navigate('/Admin/Allproduct');
            })
            .catch((error) => {
                console.error('Error updating flash sales product:', error);
            });
    
        // Update woman subcategory data
        axios.put(`http://localhost:4000/womansubcategrie/${id}`, data)
            .then(() => {
                Swal.fire({
                    title: "Success",
                    text: "Product updated successfully",
                    icon: "success"
                });
            })
            .catch((error) => {
                console.error('Error updating woman subcategory product:', error);
            });
    };
    

    return (
        <>
            <AdminHeader />
            <section className='m-0 p-0'>
                <div className="container-fluid p-0 m-0">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar />
                        </div>
                        <div className="col-md-10">
                            <form>
                                <div className="row justify-content-start align-items-center">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="py-2" htmlFor="image">Image</label>
                                            <input
                                                type="text"
                                                name="image"
                                                value={data.image}
                                                onChange={handleChange}
                                                className="w-100 form-control p-2"
                                                id="image"
                                                placeholder="Enter Product Image Url"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="py-2" htmlFor="title">Title</label>
                                            <input
                                                type="text"
                                                name="title"
                                                value={data.title}
                                                onChange={handleChange}
                                                className="w-100 form-control p-2"
                                                id="title"
                                                placeholder="Enter Product Title"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="py-2" htmlFor="text">Text</label>
                                            <input
                                                type="text"
                                                name="text"
                                                value={data.text}
                                                onChange={handleChange}
                                                className="w-100 form-control p-2"
                                                id="text"
                                                placeholder="Enter Product Text"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="py-2" htmlFor="offprice">Offprice</label>
                                            <input
                                                type="number"
                                                name="offprice"
                                                value={data.offprice}
                                                onChange={handleChange}
                                                className="w-100 form-control p-2"
                                                id="offprice"
                                                placeholder="Enter Product Off Price"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="py-2" htmlFor="newprice">Newprice</label>
                                            <input
                                                type="number"
                                                name="newprice"
                                                value={data.newprice}
                                                onChange={handleChange}
                                                className="w-100 form-control p-2"
                                                id="newprice"
                                                placeholder="Enter Product New Price"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="py-2" htmlFor="category">Categories</label>
                                            <input
                                                type="text"
                                                name="category"
                                                value={data.category}
                                                onChange={handleChange}
                                                className="w-100 form-control p-2"
                                                id="category"
                                                placeholder="Enter Product Categories"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="py-2" htmlFor="category">Company</label>
                                            <input
                                                type="text"
                                                name="category"
                                                value={data.company}
                                                onChange={handleChange}
                                                className="w-100 form-control p-2"
                                                id="category"
                                                placeholder="Enter Product Categories"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="py-2" htmlFor="category">Size</label>
                                            <input
                                                type="text"
                                                name="category"
                                                value={data.size}
                                                onChange={handleChange}
                                                className="w-100 form-control p-2"
                                                id="category"
                                                placeholder="Enter Product Categories"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="py-2" htmlFor="offer">Offer</label>
                                            <input
                                                type="number"
                                                name="offer"
                                                value={data.offer}
                                                onChange={handleChange}
                                                className="w-100 form-control p-2"
                                                id="offer"
                                                placeholder="Enter Product Offer"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="py-2" htmlFor="price">Amount</label>
                                            <input
                                                type="number"
                                                name="price"
                                                value={data.price}
                                                onChange={handleChange}
                                                className="w-100 form-control p-2"
                                                id="price"
                                                placeholder="Enter Product Amount"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12 my-5">
                                        <input
                                            type="submit"
                                            value="Update"
                                            className="btn btn-success p-2"
                                            onClick={handleUpdateProduct}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdminEdit;
