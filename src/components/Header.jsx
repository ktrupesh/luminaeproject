import React , { useState , useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { auth } from '../../Firebase'

function Header() {

  const [user , setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUser(user)
      }
      else{
        setUser(null)
      }
    })
  }, [])
  return (
    <>
      <Navbar user={user}/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Header