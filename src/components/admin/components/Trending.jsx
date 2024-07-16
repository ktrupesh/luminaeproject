import React, { useState, useEffect } from 'react'
import axios from 'axios';


function AdminTrending() {

    const [mydata, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/FlashSales`).then((response) => {
            setData(response.data);
        })
    }, []);

    return (
        <>
            <section>
                <div className="container my-4">
                <h3 className=' text-lg-start text-md-center text-sm-cebter text-center'>Flash Sales</h3>
                    <div className="row justify-content-center align-items-center gy-3">
                        {mydata && mydata.map((item , index) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-md-4 col-sm-6" key={index.id}>
                                        <div className="item bg-white p-2">
                                            <div className="image" style={{ width : "100%" , height : "250px"}}>
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

export default AdminTrending