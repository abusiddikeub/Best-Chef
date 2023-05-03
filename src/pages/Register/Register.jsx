import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Register = () => {


const handleRegister = (event) =>{
               event.preventDefault ();

const email = event.target.email.value;
const name = event.target.name.value;
const url = event.target.url.value
const password = event.target.password.value;

console.log(email,name,password,url);

createUserWithEmailAndPassword(auth,email,password)

.then(result =>{
               const logged = result.user;
               console.log(logged);
})
.catch(error =>{
               console.error(error);
})


}


  return (
<div>
               <h2 className="text-center mt-5">Please Register</h2>
<div className="mx-auto w-50 border mt-4 p-5 bg-info rounded">
      <Form onSubmit={handleRegister}>

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email"  required/>
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Your Name"  required/>
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>URL
          </Form.Label>
          <Form.Control type="text" name='url' placeholder="Enter Your Url"  required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  name = 'password' placeholder="Password"  required/>
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
      <div>
        <small>already have register ? Please <Link to='/login'>Login</Link></small>
      </div>
    </div>
</div>
  );
};

export default Register;
