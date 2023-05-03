import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import bg from '../../../assets/bg.jpg'
import'./Home.css'
import { FaAngleLeft, FaArrowRight } from "react-icons/fa";
import Banner from "../../Banner/Banner";
import SideBanner from "../../sideBanner/SideBanner";
import ExtraBanner from "../../Extra banner/ExtraBanner";
import ChefData from "../../../Main component/ChefData/ChefData";


const Home = () => {
  return (

    <Container>
        <div className="background text-white text-center ">
    <div className="container-text">
    <h1 className="">Best Food For 
          <br />
          Your Taste
        </h1>
        <h5 className="mb-5">Food is one of the basic necessities of life. <br /> Food contains nutrients—substances essential for the growth, <br /> repair, and maintenance of body <br /> tissues and for the regulation of vital processes.</h5>
        <Button className="bg-dark p-2"> <span className="p-2"> See More<FaArrowRight className="ms-2"></FaArrowRight></span> </Button>
    </div>
      </div>
      <div>
        <ExtraBanner></ExtraBanner>
      </div>
      <div>
        <SideBanner></SideBanner>
      </div>

      <div>
        <ChefData></ChefData>
      </div>
      <div>
      <Banner></Banner>
      </div>
    </Container>

  );
};

export default Home;
