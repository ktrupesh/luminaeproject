import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Cart() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);
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
    if(user){
      axios.get(`http://localhost:4000/cart`)
      .then((response) => {
        const initData = response.data.map((item) => ({ ...item, quantity: 1 }));
        setData(initData);
      })
      .catch((error) => {
        setError(error.message);
      });
    }
  }, [user]);

  const handleQuantityChange = (itemId, quantity) => {
    const updatedData = data.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity };
      }
      return item;
    });
    setData(updatedData);
  };

  const handleDelete = (itemId) => {
    axios.delete(`http://localhost:4000/cart/${itemId}`)
      .then((response) => {
        const updatedData = data.filter((item) => item.id !== itemId);
        setData(updatedData);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const calculateSubtotal = () => {
    return data.reduce((total, item) => total + item.newprice * item.quantity, 0);
  };

  const handleOrderNow = () => {
    axios.post(`http://localhost:4000/order`, data)
      .then((response) => {
        setOrderPlaced(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section>
      {
        user ? (
          <div className="container bg-white shadow-sm">
          <div className="title text-lg-start text-md-center text-sm-center text-center d-flex justify-content-between align-items-center">
            <h4>Shopping Cart</h4>
            <p>Price</p>
          </div>
          {data.length === 0 ? (
            <div className="row justify-content-center align-items-center my-4 text-center">
              <h5>Cart is empty</h5>
              <button className=' btn btn-info text-white'>
                <Link to='/woman' className=' text-white'>Shop Now</Link>
              </button>
            </div>
          ) : (
            <div className="row">
              {data && data.map((item) => (
                <div key={item.id} className='row justify-content-between align-items-center my-4'>
                  <div className="col-md-2">
                    <div className="image w-100 py-2">
                      <img src={item.image} alt={item.title} className='img-fluid w-75' />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="item">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <div className="my-2">
                        <button className=' bg-transparent border-0' onClick={() => handleDelete(item.id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className=''>
                      <p className=' text-end fs-5'>{" ₹ "}{item.newprice * item.quantity}</p>
                      <div className='d-flex align-items-center justify-content-end'>
                        <select
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        >
                          {[...Array(10).keys()].map((i) => (
                            <option key={i} value={i + 1}>{i + 1}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="row justify-content-between align-items-center my-4">
                <div className="col-md-6 text-start">
                  <button className='btn btn-success' onClick={handleOrderNow}>Order Now</button>
                </div>
                <div className="col-md-6">
                  <div className="item text-end">
                    <span className=' fs-5'>Subtotal:</span>
                    <span className=' fs-5'>{" ₹ "}{calculateSubtotal()}</span>
                  </div>
                </div>
              </div>
              
              {orderPlaced && (
                <div className="row justify-content-center align-items-center my-4 text-center">
                  <h5>Order placed successfully!</h5>
                  <button className=' btn btn-info text-white'>
                    <Link to='/woman' className=' text-white'>Shop Now</Link>
                  </button>
                </div>
              )}
            </div>
          )}
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
    </>
  );
}

export default Cart;