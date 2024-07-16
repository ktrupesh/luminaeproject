import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


function FlashSales() {

    const [mydata, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/flashsales?category=Latest`).then((response) => {
            setData(response.data);
        })
    }, []);

    return (
        <>
            <section>
                <div className="container my-4">
                <div className='d-flex justify-content-between align-items-center'>
                    <h3 className=' text-lg-start text-md-center text-sm-cebter text-center'>Flash Sales</h3>
                    <Link to='/woman' className=' text-black'>View all</Link>
                </div>
                    <div className="row justify-content-center align-items-center gy-3 my-3">
                        {mydata && mydata.map((item , index) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-md-4 col-sm-6" key={index.id}>
                                        <div className="item bg-white p-2 shadow-sm rounded-3 position-relative overflow-hidden">
                                            <div className="image" style={{ width : "100%" , height : "350px" , objectFit : "cover"}}>
                                                <img src={item.image} alt="" className=' img-fluid w-100 h-100' />
                                            </div>
                                            <div className="content py-2">
                                                <h3>{item.title}</h3>
                                                <p>{item.text}</p>
                                                <div className=' d-flex justify-content-between align-items-center'>
                                                    <p className=' m-0 text-danger'>$ {item.offprice}</p>
                                                    <p className=' m-0'>$ {item.newprice}</p>
                                                    <span className=' p-2 bg-danger text-white'>{item.offer} %</span>
                                                </div>
                                            </div>
                                            <div className="item-hover text-center position-absolute w-100" style={{ height : "100%" }}>
                                                <div className="button">
                                                    <Link to='/furniture' className=' text-black btn btn-dark text-white'>Soping Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default FlashSales