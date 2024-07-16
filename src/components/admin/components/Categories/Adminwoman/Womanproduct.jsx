import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../Sidebar';
import AdminHeader from '../../AdminHeader';
import Swal from 'sweetalert2';
import { useParams , Link , useNavigate } from 'react-router-dom';
import { MdDeleteForever , MdModeEditOutline } from "react-icons/md";


function Womanproduct() {
    const [data, setData] = useState([]);
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4000/woman`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setData(error.data);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/woman/${id}`)
            .then(() => {
                Swal.fire({
                    title: "Success",
                    text: "Thanks for deleted your Products",
                    icon: "success"
                })
                // Update the state to remove the deleted item
                setData(data.filter(item => item.id !== id));
            })
    }


    return (
        <>
            <AdminHeader />
            <section className='p-0 m-0'>
                <div className="container-fluid p-0 m-0 overflow-hidden">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar />
                        </div>
                        <div className="col-md-10 m-0 p-0">
                            <div className="content my-2">
                            <div className="button my-4">
                                    <Link to='/Admin/Adminwoman' className=' text-black p-2 bg-light'>Add Product</Link>
                            </div>
                                    <div className="table-responsive">
                                        <table className='table table-striped table-bordered table-hover'>
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Image</th>
                                                    <th>Title</th>
                                                    <th>Text</th>
                                                    <th>Off Price</th>
                                                    <th>New Price</th>
                                                    <th>Company</th>
                                                    <th>Size</th>
                                                    <th>Description</th>
                                                    <th>Name</th>
                                                    <th>Category</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td><img src={item.image} alt={item.title} className='img-fluid' style={{ width: "100px" }} /></td>
                                                            <td>{item.title}</td>
                                                            <td>{item.text}</td>
                                                            <td>{item.offprice}</td>
                                                            <td>{item.newprice}</td>
                                                            <td>{item.company}</td>
                                                            <td>{item.size}</td>
                                                            <td>{item.description}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.category}</td>
                                                            <td>
                                                                <button className=' bg-transparent text-info fs-3 border-0' onClick={() => Navigate(`/Admin/womanedit/${item.id}`)}> <MdModeEditOutline/> </button>
                                                                <button className=' bg-transparent text-danger fs-3 border-0' onClick={() => handleDelete(item.id)}> <MdDeleteForever/> </button>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    );
}

export default Womanproduct;