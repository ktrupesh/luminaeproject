import axios from 'axios';
import React , { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Kids() {

  const [data , setData] = useState([]);
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
      axios.get(`http://localhost:4000/woman?name=kid`)
        .then((response) => {
        setData(response.data)
      })
    }
  }, [user])

  return (
    <>
      <section>
      {
        user ? (
          <div className="container">
        <div className="row justify-content-start align-items-center gy-3">
            {
              data && data.map((item) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={item.id}>
                  <div className="item">
                    <div className="image text-center" style={{ width: "100%", height: "auto", objectFit: "cover" }}>
                      <img src={item.image} alt={item.title} className=" img-fluid" />
                    </div>
                    <div className="content py-2 text-center">
                      <h3 className=' fs-5 fw-bolder'>{item.title}</h3>
                      <p style={{ textOverflow : "ellipsis" , whiteSpace : "nowrap" , overflow : "hidden" }}>{item.text}</p>
                      <div className="">
                        <span className="m-0 fs-5">${item.newprice}</span>
                        <span className=' mx-2'>{item.offer}%</span>
                        <span>M.R.P</span>
                        <span className="m-0  text-danger-emphasis text-decoration-line-through">{item.offprice}</span>
                      </div>
                      <div className="button mt-4">
                          <button type='button' className='btn btn-warning text-white' onClick={() => { Navigate(`/ProductDetails/${item.id}`) }} >About Product</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
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
  )
}

export default Kids