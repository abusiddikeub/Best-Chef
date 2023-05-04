import React, { useContext, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Router/AuthProvider";
import { Spinner } from "react-bootstrap";


const Register = () => {

const {Registered,loading} = useContext(AuthContext);
const [error,setError] = useState('')
const [success,setSuccess] = useState('')

const handleRegistered = event =>{
  event.preventDefault();
   setSuccess('')
  const form = event.target;
  const name = form.name.value;
  const photo = form.photo.value;
  const email = form.email.value;
  const password = form.password.value;

  console.log(name,photo,email,password);

if(loading){
  return  <Spinner animation="grow" variant="warning" />
   
  
}

  Registered(email,password)
 
  .then(
    result =>{
     const register = result.user;
     console.log(register);
     setError('')
      setSuccess('')
    event.target.reset();
      setSuccess('Successfully The Register page !!!!!!')
   
    })

  .catch(error =>{
    setError(error.message);

  
     if(password.length<6){
      setError('please add at least 6 characters in your password')
    }
    
  })

}


  return (
<div>
               <h2 className="text-center mt-5">Please Register</h2>
<div className="mx-auto w-50 border mt-4 p-5 rounded">

      <Form 
      onSubmit={handleRegistered}
      
      >

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email"  required/>
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Your Name"  required/>
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label> Photo URL
          </Form.Label>
          <Form.Control type="text" name='photo' placeholder="photo URL"  required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  name = 'password' placeholder="Password"  required/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
      <div>
        <small>already have register ? Please <Link to='/login'>Login</Link></small>
      </div>
      <p className="text-danger">{error}</p>
      {/* <p className="text-primary">{success}</p> */}
    </div>
</div>
  );
};

export default Register;
