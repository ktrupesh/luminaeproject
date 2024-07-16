import React, { useState } from 'react';
import { auth } from '../../Firebase';
import { useNavigate, Link } from 'react-router-dom';

function Signin() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await auth.createUserWithEmailAndPassword(email, password);
            await result.user.updateProfile({
                displayName: ` ${firstName}`,
            });
            alert(`Welcome ${result.user.email} ${result.user.displayName}`);
            navigate('/login');
        } catch (error) {
            alert(error.message);
        }

        e.target.reset();
    };

    return (
        <section className="signin">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="image">
                            <img src="https://www.shutterstock.com/image-vector/online-shopping-design-concept-small-600nw-1075475483.jpg" alt="" className=' img-fluid'/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>

                            <div className="input-group flex-column my-2">
                                <label className="my-1" htmlFor="fname">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="fname"
                                    id=""
                                    className="form-control w-100"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Enter Your First Name"
                                    required
                                />
                            </div>

                            <div className="input-group flex-column my-2">
                                <label className="my-1" htmlFor="lname">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lname"
                                    id=""
                                    className="form-control w-100"
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Enter Your Last Name"
                                    required
                                />
                            </div>

                            <div className="input-group flex-column my-2">
                                <label className="my-1" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id=""
                                    className="form-control w-100"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter Your Email"
                                    required
                                />
                            </div>

                            <div className="input-group flex-column my-2">
                                <label className="my-1" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id=""
                                    className="form-control w-100"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter Your Password"
                                    required
                                />
                            </div>

                            <div className="creact-account">
                                <p>all redy have a acconut? 
                                    {" "}<Link to='/login'>Log in</Link>
                                </p>
                            </div>

                            <div className="input-btn my-2">
                                <button type="submit" className="btn btn-dark px-4 rounded-0 button-outline">
                                    Signin
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signin;