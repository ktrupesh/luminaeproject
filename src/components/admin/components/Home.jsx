import React, { useRef} from 'react'
import axios from 'axios';
import AdminHeader from './AdminHeader'
import Sidebar from './Sidebar'
import Swal from 'sweetalert2';

function AdminHome() {


    const image = useRef("");
    const title = useRef("");
    const text = useRef("");
    const offprice = useRef("");
    const newprice = useRef("");
    const offer = useRef("");
    const price = useRef("");
    const category = useRef("");
    const company = useRef("");
    const size = useRef("");

    const handleAddProduct = (e) => {
        e.preventDefault();

        var inset = {

            image: image.current.value,
            title: title.current.value,
            text: text.current.value,
            offprice: offprice.current.value,
            newprice: newprice.current.value,
            offer: offer.current.value,
            category : category.current.value,
            company : company.current.value,
            size : size.current.value,
        }


        axios.post(`http://localhost:4000/flashsales`, inset).then(() => {
            Swal.fire({
                title: "Success",
                text: "Thanks for added your Products",
                icon: "success"
            })
        })
        e.target.reset();
    }

    return (
        <>
            <AdminHeader />
            <sectionn className=' m-0 p-0'>
                <div className="container-fliud p-0 m-0">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar />
                        </div>
                        <div className="col-md-10">
                            <div className="content p-4">
                                <form action="" method='post' onSubmit={handleAddProduct}>
                                    <div className="row justify-content-start align-items-center">
                                        <div className="col-md-6">
                                            <div className="">
                                                <label className=' py-2' htmlFor="date">Image</label>
                                                <input type="text" ref={image} className=' w-100 form-control p-2' name="" id="date" placeholder='Enter Product Image Url' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="">
                                                <label className=' py-2' htmlFor="title">Title</label>
                                                <input type="text" ref={title} className=' w-100 form-control p-2' name="" id="title" placeholder='Enter Product Title' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="">
                                                <label className=' py-2' htmlFor="date">Text</label>
                                                <input type="text" ref={text} className=' w-100 form-control p-2' name="" id="date" placeholder='Enter Product Text' />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="">
                                                <label className=' py-2' htmlFor="date">Offprice</label>
                                                <input type="number" ref={offprice} className=' w-100 form-control p-2' name="" id="date" placeholder='Enter Product Off Price' />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="">
                                                <label className=' py-2' htmlFor="date">Newprice</label>
                                                <input type="number" ref={newprice} className=' w-100 form-control p-2' name="" id="date" placeholder='Enter Product New Price' />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="">
                                                <label className=' py-2' htmlFor="date">Categories</label>
                                                <input type="text" ref={ category } className=' w-100 form-control p-2' name="" id="date" placeholder='Enter Product Categories' />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="">
                                                <label className=' py-2' htmlFor="date">Company</label>
                                                <input type="text" ref={ company } className=' w-100 form-control p-2' name="" id="date" placeholder='Enter Product Company' />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="">
                                                <label className=' py-2' htmlFor="date">Size</label>
                                                <input type="text" ref={ size } className=' w-100 form-control p-2' name="" id="date" placeholder='Enter Product Size' />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="">
                                                <label className=' py-2' htmlFor="date">Offer</label>
                                                <input type='number' ref={offer} className=' w-100 form-control p-2' name="" id="date" placeholder='Enter Product Offer' />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="">
                                                <label className=' py-2' htmlFor="date">Amount</label>
                                                <input type='number' ref={price} className=' w-100 form-control p-2' name="" id="date" placeholder='Enter Product Amount' />
                                            </div>
                                        </div>

                                        <div className="col-md-12 my-5">
                                            <input type="submit" value="Add Product" className=' btn btn-success p-2 ' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </sectionn>
        </>
    );
}

export default AdminHome;