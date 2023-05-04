import React from "react";
import { Col, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      
    

      <Row className="mt-5">
        <Col
         xs={6} md={4}>
         <h2>Tell us the differences between uncontrolled and controlled components</h2>
         <p>In React, controlled components refer to components that have their <br /> state and behavior controlled by the parent component. These components rely on props <br /> passed down from the parent component to update their state and behavior. Uncontrolled components refer to <br /> components that manage their own state internally.</p>
        </Col>
        <Col xs={6} md={4}>
          <h2>How to validate React props using PropTypes</h2>
          <p>As your app grows, you can catch a lot of bugs with typechecking. For some applications, <br /> you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. <br /> But even if you don’t use those, React has some built-in typechecking abilities. To run <br /> typechecking on the props for a component, you can assign the special propTypes property:</p>
        </Col>
        <Col xs={6} md={4}>
          <h2>Tell us the difference between nodejs and express js.</h2>
          <p>Express is a minimal and flexible node. js web application framework, <br /> providing a robust set of features for building single and multi-page, and hybrid web applications. <br /> On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
        </Col>
        <Col xs={6} md={4}>
        
        <h2>What is a custom hook, and why will you create a custom hook?</h2>
        <p>Custom React JS hooks offer reusability as when a custom hook is created, <br /> it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as <br /> a custom hook does not need to be rendered again and again while rendering the whole code</p>
        </Col>
      </Row>
    </div>
  );
};

export default Blog;
