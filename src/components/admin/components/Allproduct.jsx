import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import Sidebar from './Sidebar';

function Allproduct() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/flashsales`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setData(error.data);
            });
    }, []);

    return (
        <>
            <AdminHeader />
            <section className='p-0 m-0'>
                <div className="container-fluid p-0 m-0">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar />
                        </div>
                        <div className="col-md-10">
                            <div className="content p-2">
                                <div className="row justify-content-start align-items-center">
                                    {
                                        data && data.map((item, index) => {
                                            return (
                                                <div key={index} className="col-md-3">
                                                    <div className="item bg-white p-2">
                                                        <div className="image" style={{ width: "100%", height: "350px", objectFit: "cover" }}>
                                                            <img src={item.image} alt="" className='img-fluid w-100 h-100' />
                                                        </div>
                                                        <div className="content py-2">
                                                            <h5>{item.title}</h5>
                                                            <p>{item.text}</p>
                                                            <div className='d-flex justify-content-between align-items-center'>
                                                                <p className='m-0 text-danger'>$ {item.offprice}</p>
                                                                <p className='m-0'>$ {item.newprice}</p>
                                                                <span className='p-2 bg-danger text-white'>{item.offer} %</span>
                                                            </div>
                                                            <div className="button d-flex justify-content-between align-items-center my-3">
                                                                <button onClick={() => navigate(`/Admin/AdminEdit/${item.id}`)} className='btn btn-info p-2 border-0 px-4 text-white'>Edit</button>
                                                                <button onClick={() => navigate(`/Admin/AdminDelete/${item.id}`)} className='btn btn-danger p-2 px-4 border-0  text-white'>Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Allproduct;