import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom'


function Pillow() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [slider, setSlider] = useState([]);
    const Navigate = useNavigate();

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay : true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    useEffect(() => {
        axios.get(`http://localhost:4000/woman?name=pillow`)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setData(error.data);
                setLoading(false);
            })
    })

    useEffect(() => {
        axios.get(`http://localhost:4000/woman?name=pslider`)
            .then((response) => {
                setSlider(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setSlider(error.data);
                setLoading(false);
            })
    })

    return (
        <>
            <section className=' py-0'>
                <div className="container">
                    <div className="title text-lg-start text-md-center text-sm-center text-center">
                        <h3>Pillow's</h3>
                    </div>
                    <div className="row justify-content-center align-items-center rx-3 gy-3">
                    {
                            loading ? (
                                <div className='text-center'>
                                    <h2 className='text-center spinner-border'></h2>
                                    <p>Loading...</p>
                                </div>
                            ) : (
                                <Slider {...settings} className=' bg-light p-2'>
                                    {slider && slider.map((item) => {
                                        return (
                                            <div className="item p-1 px-2" key={item.id}>
                                                <div className="image" style={{ height: "300px" }}>
                                                    <img src={item.image} alt={item.title} className='img-fluid w-100 h-100' />
                                                </div>
                                                <div className="content bg-white p-2">
                                                    <h5>{item.title}</h5>
                                                    <p className='m-0 ' style={{fontSize : "14px"}}>{item.text}</p>
                                                    <div className="price">
                                                        <span className='fs-5'>₹{item.newprice}</span>
                                                        <span className='text-decoration-line-through fs-6 ms-3'>₹{item.offprice}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            )
                        }
                    </div>
                    <div className="row justify-content-center align-items-center gx-3 gy-3 mt-5">
                        {data && data.map((item) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={item.id}>
                                    <div className="item p-1 border border-1">
                                        <div className="image" style={{ height: "300px" }}>
                                            <img src={item.image} alt={item.title} className='img-fluid w-100 h-100' />
                                        </div>
                                        <div className="content bg-white p-2">
                                            <h5>{item.title}</h5>
                                            <p style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }} className='m-0'>{item.text}</p>
                                            <div className="price">
                                                <span className='fs-5'>₹{item.newprice}</span>
                                                <span className='text-decoration-line-through fs-6 ms-3'>₹{item.offprice}</span>
                                            </div>
                                            <div className="button mt-4">
                                                <button type='button' className='btn btn-warning text-white' onClick={() => { Navigate(`/ProductDetails/${item.id}`) }} >About Product</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pillow