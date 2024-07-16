import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

function AdminHeader() {

    return (
        <>
            <header className='bg-black position-sticky top-0 z-3'>
                <div className="container" style={{height : "70px"}}>
                    <div className="logo">
                        <Link className=' fs-3 text-white' to='/'>LUMINAE</Link>
                    </div>

                    <div className="input-search p-2 bg-white rounded-4">
                        <div className="input d-flex justify-content-center align-items-center">
                            <input type="search" name="search" id=""  className=' form-control border-0' placeholder=' Search your Product'/>
                            <IoSearch className=' fs-3'/>
                        </div>
                    </div>

                    <div className="icon ">
                        <ul className=' p-0 m-0 d-flex justify-content-center align-items-center' style={{gap : "30px"}}>
                            <li><Link className=' fs-5 text-white' to='/admin/user'>
                                <FaRegBell className=' fw-bold fs-3'/>
                            </Link></li>
                            <li><Link className=' fs-5 text-white' to='/admin/user'>
                                <FaUserCircle className=' fw-bold fs-3'/>
                            </Link></li>
                            <li><Link className=' fs-5 text-black bg-white p-2 rounded-3' to='/Admin/Logout'>Log Out</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default AdminHeader