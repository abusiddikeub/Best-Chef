import React from "react";
import SideBanners from "../../assets/sidephoto.webp";
import { Col, Container, Image, Row } from "react-bootstrap";

import profile from '../../assets/image.14.jpg';
import { FaSplotch } from "react-icons/fa";

const SideBanner = () => {
  return (
    <div className="mt-5">
      <Container>
      <Row>
        <Col sm={12} md={6}> 
        <Image style={{ height: "300px" }} src={SideBanners}  />
        </Col>
        <Col sm={6} md={6}>    
         <h1>We Provide <br /> <span>Healthy </span> Food </h1>
        <p>The importance of food is obvious and essential. Healthy food provides us the nutrients and energy to develop and grow, be active and healthy, to move, play, work, think and learn. 
Food and water are the main sources of nutrition and strengthening the body, but many of the foods we eat do not have any nutritional value.  </p>
<div className="d-flex">
<Image style={{height:'45px', width:'45px', margin:'10px'}} src={profile}roundedCircle />
<Image style={{height:'45px', width:'45px', margin:'10px'}} src={profile}roundedCircle />
<Image style={{height:'45px', width:'45px', margin:'10px'}} src={profile}roundedCircle />
<div>
               <p className="ms-3 mb-2">Our Happy Customer</p>
              <div className="d-flex">
              <p><FaSplotch className=" text-warning ms-3"></FaSplotch></p>
               <p><FaSplotch className=" text-warning ms-3"></FaSplotch></p>
               <p><FaSplotch className=" text-warning ms-3"></FaSplotch></p>
              </div>
</div>
</div>
</Col>


      </Row>
      
    </Container>
</div>

   
  );
};

export default SideBanner;
