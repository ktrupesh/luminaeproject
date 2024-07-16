import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function Sales() {


    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/flashsales?category=Sales`)
            .then((response) => {
                setData(response.data);
            })
    })

    return (
        <>
            <section className="sales py-5">
                <div className="container">
                    <div className="row justify-content-start align-items-center gy-3">
                        {
                            data && data.map((item) => (
                                <div className="col-md-6">
                                    <div className="col-md-12">
                                        <div className="row justify-content-center">
                                            <div className="col-6 m-0 p-0">
                                                <div className="content text-white text-center p-2 pt-5 h-100">
                                                    <h3 className=' fw-bold fs-1'>{item.title}</h3>
                                                    <p className='  fs-5 fw-bolde fs-3'>{item.text}</p>
                                                    <Link to='' className=' text-white fw-bolder text-decoration-underline'>Exlopre all Category</Link>
                                                </div>
                                            </div>
                                            <div className="col-6 m-0 p-0">
                                                <div className="image">
                                                    <img src={item.image} alt={item.title} className=' img-fluid w-100 h-100' />
                                                </div>
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
    )
}

export default Sales