import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Trending() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/flashsales?category=Trending`).then((response) => {
            setData(response.data);
        });
    }, []);

    return (
        <>
            <section className="trending">
                <div className="container">
                    <div className="title d-flex justify-content-between align-items-center">
                        <h3 className='text-lg-start text-md-center text-sm-center text-center'>Trending must-haves</h3>
                        <Link to='/woman' className=' text-black'>View all</Link>
                    </div>
                    <div className="row justify-content-center align-items-center gy-3 my-3">
                        {data && data.map((item) => (
                            <div key={item.id} className="col-lg-4 col-md-6">
                                <div className="item border border-0 ">
                                    <div className="image " style={{ width: "100%", height: "450px"}}>
                                        <img src={item.image} alt={item.title} className='img-fluid object-fit-cover w-100 h-100' />
                                    </div>
                                    <div className="content p-2 py-3 text-white">
                                        <div className="row justify-content-center align-items-center">
                                            <div className="col-6">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="content">
                                                            <h5 className='fs-6'>{item.title}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="content">
                                                            <p className=' m-0'>{item.text}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="content text-end">
                                                    <button className=' rounded-3 bg-transparent text-white p-2 border border-2 border-white'>
                                                        ${item.price}{" "}
                                                        <Link to='/woman' className=' text-white'>Shop Now</Link>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Trending;
