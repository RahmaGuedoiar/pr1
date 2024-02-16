import React, { useEffect } from 'react'
import './ListUser.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAlluser } from '../../Redux/Slices/UserSlices'
const ListUser = () => {
  
  const { userData } = useSelector(state => state.User)
  console.log(' userData', userData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAlluser())
  }, [])

  return (
    <div className='list-user'>
      <div className="listuser-format-main">
        <div><p>user</p></div>
        <div><p>name</p></div>
        <div><p>email</p></div>
      </div>
      <div className="listuser-alluser">


        {Array.isArray(userData) && userData.map((el, index) => {

          return <>
            <div className='user'>
              <div className='IMAGE'><img className='user-image' src={el.image}></img></div>
              <div className='STRING'><h1>{el.name}</h1></div>
              <div className='STRING' ><h1>${el.email}</h1></div>
            </div>
          </>
        })}


      </div>
    </div>

  )
}

export default ListUser