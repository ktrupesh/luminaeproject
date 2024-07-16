import React from 'react'
import AdminHeader from './AdminHeader'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'

function AdminLayOut() {
  return (
    <>
        <AdminHeader/>
        <section className=' p-0 m-0'>
          <div className="container-fluid p-0 m-0">
            <div className="row">
              <div className="col-md-2">
                <Sidebar/>
              </div>
              <div className="col-md-10">
                <Dashboard/>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default AdminLayOut