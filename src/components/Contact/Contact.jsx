import React, { useState , useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function ContactForm() {
  
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const Navigate = useNavigate();
  const [isAgreed, setIsAgreed] = useState(false);

  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });


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


  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userdata, [name]: value })
  }

  const submitData = async (event) => {
    event.preventDefault();

    const { name, email, phoneNumber, message } = userdata;

    if(name && email && phoneNumber && message){
    const res = fetch(
      `https://ecommerceluminae-default-rtdb.firebaseio.com/useDataRecord.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        message,
      })
    }
    );
    if(res){
      setUserData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      })
      alert("Data Stored");
    }
    else{
      alert("Plz fill the data");
    }
    } 
    else{
      alert("Plz fill the data");
    }
    
  }

  return (
    <section>
    {
      user ? (
        <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form method="POST">
              <h2 className="text-center">Let's Get In Touch.</h2>
              <p className="text-center">
                Or just reach out manually to
                <Link to="mailto:luminae.com">luminae.com</Link>
                .
              </p>
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  value={userdata.name}
                  // onChange={(e) => setFullName(e.target.value)}
                  className="form-control"
                  onChange={postUserData}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userdata.email}
                  // onChange={(e) => setEmail(e.target.value)}
                  onChange={postUserData}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={userdata.phoneNumber}
                  // onChange={(e) => setPhoneNumber(e.target.value)}
                  onChange={postUserData}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={userdata.message}
                  name="message"
                  // onChange={(e) => setMessage(e.target.value)}
                  onChange={postUserData}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  id="agree"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className=' me-2'
                />
                <label htmlFor="agree">
                  I here by agree to our{" "}
                  <Link to="">Privacy Policy</Link> terms.
                </label>
              </div>
              <button type="submit" onClick={submitData} className="btn btn-primary btn-block my-3">
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div> ) : (
        <div className=" my-5">
          <div className="text-center">
            <h3>Please sign in to view products</h3>
            <Link to="/signin" className="btn btn-success rounded-0">Sign in with Email</Link>
          </div>
        </div>
      )
    }
      
    </section>
  );
}

export default ContactForm;