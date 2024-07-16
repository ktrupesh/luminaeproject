import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Tv() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/woman?name=smartv`)
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setData(error.data);
            setLoading(false);
        })
    })

    const calculatediscound = (offprice, newprice) => {
        return Math.round(((offprice - newprice) / offprice) * 100);
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="row justify-content-center align-items-center gx-3 gy-3">
                        {
                            loading ? (
                                <div className=' text-center my-3'>
                                    <h4 className=' text-center spinner-border'></h4>
                                    <p className=' fs-3'>Loading...</p>
                                </div>
                            ) : (
                                data && data.map((item, index) => {
                                    const { id , image,  text, offprice, newprice } = item;
                                    return (
                                        <>
                                            <div className="col-lg-3 col-md-4 col-sm-6 py-2" key={index}>
                                                <div className="item">
                                                    <div className="image">
                                                        <img src={image} alt={text} className=' img-fluid w-100' />
                                                    </div>
                                                    <div className="conten">
                                                        <p onClick={() => { Navigate(`/ProductDetails/${id}`) }} style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" , cursor : "pointer" }}>{text}</p>
                                                        <div className="">
                                                            <span className="m-0 fs-5">M.R.P {""}{newprice}</span><br/>
                                                            <span>M.R.P </span>
                                                            <span className="m-0  text-danger-emphasis text-decoration-line-through">{" "}{offprice}</span>
                                                            <span className=' ms-3'>{" "}
                                                                {
                                                                    String(
                                                                        calculatediscound(offprice, newprice)
                                                                    ).padStart(2, "0")}
                                                                % off
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tv