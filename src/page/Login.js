import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authenticateAction } from '../redux/actions/authenticateAction'

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginUser = (e) => {
    e.preventDefault();
    console.log("login user function issue")
    dispatch(authenticateAction.login(id, password));
    navigate("/");
  }
  return (
    <Container>
      <Form onSubmit={(e) => loginUser(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setId(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Login
      </Button>
    </Form>
    </Container>
  )
}

export default Login
