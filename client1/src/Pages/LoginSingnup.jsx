import React from 'react'
import './LoginSingnup.css'
import {useEffect,useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../Redux/Slices/UserSlices';
import { useNavigate } from 'react-router-dom';

const LoginSingnup = () => {
  const email = useRef()
  const password = useRef()
  const dispatch = useDispatch()
  const { error } = useSelector(state => state.User)
  const { isAuth } = useSelector(state => state.User)
  const {role} = useSelector(state => state.User)
  const navigate = useNavigate();
  useEffect(() => {
      if (isAuth) navigate('/')
  }, [isAuth])
  
  return (
    
      <div>
          <Form onSubmit={(event) => {
              event.preventDefault()
              dispatch(userLogin({ email: email.current.value, password: password.current.value }))
          }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" ref={email} />
                  <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" ref={password} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <Button variant="primary" type="submit">
                  Submit
              </Button>
          </Form>
      </div>)
}

export default LoginSingnup