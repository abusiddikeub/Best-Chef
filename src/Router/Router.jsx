import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DetailsPage from "../Main component/detailsPage/Details";
import Details from "../Main component/detailsPage/Details";



const router = createBrowserRouter([
{
 path:'/',
 element:<Main></Main>,
 children:[
               {
path:'/',
element:<Home></Home>
               },
               {
               path:'/blog',
               element:<Blog></Blog>
               },
              {
               path:'/login',
               element:<Login></Login>
              },
              {
               path:'/register',
               element:<Register></Register>
              },

                {
                               path:'*',
                               element:<Error></Error>

                }
 ]
},

{
  path:"details/:id",
  element:<Details></Details>
}



])
export default router