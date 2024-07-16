import React, { useState , useEffect } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function About() {
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [description , setDescription] = useState('');
  const [user, setUser] = useState(null);
  const Navigate = useNavigate();
  const auth = getAuth();


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


  const handleSubmit = (event) => {
    event.preventDefault();
    setName('Name:', name);
    setEmail('Email:', email);
    setDescription('Description:', description);
    // You can send this data to a server or perform other actions here
  };

  return (
    <section>
    {
      user ? (
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="">
              <span>Let's get to know Luminae</span>
              <h2 className=' fs-1 fw-bolder'>Providing the best experience to make your <span className=' text-info'> Online Shopping </span></h2>
              <p>
                At Luminae, we are more than just an online store - we are your
                ultimate destination for an unparalleled shopping experience. Our
                journey began with a simple yet powerful idea: to create a
                platform that not only offers a wide array of products but also
                fosters a sense of community and connection among our customers.
              </p>
              <div className=" row">
                <div className="col-md-4">
                  <h4 className=' text-info fw-bolder' >20+</h4>
                  <p>Shopping category</p>
                </div>
                <div className="col-md-4">
                  <h4 className=' text-info fw-bolder' >10+</h4>
                  <p>Different Territory</p>
                </div>
                <div className="col-md-4">
                  <h4 className=' text-info fw-bolder' >4M+</h4>
                  <p>Happy Client</p>
                </div>
              </div>
            </div>
            <div className="service">
              <span className=' ' >Know our service</span>
              <h2 className='mt-2'>We offer the best service that will <span className=' text-info'> make it easier </span></h2>
              <p>
                Discover unparalleled convenience with our top-tier service,
                designed to make your shopping experience smoother than ever.
                Experience shopping made effortless through our exceptional service
                that puts your needs at the forefront.
              </p>
              <p>
                Elevate your shopping journey with our unmatched service,
                redefining convenience and satisfaction.
              </p>
              <div className="row gx-3 gy-3">
                <div className="col-md-6 text-center">
                  <div className="icon">
                    <i className="fas fa-store"></i>
                  </div>
                  <h4>Full category shop</h4>
                  <p>
                    Explore our comprehensive online store where you'll find a
                    diverse range of products across multiple categories, all curated
                    to cater to your various needs and...
                  </p>
                  <button className="btn btn-primary">READ MORE</button>
                </div>
                <div className="col-md-6 text-center">
                  <div className="icon">
                    <i className="fas fa-money-bill-wave"></i>
                  </div>
                  <h4>Extraordinary discount</h4>
                  <p>
                    Experience unparalleled savings on a wide selection of premium
                    products that enhance your lifestyle without compromising on
                    quality...
                  </p>
                  <button className="btn btn-primary">READ MORE</button>
                </div>
                <div className="col-md-6 text-center">
                  <div className="icon">
                    <i className="fas fa-truck"></i>
                  </div>
                  <h4>Free Cargo</h4>
                  <p>
                    Enjoy the convenience of free cargo services, ensuring your
                    purchases are delivered right to your doorstep without any
                    additional cost. Experience seamless...
                  </p>
                  <button className="btn btn-primary">READ MORE</button>
                </div>
                <div className="col-md-6 text-center">
                  <div className="icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <h4>24-hour customer service</h4>
                  <p>
                    Our commitment to exceptional customer care means our
                    24-hour customer service team is always available to assist you,
                    ensuring your inquiries and concerns...
                  </p>
                  <button className="btn btn-primary">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="testimonial">
              <div className="quote">
                <i className="fas fa-quote-left"></i>
                <p>
                  We have made many people satisfied with our Platform
                </p>
                <i className="fas fa-quote-right"></i>
              </div>
              <div className="location">
                <i className="fas fa-map-marker-alt"></i>
                <p>Melbourne, Australia</p>
              </div>
            </div>
            <div className="image">
              <img
                src="./image/team.png"
                alt="Testimonial"
                className=' img-fluid h-50'
            />
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 m-0 p-0">
            <div className="concerns bg-dark text-white h-100">
              <h2>Tell us about your Concerns</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6 m-0 p-0 overflow-hidden">
            <div className="image">
              <img src="./image/right.png" className=' img-fluid' alt="" />
            </div>
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

export default About;