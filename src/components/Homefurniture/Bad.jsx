import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function Bad() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:4000/woman?name=bed`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setData(error.data);
        setLoading(false);
      })
  }, [])

  const BedItem = [
    {
      id: 1,
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/Affordabilityleavers/NCE_450x130._CB439312699_.jpg"
    },
    {
      id: 2,
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/Affordabilityleavers/ScheduledDelivery_450x130._CB439312699_.jpg"
    },
    {
      id: 3,
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/Affordabilityleavers/Scheduled_installation_450x130._CB439312699_.jpg"
    },
    {
      id: 4,
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/Affordabilityleavers/TopRatedProducts_450x130.jpg"
    },
  ]

  return (
    <>
      <section>
        <div className="container p-0 m-0">
          <div className="content">
            <div className="item">
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/Beds/PC/Beds_Web_01._CB464037068_.jpg" alt="" className=' img-fluid' />
            </div>
            <div className="row justify-content-center align-items-center gy-3 my-2">
              {
                BedItem && BedItem.map((item) => {
                  const { id, image } = item;
                  return (
                    <>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={id}>
                        <div className="image">
                          <img src={image} alt="" className=' img-fluid w-100' />
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
          <div className="row justify-content-center align-items-center gx-3 gy-3">
            {
              loading ? (
                <div className=' text-center'>
                  <h2 className=' text-center spinner-border'></h2>
                  <p>Loading...</p>
                </div>
              ) : (
                data && data.map((item) => {
                  return (
                    <>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={item.id}>
                        <div className="item p-1 border border-1" style={{ height: "510px" }} >
                          <div className="image" style={{ height: "300px" }}>
                            <img src={item.image} alt={item.title} className='img-fluid w-100 h-100' />
                          </div>
                          <div className="content bg-white p-2">
                            <h5>{item.title}</h5>
                            <p className=' m-0 pointer-event text'  onClick={() => { Navigate(`/ProductDetails/${item.id}`) }}  > {item.text}</p>
                            <div className="price">
                              <span className='fs-5'>₹{item.newprice}</span>
                              <span className='text-decoration-line-through fs-6 ms-3'>₹{item.offprice}</span>
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

export default Bad