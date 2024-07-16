import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FlashSales from './FlashSales';
import Review from './Review';
import Sales from './Sales';
import Store from './Store';
import Topbrand from './Topbrand';
import Trending from './Trending';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Home() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const Navigate = useNavigate();


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        Navigate('/login'); // redirect to login page if user is not logged in
      }
    });
  }, [auth , Navigate]);


  return (
    <>
        <section className='p-0 m-0'>
      {user? (
          <div className="container-fliud p-0 m-0">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="content slide-one p-0">
                    <div className=' d-flex justify-content-center align-items-center' style={{ height: "100vh" , backgroundImage : "url('./image/slide.jpg')"}}>
                      <div className="slide-content text-white z-1 text-center">
                        <h3 className=' fs-1'>Kimonos, Caftans & Pareos</h3>
                        <p className=' fs-5'>Poolside glam included From $4.99</p>
                        <div className="btn">
                          <Link to='' className=' fw-bolder text-white shop-btn'>Shop Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item " data-bs-interval="2000">
                  <div className="content slide-two p-0">
                    <div className=' d-flex justify-content-center align-items-center' style={{ height: "100vh" , backgroundImage : "url('./image/slide2.jpg')"}}>
                      <div className="slide-content text-white z-1 text-center">
                        <h3 className=' fs-1'>Beige coat Zara</h3>
                        <p className=' fs-5'>Cream-Brown-Formal</p>
                        <div className="btn">
                          <Link to='' className=' fw-bolder text-white shop-btn'>Shop Now</Link>
                        </div>
                      </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                  <div className="content slide-three">
                    <div className=' d-flex justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-start  container align-items-center' style={{ height: "100vh" , backgroundImage : "url('./image/slide3.jpg')"}}>
                      <div className="slide-content text-white z-1">
                        <h3 className=' fs-1'>Cool & Sexy Calvin Klein</h3>
                        <p className=' fs-5'>Dotted dress-Casual</p>
                        <div className="btn">
                          <Link to='' className=' fw-bolder text-white shop-btn'>Shop Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      ) : (
        <div className=" my-5">
          <div className="text-center">
            <h3>Please sign in to view products</h3>
            <Link to="/signin" className="btn btn-success rounded-0">Sign in with Email</Link>
          </div>
        </div>
      )}
        <FlashSales/>
        <Trending/>
        <Topbrand/>
        <Sales/>
        <Review/>
        <Store/>
        </section>
    </>
  );
}

export default Home;