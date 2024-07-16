import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import AdminHeader from '../../AdminHeader';
import Sidebar from '../../Sidebar';
import Swal from 'sweetalert2';


function WomanEdit() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    const image = useRef("");
    const title = useRef("");
    const text = useRef("");
    const offprice = useRef("");
    const newprice = useRef("");
    const offer = useRef("");
    const category = useRef("");
    const price = useRef("");
    const company = useRef("");
    const size = useRef("");
    const description = useRef("");
    const name = useRef("");

    useEffect(() => {
        axios.get(`http://localhost:4000/woman/${id}`)
            .then((response) => {
                setData(response.data);

                image.current.value = response.data.image
                title.current.value = response.data.title
                text.current.value = response.data.text
                offprice.current.value = response.data.offprice
                newprice.current.value = response.data.newprice
                offer.current.value = response.data.offer
                category.current.value = response.data.category
                price.current.value = response.data.price
                company.current.value = response.data.company
                size.current.value = response.data.size
                description.current.value = response.data.description
                name.current.value = response.data.name
            })
    }, [id])

    const UpdateProduct = () => {

        let update = {
            image: image.current.value,
            title: title.current.value,
            text: text.current.value,
            offprice: offprice.current.value,
            newprice: newprice.current.value,
            offer: offer.current.value,
            category: category.current.value,
            price: price.current.value,
            company: company.current.value,
            size: size.current.value,
            description: description.current.value,
            name: name.current.value,
        }

        axios.put(`http://localhost:4000/woman/${id}`, update)
            .then(() => {
                Swal.fire({
                    title: "Wow",
                    text: "Thanks for Updated your Woman Product",
                    icon: "success"
                });
            })
    }

    return (
        <>
            <AdminHeader />
            <section className="p-0 m-0">
                <div className="container-fluid p-0 m-0">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar />
                        </div>
                        <div className="col-md-10">
                            <div className="content">
                                <form action="" method='post'>
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
                                                <label className=' py-2' htmlFor="title">Name</label>
                                                <input type="text" ref={name} className=' w-100 form-control p-2' name="" id="title" placeholder='Enter Product name' />
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
                                                <input type="text" ref={category} className=' w-100 form-control p-2' name="" id="date" placeholder='Enter Product Categories' />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="">
                                                <label className=' py-2' htmlFor="date">Company</label>
                                                <input type="text" ref={company} className=' w-100 form-control p-2' name="" id="date" placeholder='Enter Product Company' />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="">
                                                <label className=' py-2' htmlFor="date">Size</label>
                                                <input type="text" ref={size} className=' w-100 form-control p-2' name="" id="date" placeholder='Enter Product Size' />
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

                                        <div className="col-md-10">
                                            <div className="input-group flex-column">
                                                <label className=' py-2' htmlFor="date">Description</label>
                                                <textarea name="" id="" placeholder='Description' className=' form-control w-100' rows='6' ref={description} ></textarea>
                                            </div>
                                        </div>

                                        <div className="col-md-12 my-5">
                                            <button type="button" onClick={UpdateProduct} className=' btn btn-success p-2 '>Update</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WomanEdit