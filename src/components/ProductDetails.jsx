import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

function ProductDetails() {
    const [data, setData] = useState({});
    const [rating, setRating] = useState(0); 
    const [showSidebar, setShowSidebar] = useState(false);
    const [cartCount, setCartCount] = useState(0); // Add this state to store the cart count
    const { id } = useParams();
    const navigate = useNavigate();

    const images = useRef(null);
    const image = useRef("");
    const title = useRef("");
    const text = useRef("");
    const offprice = useRef("");
    const newprice = useRef("");
    const offer = useRef("");
    const company = useRef("");
    const size = useRef("");
    const description = useRef("");

    useEffect(() => {
        axios.get(`http://localhost:4000/woman/${id}`)
        .then((response) => {
                setData(response.data);
                images.current.src = response.data.image;
                image.current.value = response.data.image;
                title.current.value = response.data.title;
                text.current.value = response.data.text;
                offprice.current.value = response.data.offprice;
                newprice.current.value = response.data.newprice;
                offer.current.value = response.data.offer;
                size.current.value = response.data.size;
                company.current.value = response.data.company;
                description.current.value = response.data.description;
            });
    }, [id]);

    const addFormHandler = (e) => {
        e.preventDefault();

        const insert = {
            image: image.current.value,
            title: title.current.value,
            offprice: offprice.current.value,
            text: text.current.value,
            newprice: newprice.current.value,
            offer: offer.current.value,
            company: company.current.value,
            size: size.current.value,
            description: description.current.value,
            rating: rating, 
        };

        axios.post(`http://localhost:4000/cart`, insert)
        .then((response) => {
            setData(response.data);
            setShowSidebar(true);
            setCartCount(cartCount + 1); // Increment the cart count
        })
        .catch((error) => {
            setData(error.data);
        });
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleSidebarClick = () => {
        setShowSidebar(false);
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <form onSubmit={addFormHandler}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="image">
                                        <img src={data.image} ref={images} alt={data.title} className=' img-fluid' />
                                        <input type="hidden" ref={image} />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="content">
                                        <div className="input-group">
                                            <input type="text" ref={title} className='border border-0 fs-2' readOnly value={data.title} />
                                        </div>
                                        <div className="input-group">
                                            <input type="text" ref={text} className='border border-0 form-control fs-6 w-100' readOnly value={data.text} />
                                        </div>
                                        <div className="input-group">
                                            {"Rs. "}
                                            <input type="text" ref={newprice} className='border border-0' readOnly value={data.newprice} />
                                        </div>
                                        <div className="input-group">
                                            {"Rs. "}
                                            <input type="text" ref={offprice} className='border border-0 w-auto text-decoration-line-through' readOnly value={data.offprice} />
                                        </div>
                                        <div className="input-group">
                                            <input type="text" ref={offer} className='border border-0' style={{ width: "30px" }} readOnly value={data.offer} />
                                            {" %"}
                                        </div>
                                        <div className="input-group">
                                            <textarea ref={description} className='my-2 text-black' style={{ border: "none", width: "100%", height: "auto" }} readOnly value={data.description}></textarea>
                                        </div>
                                        <div className="rating mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    color={i < rating ? "gold" : "gray"}
                                                    onClick={() => handleRatingChange(i + 1)}
                                                    className=' me-2'
                                                />
                                            ))}
                                        </div>
<button type='submit' className='btn btn-warning text-white'>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {showSidebar && (
                <div className="sidebar" style={{ zIndex : "10" }}>
                    <div className="sidebar-content">
                        <h2>Product Details</h2>
                        <p className=' text-center'><img src={data.image} alt="" className=' img-fluid' /> </p>
                        <p> {data.title}</p>
                        <p>{data.text}</p>
                        <p>Rs. {data.newprice}</p>
                        <p className=' text-danger fw-bolder text-decoration-line-through'>Rs. {data.offprice}</p>
                        <p className=''><span className=' fs-5 fw-bolder'> Off : </span> {data.offer} %</p>
                        <p>{data.company}</p>
                        <p><span className=' fs-5 fw-bolder'>Size : </span> {data.size}</p>
                        <span className=' fs-6 fw-bold' >This Item About</span>
                        <p className=' mt-3'>{data.description}</p>
                        <p>Rating: {rating} / 5</p>
                    </div>
                    <button className="close-btn" onClick={handleSidebarClick}>Close</button>
                </div>
            )}
            
            {/* Display the cart count in the navbar */}
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to='/cart'>Cart ({cartCount})</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default ProductDetails;