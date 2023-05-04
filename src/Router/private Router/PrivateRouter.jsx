import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRouter = ({children}) => {
               const {user,loading} = useContext(AuthContext)
               const location = useLocation();
               console.log(location)
              
               if(loading){
                              return (
                                        <div className=''>
                                                  <Spinner className='text-center' animation="border" role="status">
                                             <span className="visually-hidden">Loading...</span>
                                           </Spinner>
                                        </div>
                              )
               }

               if(user){
                              return children
               }
               return (
                              <Navigate state={{from:location}} to='/login' replace>
                                             
                              </Navigate>
               );
};

export default PrivateRouter;