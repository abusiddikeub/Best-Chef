import React from "react";
import { Carousel } from "react-bootstrap";
import bugger from '../../assets/bugger.jpg';
import bugger1 from '../../assets/bugger1.jpg';
import bugger2 from '../../assets/bugger2.webp';

const ExtraBanner = () => {
  return (
    <Carousel className="mt-4">
      <Carousel.Item interval={1000}>
        <img
        style={{height:'600px', width:'100%'}}
          className="d-block"
          src={bugger}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-dark">Veggie burger</h3>
          <p className="text-dark">Some examples are Matsusaka beef, Kobe beef, Yonezawa beef, Ōmi beef, and Sanda beef.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
         style={{height:'600px', width:'100%'}}
          className="d-block "
          src={bugger1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="text-dark">Bean burger</h3>
          <p className="text-dark">Some examples are Matsusaka beef, Kobe beef, Yonezawa beef, Ōmi beef, and Sanda beef.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{height:'600px', width:'100%'}}
          className="d-block"
          src={bugger2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="text-dark">Wild salmon burger.</h3>
          <p >Some examples are Matsusaka beef, Kobe beef, Yonezawa beef, Ōmi beef, and Sanda beef.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ExtraBanner;
