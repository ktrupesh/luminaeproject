import React from 'react';
const Account = () => {
  return (
    <section className=''>
    <div className="container">
      <h4 className=" text-lg-start text-md-start text-sm-center text-center mt-4">Your Account</h4>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png" alt="" className=' img-fluid w-25' />
              <h5 className="card-title my-2">
              Your Orders</h5>
              <p className="card-text">Track, return, or buy things again</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png" alt="" className=' img-fluid w-25' />
              <h5 className="card-title my-2">
              Your Addresses</h5>
              <p className="card-text">Edit addresses for orders and gifts</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png" alt="" className=' img-fluid w-25' />
              <h5 className="card-title my-2">
              Luminae Pay balance</h5>
              <p className="card-text">Add money to your balance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png" alt="" className=' img-fluid w-25' />
              <h5 className="card-title my-2">
              Login & security</h5>
              <p className="card-text">Edit login, name, and mobile number</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <img src="./public/image/Logo.png" alt=""  className=' img-fluid'/>
              <h5 className="card-title mt-2">
              Your business account</h5>
              <p className="card-text mb-1">
                Sign up for free to save up to 28% with GST invoice and bulk
                discounts and purchase on credit.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/self-service/contact_us._CB623781998_.png" alt=""  className=' img-fluid' style={{ width : "18%" }}/>
              <h5 className="card-title">
              Contact Us</h5>
              <p className="card-text">
                Get in touch with our customer support team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Digital content and devices</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Apps and more</li>
                <li className="list-group-item">Content Library</li>
                <li className="list-group-item">Devices</li>
                <li className="list-group-item">
                  Digital gifts you've received
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Email alerts, messages, and ads
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Advertising preferences</li>
                <li className="list-group-item">
                  Communication preferences
                </li>
                <li className="list-group-item">SMS alert preferences</li>
                <li className="list-group-item">Message Centre</li>
                <li className="list-group-item">
                  Alexa shopping notifications
                </li>
                <li className="list-group-item">Deals Notifications</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">More ways to pay</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Default Purchase Settings
                </li>
                <li className="list-group-item">Amazon Pay</li>
                <li className="list-group-item">Coupons</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Account;