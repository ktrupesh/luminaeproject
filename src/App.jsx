import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import AdminLayOut from './components/admin/components/Admin'
import AdminDelete from './components/admin/components/AdminDelete'
import AdminEdit from './components/admin/components/AdminEdit'
import AdminLogin from './components/admin/components/AdminLogin'
import Adminwoman from './components/admin/components/Adminwoman'
import Allpage from './components/admin/components/Allpages/Allpage'
import Allproduct from './components/admin/components/Allproduct'
import WomanEdit from './components/admin/components/Categories/Adminwoman/WomanEdit'
import Womanproduct from './components/admin/components/Categories/Adminwoman/Womanproduct'
import Dashboard from './components/admin/components/Dashboard'
import AdminHome from './components/admin/components/Home'
import Bag from './components/Bag/Bag'
import Cart from './components/Cart'
import ContactForm from './components/Contact/Contact'
import Electronic from './components/Electronic/Electronic'
import Error from './components/Error'
import Signin from  './components/Signin'
import Header from './components/Header'
import Home from './components/Home/Home'
import Furniture from './components/Homefurniture/Furniture'
import Kids from './components/Kids/Kids'
import Man from './components/Man/Man'
import ProductDetails from './components/ProductDetails'
import Woman from './components/Woman/Woman'
import Login from './components/Login'
import Account from './components/Account'
function App() {

  

  return (
    <>
      {/* user penal routing  */}

      <Router>
        <Routes>
          <Route  element={<Header/>}>
            <Route index path='/' element={<Home/>} />
            <Route path='/woman' element={<Woman/>} />
            <Route path='/man' element={<Man/>} />
            <Route path='/kids' element={<Kids/>} />
            <Route path='/furniture' element={<Furniture/>} />
            <Route path='/bag' element={<Bag/>} />
            <Route path='/electronic' element={<Electronic/>} />
            <Route path='/contact' element={<ContactForm/>} />
            <Route path='/account' element={<Account/>} />
            <Route path='/ProductDetails/:id' element={<ProductDetails/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/signin' element={<Signin/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route element={<Error/>} />
          </Route>

          {/* Admin penal routing  */}
          <Route path='/Admin/Login' element={<AdminLogin/>} />
          <Route path='/Admin/Adminlayout' element={<AdminLayOut/>} />
          <Route path='/Admin/Allpages' element={<Allpage/>} />
          <Route path='/Admin/AdminDashboard' element={<Dashboard/>} />
          <Route path='/Admin/Allproduct' element={<Allproduct/>} />
          <Route path='/Admin/AdminEdit/:id' element={<AdminEdit/>} />
          <Route path='/Admin/AdminDelete/:id' element={<AdminDelete/>} />
          <Route path='/Admin/Adminhome' element={<AdminHome/>} />
          <Route path='/Admin/Adminwoman' element={<Adminwoman/>} />
          <Route path='/Admin/Womanproduct' element={<Womanproduct/>} />
          <Route path='/Admin/Womanedit/:id' element={<WomanEdit/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App