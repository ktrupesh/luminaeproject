import React from 'react'
import {Link} from 'react-router-dom'
import { IoIosSettings } from "react-icons/io";

function Sidebar() {

    const Adminstyle = {
        transform : "translate(0px, 0px) !important"
    }

    return (
        <>
            <section className='admin-sidebar  position-fixed top-0 bg-black p-0' style={{height : "100vh"}}>
                <div className="container pt-5">
                    <h5 className=' text-white py-4'>Welcome Admin</h5>
                </div>

                <div className="side-menubar">
                    <ul className=' m-0 px-2'>
                        <li><Link className=' text-white' to='/Admin/AdminDashboard'>Dashboard</Link></li>
                        <li className=' dropdown show'>
                            <Link className=' text-white dropdown-toggle' id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to=''>Product</Link>

                            <ol className=' p-0 m-0  dropdown-menu'  aria-labelledby="dropdownMenuLink" style={Adminstyle}>
                                <li className=''><Link className=' text-black px-2 m-0 fw-bolder' to='/Admin/Allproduct'>All Product</Link></li>
                                <li className=''><Link className=' text-black px-2 m-0 fw-bolder' to='/Admin/Addnewproduct'>Add New</Link></li>
                                <li><Link className=' text-black px-2 m-0 fw-bolder' to='/admin/addblog'>Add Blog</Link></li>
                            </ol>
                        </li>

                        <li><Link className=' text-white' to='/Admin/Allpages'>Pages</Link></li>
                        <li><Link className=' text-white m-0 fw-bolder' to='/Admin/media'>Media</Link></li>
                        <li><Link className=' text-white m-0 fw-bolder' to='/Admin/comments'>Comments</Link></li>
                        <li><Link className=' text-white m-0 fw-bolder' to='/Admin/users'>Users</Link></li>
                        <li><Link className=' text-white m-0 fw-bolder d-flex justify-content-start align-items-center' to='/Admin/setings'>
                            <IoIosSettings className=' fs-4 me-2'/>
                        Settings</Link></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Sidebar