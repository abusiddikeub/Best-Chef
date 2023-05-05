import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import profile from '../../assets/image.14.jpg';
import logo from '../../assets/logo.jpg';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Router/AuthProvider";



const Header = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogout=()=>{
    logOut()
    .then(result=>{
      const logout =result.user;
      console.log(logout)
    })

    .catch(error =>{
      console.log(error);
    })

  }
  return (
 <Container>
   
    <Navbar className="mt-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="fs-3  font-bold"> <span><Image style={{height:'45px', width:'45px'}} src={logo}roundedCircle /></span>  B.FOOD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto py-2 px-4 ">
        
<div className="mt-2 me-5">
<NavLink
  href='/home'
  style={({ isActive, isPending }) =>{
    return{
      fontWeight:isActive ? "bold" : "",
      color:isPending ? "isPanding" : "white",
    };
  }
   
  }
>
  Home
</NavLink>
</div>
          
            
<div className="mt-2 me-5">
<NavLink
  to="/blog"
  style={({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "yellow" : "white",
    };
  }}
>
<Link className="m-2" to='/blog'> Blog </Link>
</NavLink>
</div>

<div className="mt-1 mb-2 me-5">
<Image style={{height:'45px', width:'45px'}} src={profile}roundedCircle />
</div>

<div className="mt-1 me-1">
  
{ user ?
              <Button onClick={handleLogout} variant="secondary">  Logout</Button>:
           <Link to='/login'> <Button variant="secondary">  Login</Button></Link>
            }
</div>
             
          
          </Nav>
        </Navbar.Collapse>
    
      </Container>
     
    </Navbar>
  
 </Container>
  );
};

export default Header;
