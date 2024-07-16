import React from 'react'
import AdminHeader from '../AdminHeader'
import Sidebar from '../Sidebar'

function ManCategories() {
    return (
        <>
            <AdminHeader />
            <section className=' p-0 m-0'>
                <div className="container-fluid p-0 m-0">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar />
                        </div>
                        <div className="col-md-10">
                            <div className="content py-4">
                                <h4>Man</h4>
                                <ul className=' p-0 m-0'>
                                    <select name="" id="" className=' form-control'>
                                        <option value="">--Select Categories--</option>
                                        <option value="">Clothes</option>
                                        <option value="">Shoes</option>
                                        <option value="">Jewellery</option>
                                        <option value="">Eyewear</option>
                                        <option value="">Watches</option>
                                    </select>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ManCategories