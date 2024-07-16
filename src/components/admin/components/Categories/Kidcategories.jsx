import React from 'react'
import AdminHeader from '../AdminHeader'
import Sidebar from '../Sidebar'

function Kidcategories() {
    return (
        <>
            <AdminHeader />
            <section className=' m-0 p-0'>
                <div className="container-filud p-0 m-0">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar />
                        </div>
                        <div className="col-md-10">
                            <div className="content py-4">
                                <h4>Kids</h4>
                                <ul className=' p-0 m-0'>
                                    <select name="" id="" className=' form-control'>
                                        <option value="">--Select Categories--</option>
                                        <option value="">Girls All Clothes</option>
                                        <option value="">Boy All Clothes</option>
                                        <option value="">Kids</option>
                                        <option value="">Baby</option>
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

export default Kidcategories