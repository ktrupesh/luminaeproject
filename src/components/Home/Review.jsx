import React from 'react'



function Review() {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <>
            <section className='review'>
                <div className="container">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <div className="content row justify-content-center align-items-center">
                                    <div className="col-6">
                                        <div className="item">
                                            <h1>MagSafe</h1>
                                            <p className=' fw-medium fs-4'>Snap on a magnetic case, wallet, or both. And get faster wireless charging.</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="image">
                                            <img src="./image/Iphone.png" alt="" className=' img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item " data-bs-interval="2000">
                            <div className="content row justify-content-center align-items-center">
                                    <div className="col-6">
                                        <div className="item">
                                            <h1>MagSafe</h1>
                                            <p className=' fw-medium fs-4'>Snap on a magnetic case, wallet, or both. And get faster wireless charging.</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="image">
                                            <img src="./image/Iphone.png" alt="" className=' img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                            <div className="content row justify-content-center align-items-center">
                                    <div className="col-6">
                                        <div className="item">
                                            <h1>MagSafe</h1>
                                            <p className=' fw-medium fs-4'>Snap on a magnetic case, wallet, or both. And get faster wireless charging.</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="image">
                                            <img src="./image/Iphone.png" alt="" className=' img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Review