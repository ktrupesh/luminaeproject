import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCheck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Bag() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate('/login'); // redirect to login page if user is not logged in
      }
    });
  }, [auth, navigate]);

  useEffect(() => {
    if(user){
      setTimeout(() => {
        axios.get(`http://localhost:4000/woman?name=beg`)
          .then((response) => {
            setData(response.data);
            setLoading(false);
          })
          .catch((error) => {
            setData(error.data);
            setLoading(false);
          })
      }, 1000);
    }
  }, [user])

  const calculatediscound = (offprice, newprice) => {
    return Math.round(((offprice - newprice) / offprice) * 100);
  };

  const BegData = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/3d06624d-115b-483f-9958-2b6fa13d9312._CR0,0,1200,628_SX430_QL70_.jpg",
    },
  ];

  const BegItem = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/513zhzl3T+L._AC_SR146,118_QL70_.jpg",
      title: "Urban Jungle Premium Trolley Bags for Travel, Medium Check-in Suitcase (65 cm)",
      text: "Prime",
      icon: <FaCheck />
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/51BUJDh-fcL._AC_SR146,118_QL70_.jpg",
      title: "Urban Jungle Premium Trolley Bags for Travel, Medium Check-in Suitcase (65 cm)",
      text: "Prime",
      icon: <FaCheck />
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/511Rfukeh-L._AC_SR146,118_QL70_.jpg",
      title: "Urban Jungle Premium Trolley Bags for Travel, Medium Check-in Suitcase (65 cm)",
      text: "Prime",
      icon: <FaCheck />
    },
  ];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section>
        {
          user ? (
            <div>
              <div className="container">
          <div className="row align-items-center gx-3 gy-3">
            {
              BegData.map((item) => (
                <div className="col-md-5" key={item.id}>
                  <div className="item">
                    <img src={item.image} alt={item.title} className=' img-fluid w-100 h-100 object-fit-cover' />
                  </div>
                </div>
              ))
            }
            {BegItem.map((item) => (
              <div className="col-md-2" key={item.id}>
                <div className="item">
                  <img src={item.image} alt={item.title} className=' img-fluid '/>
                  <div className="content  bg-light p-2">
                    <p className='' style={{ fontSize: "14px" }} >{item.title}</p>
                    <p className=' text-success m-0' >{item.icon} {item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
              </div>

              <div className="container my-5">
          <div className="row gy-5 gx-3">
            {loading? (
              <div className=' text-center my-3'>
                <h4 className=' text-center spinner-border'></h4>
                <p className=' fs-3'>Loading...</p>
              </div>
            ) : (
              currentProducts && currentProducts.map((item) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                  <div className="item">
                    <div className="image text-center" style={{ width: "100%", height: "350px", objectFit: "cover" }}>
                      <img src={item.image} alt={item.title} className=" img-fluid object-fit-cover" />
                    </div>
                    <div className="content py-2 text-center">
                      <h3 className=' fs-5 fw-bolder'>{item.title}</h3>
                      <p style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{item.text}</p>
                      <div className="">
                        <span className="m-0 fs-5">M.R.P {""}{item.newprice}</span>
                        {/* <span className=' mx-2'>{item.offer}%</span> */}
                        <span>{" "}
                          {
                            String(
                              calculatediscound(item.offprice , item.newprice)
                            ).padStart(2 , "0")}
                            % off
                        </span>
                        <span>M.R.P</span>
                        <span className="m-0  text-danger-emphasis text-decoration-line-through">{item.offprice}</span>
                      </div>
                      <div className="button mt-4">
                        <button type='button' className='btn btn-warning text-white' onClick={() => { navigate(`/ProductDetails/${item.id}`) }} >About Product</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="d-flex justify-content-center">
            {Array.from({ length: Math.ceil(data.length / productsPerPage) }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  className={` btn btn-black  text-black mx-1 ${currentPage === pageNumber ? " text-black" : ""}`}
                  onClick={() => paginate(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>
              </div>
            </div> ) : (
              <div className="container">
                <div className="my-5">
                  <p> Please login to view products. </p>
                </div>
              </div>
            )
        }
      </section>
    </>
  );
}

export default Bag;