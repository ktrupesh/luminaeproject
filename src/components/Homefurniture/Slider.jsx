import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function FSlider() {

    const [slider , setSlider] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:4000/woman?name=slider`)
        .then((response) => {
            setSlider(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setSlider(error.data); 
            setLoading(false);
        } , [])
    })


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

    return (
        <>
            <section className='bg-light'>
                <div className="container  p-0 m-0">
                {loading ? (
                        <div className=' text-center'>
                            <h2 className=' text-center spinner-border'></h2>
                            <p>Loading...</p>
                        </div>
                    ) : (
                        <Slider {...settings}>
                            {slider && slider.map((item) => {
                                return (
                                    <div className="item p-1" key={item.id}>
                                        <div className="image" style={{ height: "300px" }}>
                                            <img src={item.image} alt={item.title} className='img-fluid w-100 h-100' />
                                        </div>
                                        <div className="content bg-white p-2">
                                            <h5>{item.title}</h5>
                                            <p style={{ textOverflow :"ellipsis" , textWrap : "nowrap" , overflow : "hidden" }}>{item.text}</p>
                                            <div className="price">
                                                <span className='fs-5'>₹{item.newprice}</span>
                                                <span className='text-decoration-line-through fs-6 ms-3'>₹{item.offprice}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    )}
                </div>
            </section>
        </>
    )
}

export default FSlider