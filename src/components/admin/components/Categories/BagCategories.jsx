import React from 'react'
import AdminHeader from '../AdminHeader'
import Sidebar from '../Sidebar'

function BagCategories() {
    return (
        <>
            <AdminHeader/>
            <section className=' p-0 m-0'>
                <div className="container-fliud p-0 m-0">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar/>
                        </div>
                        <div className="col-md-10">
                            <div className="content py-4">
                                <h4>Bags</h4>
                                <ul className=' p-0 m-0'>
                                    <select name="" id="" className=' form-control'>
                                        <option value="">--Select Categories--</option>
                                        <option value="">Backpacks</option>
                                        <option value="">HandBags</option>
                                        <option value="">Stores</option>
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

export default BagCategories