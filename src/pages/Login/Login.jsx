import React from "react";
import { Button } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const auth = getAuth(app);

const Login = () => {

const handleLogin =(event) =>{
                console.log('btn')
                event.preventDefault();

                const email = event.target.email.value;
                const password = event.target.password.value;
                console.log(email,password)

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
               <div className="container">
                 <div className="row d-flex justify-content-center align-items-center">
                   <div className="col-md-6 ">
                     <div className="border w-100 m-auto text-center p-5">
                       <form onSubmit={handleLogin} action="">
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
                         <button
                           className="btn btn-dark w-75 p-2 mt-3"
                         >
                           Login
                         </button>
                         <p className="p-2">
                           <small className="text-dark">
                             are you new? register here..
                           </small>
                           <Link to='/register'>Register</Link>
                         </p>
                       </form>
                     </div>
                   </div>
                   <div className="col-md-6">
                     <img
                       className="w-100"
                       src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1683024929~exp=1683025529~hmac=035f819b4bfa7837703b98438295fbb289c61458d4e8ef7ca46955ba17e5084c"
                       alt=""
                     />
                   </div>
                   {/* <SocialLoginBtn></SocialLoginBtn> */}
                 </div>
               </div>
             </div>
  );
};

export default Login;