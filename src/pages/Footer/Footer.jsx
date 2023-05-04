import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    
        <Container className="">
          <Row >
            <Col sm={12} md={4} className="text-center">
            <div >
          <h1 className="m-2">Let's  <span className="text-success">Cook</span>....</h1>
        <div className="">
        <FaFacebookF className="text-primary fs-1 ms-3 "></FaFacebookF>
          <FaTwitter className="text-danger fs-1 ms-3"></FaTwitter>
          <FaYoutube className="text-danger fs-1 ms-3"></FaYoutube>
        </div>
        </div>
            </Col>

            <Col sm={12} md={4} className="text-center mt-4">
            <div className="">
          <h3 className="fs-2">Company</h3>
          <p>Work </p>
          <p>Latest News </p>
          <p>Careers </p>
        </div>
            </Col>

            <Col sm={12} md={4}  className="text-center mt-4">
            <div>
          <h3 className="fs-2">Recipes</h3>
          <p>Prototype</p>
          <p>Plans & Pricing</p>
          <p>Customers</p>
          <p>Integrations</p>
        </div>
            </Col>
          </Row>
        </Container>

  );
};

export default Footer;
