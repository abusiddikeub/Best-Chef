import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Router/AuthProvider";
import { Button } from "react-bootstrap";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import {  FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

const {signIn} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();
console.log(location);
const from = location.state?.from?.pathname || '/home'

const [user, setUser] = useState(null);
const auth = getAuth(app);
console.log(auth);
const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        // console.log("error", error.message);
        console.log(error.message)
      });
  };


const [error,setError] = useState('');
const [success,setSuccess] = useState('')



const handleLoginPage = event =>{
  event.preventDefault();
  setSuccess('')
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email,password);


signIn(email,password)
.then(result =>{
const login = result.user;
console.log(login);
setError('')
     event.target.reset();
     setSuccess('Successfully The Login page !!!!!!')
     navigate(from,{replace:true})

})
.catch(error =>{
  setError(error)
  
})

}

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
            <div className="border w-100 m-auto text-center p-5">
              <form 
              onSubmit={handleLoginPage}
            >
                <input
                  className="email p-3 m-2"
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                />
                <input
                  className="password p-3 m-2"
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  required
                />
                <button className="btn btn-dark w-75 p-2 mt-3">Login</button>
                <p className="p-2">
                  <small className="text-dark">
                    are you new? register here..
                  </small>
<Link to="/register">Register</Link>
                </p>

       
      <button className="bg-dark text-white mb-2 rounded p-2" onClick={handleGoogleSignIn}><FaGoogle/> Google login</button>
      <br />

   <Button className="mb-2 bg-dark"> <FaGithub></FaGithub> GitHub Sign-in</Button>
              </form>
           
        <p className="text-success">{success}</p>     
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="w-100"
              src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1683024929~exp=1683025529~hmac=035f819b4bfa7837703b98438295fbb289c61458d4e8ef7ca46955ba17e5084c"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
