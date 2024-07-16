import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Topbrand() {


    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/flashsales?category=Top`)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                setData(error.data)
            })
    })

    return (
        <>
            <section className="topbrand">
                <div className="container">
                    <div className="title d-flex justify-content-between align-items-center">
                        <h3 className=' text-lg-start text-md-center text-sm-center text-center'>Top 100</h3>
                        <Link className=' text-black fs-5' to='/man'>view all</Link>
                    </div>
                    <div className="row justify-content-start align-items-center gy-4 my-3">
                        {
                            data && data.map((item) => (
                                <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="item border border-0 shadow-sm">
                                        <div className="image " style={{ width: "100%", height: "450px" }}>
                                            <img src={item.image} alt={item.title} className='img-fluid object-fit-cover w-100 h-100' />
                                        </div>
                                        <div className="content p-2 py-3 ">
                                            <h5 className=' short fs-6' >{item.title}</h5>
                                            <p className=''>{item.text}</p>
                                            <div className=" d-flex justify-content-start align-content-center">
                                                <span className='  fw-bolder text-danger'>${item.newprice}</span>
                                                <span className=' fw-lighte text-secondary mx-4'>${item.offprice}</span>
                                                <span className=' fw-medium text-danger'>{item.offer}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Topbrand