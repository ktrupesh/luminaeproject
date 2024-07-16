import React , { useState , useEffect } from 'react'
import axios from 'axios'
import { useParams , useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import AdminHeader from './AdminHeader';
import Sidebar from './Sidebar';
function AdminDelete() {

    const [data , setData] = useState([]);
    const Navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        axios.delete(`http://localhost:4000/flashsales/${id}`).then((respones) => {
            setData(respones.data)
            Swal.fire({
                title : "Delete",
                text : "Your Product is Deleted",
                icon : "error"
            })
            Navigate("/Admin/Allproduct")
        })
    } , [])

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

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminDelete