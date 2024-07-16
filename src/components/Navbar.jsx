import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { auth } from '../../Firebase';
import { Dropdown } from 'react-bootstrap';

function Navbar({ user }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <React.Fragment>
      <div className='position-sticky top-0 z-3'>
        <header className='bg-white py-2'>
          <div className="container d-flex justify-content-between align-items-center">
            <div className="logo">
              <NavLink to='/'>
                <img src="/image/Logo.png" alt="header-logo" className='img-fluid' />
              </NavLink>
            </div>
            <div className="input-form p-2 bg-white d-flex justify-content-center align-items-center position-relative">
              <form onSubmit={handleSearch}>
                <input type="search" name="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search Product' className='form-control px-3' />
              </form>
            </div>
            <div className="d-lg-none">
              <button className="hamburger-menu" onClick={toggleMobileMenu}>
                {mobileMenu? <FaTimes /> : <FaBars />}
              </button>
            </div>
            <div className="d-none d-lg-block">
              <nav>
                <ul className='p-0 m-0 d-flex'>
                  <li><NavLink className='text-black' to='/'>Home</NavLink></li>
                  <li><NavLink className='text-black' to='/about'>About Us</NavLink></li>
                  <li><NavLink className='text-black' to='/contact'>Contact Us</NavLink></li>
                  {
                    user? (
                      <Dropdown>
                        <Dropdown.Toggle variant="black" id="dropdown-basic">
                          {user.displayName? user.displayName : user.email}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item as={NavLink} to="/account">Account</Dropdown.Item>
                          <Dropdown.Item onClick={() => {
                            auth.signOut();
                            navigate('/login');
                          }}>Log out</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ) : (
                      <ul>
                        <li><NavLink className='text-black' to='/signin'>Sign In</NavLink></li>
                        <li><NavLink className='text-black' to='/login'>Login</NavLink></li>
                      </ul>
                    )
                  }
                </ul>
              </nav>
            </div>
          </div>
        </header>

        {mobileMenu && (
          <div className="mobile-menu d-lg-none bg-white">
            <nav>
              <ul className='p-0 m-0 d-flex flex-column'>
                <li><NavLink className='text-black' onClick={() => setMobileMenu(false)} to='/'>Home</NavLink></li>
                <li><NavLink className='text-black' onClick={() => setMobileMenu(false)} to='/about'>About Us</NavLink></li>
                <li><NavLink className='text-black' onClick={() => setMobileMenu(false)} to='/contact'>Contact Us</NavLink></li>
                <li><NavLink className='text-black' onClick={() => setMobileMenu(false)} to='/woman'>Woman</NavLink></li>
                <li><NavLink className='text-black' onClick={() => setMobileMenu(false)} to='/man'>Man</NavLink></li>
                <li><NavLink className='text-black' onClick={() => setMobileMenu(false)} to='/kids'>Kids</NavLink></li>
                <li><NavLink className='text-black' onClick={() => setMobileMenu(false)} to='/furniture'>Home & Furniture</NavLink></li>
                <li><NavLink className='text-black' onClick={() => setMobileMenu(false)} to='/bag'>Bag</NavLink></li>
                <li><NavLink className='text-black' onClick={() => setMobileMenu(false)} to='/electronic'>Electronic</NavLink></li>
                {
                    user? (
                      <Dropdown>
                        <Dropdown.Toggle variant="black" id="dropdown-basic">
                          {user.displayName? user.displayName : user.email}
                        </Dropdown.Toggle>

                        <Dropdown.Menu >
                          <Dropdown.Item as={NavLink} to="/account">Account</Dropdown.Item>
<Dropdown.Item onClick={() => {
                            auth.signOut();
                            navigate('/login');
                          }}>Log out</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ) : (
                      <ul className=' p-0 m-0'>
                        <li><NavLink className='text-black' to='/signin'>Sign In</NavLink></li>
                        <li><NavLink className='text-black' to='/login'>Login</NavLink></li>
                      </ul>
                    )
                  }
              </ul>
            </nav>
          </div>
        )}

        <div className="navbar-item bg-black d-none d-lg-block">
          <div className="container d-flex justify-content-between align-items-center">
            <nav className='p-0 m-0'>
              <ul className='p-0 m-0 d-flex flex-wrap'>
                <li><NavLink className="fw-bolder text-white" to='/woman'>Woman</NavLink></li>
                <li><NavLink className="fw-bolder text-white" to='/man'>Man</NavLink></li>
                <li><NavLink className="fw-bolder text-white" to='/kids'>Kids</NavLink></li>
                <li><NavLink className='text-white fw-bolder' to='/furniture'>Home & Furniture</NavLink></li>
                <li><NavLink className="fw-bolder text-white" to='/bag'>Bag</NavLink></li>
                <li><NavLink className='text-white fw-bolder' to='/electronic'>Electronic</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;