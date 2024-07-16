import React from 'react'
import AdminHeader from './AdminHeader'
import Sidebar from './Sidebar'

function Dashboard() {
    return (
        <>
            <AdminHeader/>
            <section className=' m-0 p-0'>
                <div className="container-fluid p-0 m-0">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar/>
                        </div>
                        <div className="col-md-10">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard