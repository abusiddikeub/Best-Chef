import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import banner from '../../assets/banner.png';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.jpg';

const Banner = () => {
  return (
    <Container className="mt-4 mb-4 bg-dark rounded p-3 text-center" >
      <Row>
        <Col sm={12} md={4}>
          <Image style={{height:'150px',padding:'10px'}}  src={banner}roundedCircle />
        </Col>
        <Col sm={12} md={4}>
          <Image style={{height:'150px',padding:'10px'}} src={banner1}roundedCircle />
        </Col>
        <Col sm={12} md={4}>
          <Image style={{height:'150px',padding:'10px'}} src={banner2}roundedCircle />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
