import React from 'react'
import Slidbar from '../../component/Slidbar/Slidbar'
import { Route,Routes } from 'react-router-dom'
import AddProduct from '../../component/AddProduct/AddProduct'
import ListProduct from '../../component/ListProduct/ListProduct'
import'./Admin.css'
import ListUser from '../../component/ListUser/ListUser'

const Admin = () => {
  return (
    <div className='admin'>
        <Slidbar></Slidbar>
        <Routes>
          <Route path='/addproduct' element={<AddProduct/>}></Route>
          <Route path='/listproduct' element={<ListProduct/>}></Route>
          <Route path='/listUser' element={<ListUser/>}></Route>
        </Routes>
        
    </div>
  )
}

export default Admin