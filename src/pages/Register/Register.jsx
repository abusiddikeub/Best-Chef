import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Link } from "react-router-dom";

const Register = () => {

  return (
<div>
               <h2 className="text-center mt-5">Please Register</h2>
<div className="mx-auto w-50 border mt-4 p-5 bg-info rounded">
      <Form >

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
