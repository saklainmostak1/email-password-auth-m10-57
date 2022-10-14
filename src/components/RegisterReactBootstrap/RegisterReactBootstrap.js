import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);


const RegisterReactBootstrap = () => {
  const [passwordError, setPasswordError] = useState()
    const handleRegister = event =>{
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(password, email)
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
          setPasswordError('Please Provide At Least Two Upper Case')
          return;
        }
        if(password.length < 6){
          setPasswordError("Please Provide at least 6 digit")
          return
        }
        if(!/(?=.*[!@#$&*])/.text(password)){
          setPasswordError('Please add at least one special value')
          return
        }
        setPasswordError('')


        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-warning'>Please Register !!!!</h3>
            <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <p className='text-danger' >{passwordError}</p>
      <Button variant="primary" type="submit">
        Register
      </Button>
      <p><small>If you already a user please <Link to='/login'>Log in</Link> </small></p>
    </Form>
        </div>
    );
};

export default RegisterReactBootstrap;