import React from 'react'
import { Link } from 'react-router-dom'
import AdminHeader from '../AdminHeader'
import Sidebar from '../Sidebar'

function Allpage() {
    return (
        <>
            <AdminHeader />
            <section className=' p-0 m-0'>
                <div className="container-fliud">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar />
                        </div>
                        <div className="col-md-10">
                            <div className="allpages">
                            <h4>All Pages</h4>
                            <ul className=' p-0 m-0 my-2 border border-2'>
                                    <div className=' bg-white p-2'>
                                        <li className=' py-2'><span className=' text-primary'>Home</span> - Home page</li>
                                        <li><Link className=' text-black link-underline-info' to='/Admin/Adminhome'>Edit</Link></li>
                                    </div>
                                    <div className=' bg-light p-2'>
                                        <li className=' py-2'><span className=' text-primary'>All Product</span> - All Product page</li>
                                        <li><Link className=' text-black link-underline-info' to='/Admin/Adminwoman'>Edit</Link></li>
                                        <li><Link className=' text-black link-underline-info' to='/Admin/Womanproduct'>Show</Link></li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Allpage