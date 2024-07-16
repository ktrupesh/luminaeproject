import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
        <section>
            <div className="container">
                <div className="content-error">
                    <div className="image w-100 h-50">
                        <img src="https://media.licdn.com/dms/image/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/0/1581099611064?e=1725494400&v=beta&t=7ODxobcklUlei8lN7u0M3Vetm-LJwP-bo5MYM1-O-qw" alt="" className=' img-fluid w-100 h-100 object-fit-cover' />
                    </div>
                    <div className="bth text-center mt-4">
                        <Link to='/' className=' btn btn-secondary rounded-0 text-white' >Back To Home</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Error