import React, { useState } from 'react';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'admin10') {
            // Login successful, redirect to admin dashboard
            alert('Login successful!');
            // You can also use React Router to navigate to a different route
            window.location = '/Admin/AdminDashboard';
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="content mt-5">
                        <form onSubmit={handleSubmit} className="p-3 w-50 mx-auto shadow-sm">
                            <div className="input-group my-2 flex-column">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id=""
                                    placeholder="Enter your Name"
                                    className="form-control w-100"
                                    required
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                />
                            </div>
                            <div className="input-group my-2 flex-column">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id=""
                                    placeholder="Enter your Password"
                                    className="form-control w-100"
                                    required
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>

                            {error && <div className="alert alert-danger">{error}</div>}

                            <div className="input-form text-center">
                                <button type="submit" className="btn btn-success">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdminLogin;