import React, { useEffect, useState } from 'react';
import db from '../../../Config';
import { collection , doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Woman() {
  const [data, setData] = useState([]);
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
  }, [auth, Navigate]);

  useEffect(() => {
    if (user) {
      // axios.get(`http://localhost:4000/woman?name=woman`)
      //   .then((response) => {
      //     setData(response.data);
      //   })
      //   .catch((error) => {
      //     setData(error.data);
      //   });

      const data = async () => {
        const query = await getDocs( collection(db , "woman"));
        const fetchData = query.docs.map(doc => doc.data());
        setData(fetchData);
      }
      data();
    }
  }, [user]);

  return (
    <section>
      {user ? (
        <div className="container">
          <div className="content">
            <div className="title text-lg-start text-md-center text-sm-center text-center mb-4">
              <h3>Woman Item's</h3>
            </div>
            <div className="row justify-content-start align-items-center gy-3">
              {
                data && data.map((item) => (
                  <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                    <div className="item">
                      <div className="image text-center" style={{ width: "100%", height: "auto", objectFit: "content" }}>
                        <img src={item.image} alt={item.title} className=" img-fluid" />
                      </div>
                      <div className="content py-2 text-center">
                        <h3 className=' fs-5 fw-bolder'>{item.title}</h3>
                        <p style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{item.text}</p>
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
  );
}

export default Woman;