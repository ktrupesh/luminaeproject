import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from 'react-slick/lib/slider'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Tv from './Tv'
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Electronic() {

  const [slider, setSlider] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const Navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        Navigate('/login'); // redirect to login page if user is not logged in
      }
    });
  }, [auth, Navigate]);


  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:4000/woman?name=electronic`)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setData(error.data);
          setLoading(false);
        })
    }
  }, [user])

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:4000/woman?name=eslider`)
        .then((response) => {
          setSlider(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setSlider(error.data);
          setLoading(false);
        })
    }
  }, [user])


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <section>
        {
          user ? (
            <div>
              <div className="container">
                {
                  loading ? (
                    <div className=' text-center'>
                      <h2 className=' text-center spinner-border'></h2>
                      <p>Loading...</p>
                    </div>
                  ) : (
                    <Slider {...settings}>
                      {slider && slider.map((item, index) => {
                        return (
                          <>
                            <div className=' item' key={index}>
                              <div className="image">
                                <img src={item.image} alt={item.title} className=' img-fluid' />
                              </div>
                            </div>
                          </>
                        )
                      })
                      }
                    </Slider>
                  )
                }
              </div>

              <div className="container mt-5">
                <div className="row">
                  {
                    loading ? (
                      <div className=' text-center my-3'>
                        <h4 className=' text-center spinner-border'></h4>
                        <p className=' fs-3'>Loading...</p>
                      </div>
                    ) : (

                      data && data.map((item, index) => {
                        return (
                          <>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 electronic" key={index}>
                              <div className="item">
                                <div className="image" style={{ width: "100%", height: "auto" }}>
                                  <img src={item.image} alt={item.title} className=' img-fluid w-100 object-fit-cover' />
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
            </div>
          ) : (
            <div className="container">
              <div className="my-5">
                <p> Please login to view products. </p>
              </div>
            </div>
          )
        }
      </section>
      <Tv />
    </>
  )
}

export default Electronic