import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io5"
import { FaXTwitter } from "react-icons/fa6"
function Footer() {

  const links = {

    company: [
      {
        id: 1,
        name: "About Us",
        link: "/about"
      },
      {
        id: 2,
        name: "Our Store",
        link: "/store"
      },
      {
        id: 3,
        name: "Contact Us",
        link: "/contact"
      },
    ],
    career: [
      {
        id: 1,
        name: "Selling Programs",
      },
      {
        id: 2,
        name: "Advertise",
      },
      {
        id: 3,
        name: "Cooperation",
      },
    ],
    howtobuy: [
      {
        id: 1,
        name: "Making Payments",
      },
      {
        id: 2,
        name: "Delivery Options",
      },
      {
        id: 3,
        name: "Buyer Protection",
      },
      {
        id: 4,
        name: "New User Guide"
      }
    ],

    Help: [
      {
        id: 1,
        name: "Contact Us",
        link: "/contact"
      },
      {
        id: 2,
        name: "FAQ",
        link: "/faq"
      },
      {
        id: 3,
        name: "Privacy Policy",
      }
    ]
  }

  return (
    <>
      <footer className=' footer'>
        <div className="container-fluid p-0 py-5 m-0">
          <div className="container">
            <div className="row justify-content-center">
              {Object.keys(links).map((category, index) => (
                <div key={index} className="col-lg-3 col-md-3 col-sm-6  text-lg-start text-md-start text-sm-center text-center">
                  <div className="links">
                    <h4 className=' text-capitalize'>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                    <ul className=' p-0'>
                      {links[category].map((item) => (
                        <li className=' fw-medium' key={item.id}>
                          {item.link ? (
                            <Link to={item.link}>{item.name}</Link>
                          ) : (
                            item.name
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container p-3 my-4 bg-white">
          <div className="conten  border-bottom border-2 border-dark-subtle py-2">
            <div className="icon d-flex justify-content-start align-items-center gx-3" style={{ gap: "40px" }}>
              <Link><img src="./image/visa.png" alt="" className=' img-fluid' /></Link>
              <Link><img src="./image/pay.png" alt="" className=' img-fluid' /></Link>
              <Link><img src="./image/paypal.png" alt="" className=' img-fluid' /></Link>
            </div>
          </div>
          <div className="footer-bottom py-3">
              <div className="content d-flex justify-content-between align-items-center gx-3">
                <p className=' p-0 m-0'>&copy;2024 Copyright in reserved for lumine shop</p>
                <div className="social-icon d-flex justify-content-start align-items-center gx-3" style={{ gap: "20px" }}>
                  <Link className=' text-black'><FaFacebookF className=' fs-5'/></Link>
                  <Link className=' text-black'><IoLogoInstagram className=' fs-5'/></Link>
                  <Link className=' text-black'><FaXTwitter className=' fs-5'/></Link>
                </div>
              </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer