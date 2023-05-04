import React from "react";
import {  Button, Card, Col, Container, Row } from "react-bootstrap";
import './ChefShow.css'
import { Link, useParams } from "react-router-dom";

const ChefShow = ({ chef }) => {
  const { chef_name, image, Experience, Total_recipes, Likes } = chef;
  return (
<div  >
<div className="chef-container">
  <Card className="text-center " style={{ width: '18rem'  }}>
      <Card.Img style={{width:'250px',height:'250px', margin:'18px'}} variant="top" src={image} />
      <Card.Body >
        <Card.Title>{chef_name}</Card.Title>
        <Card.Text>
        Chef responsibilities include studying recipes, setting up menus and preparing high-quality dishes. 
        </Card.Text>
        <h4>Experience : {Experience}</h4>
        <h5>Recipe : {Total_recipes}</h5>
        <Link to={`/details/${chef?.id}`}><Button className="bg-dark">Details </Button></Link>
      </Card.Body>
    </Card>
               </div>

</div>
  );
};

export default ChefShow;
