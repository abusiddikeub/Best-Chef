import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../../share/Header/Header";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Details = () => {
  const [news, setNews] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/details/${id}`)
      .then((res) => res.json())
      .then((data) => setNews(data))

      .catch((error) => console.log(error));
  }, []);
  console.log(news);

  return (
    <div>
      <Header></Header>

      <Container>
        <Row className="mt-5 border p-2 ">
          <Col>
            <img
              style={{ height: "350px", width: "350px", marginLeft: "20px" }}
              src={news?.image}
              alt=""
            />
          </Col>
          <Col>
            <div className=" p-3 text-center mt-4">
              <h3> Chef Name: {news?.chef_name} </h3>
              <p className="fs-5">
                {" "}
                Description: <small>{news?.description} </small>
              </p>
              <h5>Likes: {news?.Likes}</h5>
              <h5>Number of Recipe: {news?.Total_recipes}</h5>
              <h5>Experience: {news?.Experience}</h5>
            </div>
          </Col>
        </Row>

        <h3 className="text-center text-success mt-5">Recipe</h3>
        <Row className="mt-5 border p-2 ">
          <Col>
            <img
              style={{ height: "350px", width: "350px", marginLeft: "20px" }}
              src={news?.img}
              alt=""
            />
          </Col>
          <Col>
            <div className=" p-3 text-center mt-4">
              <h4> Recipe Name: {news?.recipe_name} </h4>
              <p className="fs-5">
                {" "}
           Cooking Method: <small>{news?.cooking_method}</small>
              </p>
              <h5>total_view: {news?.total_view} </h5>
<Button className="bg-dark">Add Favorite </Button> <br />
      
              <Link to='/'>Back To Home</Link>
            </div>
          </Col>
        </Row>


        <Row className="mt-5 border p-2 ">
          <Col>
            <img
              style={{ height: "350px", width: "350px", marginLeft: "20px" }}
              src={news?.img1}
              alt=""
            />
          </Col>
          <Col>
            <div className=" p-3 text-center mt-4">
              <h4> Recipe Name: {news?.recipe_name1} </h4>
              <p className="fs-5">
                {" "}
           Cooking Method: <small>{news?.cooking_method}</small>
              </p>
              <h5>total_view: {news?.total_view} </h5>
<Button className="bg-dark">Add Favorite </Button> <br />
      
              <Link to='/'>Back To Home</Link>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 border p-2 ">
          <Col>
            <img
              style={{ height: "350px", width: "350px", marginLeft: "20px" }}
              src={news?.img2}
              alt=""
            />
          </Col>
          <Col>
            <div className=" p-3 text-center mt-4">
              <h4> Recipe Name: {news?.recipe_name2} </h4>
              <p className="fs-5">
               
           Cooking Method: <small>{news?.cooking_method}</small>
              </p>
              <h5>total_view: {news?.total_view} </h5>
<Button className="bg-dark">Add Favorite </Button> <br />
      
              <Link to='/'>Back To Home</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
