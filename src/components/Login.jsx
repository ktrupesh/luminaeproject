import React , { useState } from 'react'
import { auth } from '../../Firebase';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);

        try {
            const result = await auth.signInWithEmailAndPassword(email, password);
            alert(`Welcome ${result.user.email}`);
            navigate('/');
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
                            <img src="https://www.shutterstock.com/image-vector/shopping-illustration-concept-girl-makes-600nw-2270796721.jpg" alt="" className=' img-fluid' />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
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
                                <p>Not a have Acconut? 
                                    {" "}<Link to='/signin'>Creact account</Link>
                                </p>
                            </div>

                            <div className="input-btn my-2">
                                <button type="submit" className="btn btn-dark px-4 rounded-0 button-outline">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login