import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Form,
  Card,
  CardDeck,
} from "react-bootstrap";

import axios from "axios";
import { Link } from "react-router-dom";

import "./Trend.css";

// const url = `${process.env.REACT_APP_API_URL}`;

const Trend = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = `https://api.indrakawasan.com/`;

    axios
      .get(`${URL}event/show`)
      .then((res) => {
        const data = res.data.slice(1, 5);
        setData(data);
      })
      .catch((err) => {
        throw(err);
      });
  }, []);

  const showTrend = data.map((item, index) => {
    const URL = `https://api.indrakawasan.com/`;
    return (
      <Col
        lg={3}
        md={6}
        sm={10}
        className="my-2 mt-5 pt-2 pl-0 pr-0"
        key={index}
      >
        <CardDeck>
          <Card border="secondary" className="trendCard mr-5">
            <Card.Img
              variant="top"
              src={`${URL}${item.imageEvent}`}
              alt="imageEvent"
            />
            <div style={{ borderTop: "1px solid black" }}></div>
            <Card.Body className="mainBody bg-white">
              <Card.Text>{item.title}</Card.Text>
              <Card.Text>Category : {item.category}</Card.Text>
              <Card.Text>
                <FontAwesomeIcon icon={faCalendar} /> {item.date}
              </Card.Text>
              <Card.Text>
                <FontAwesomeIcon icon={faClock} /> {item.time}
              </Card.Text>
              <Card.Text>
                <i className="fas fa-map-marker-alt mr-2"></i>
                {item.location}
              </Card.Text>
              <Link
                to={`/event/${item.id}`}
                className="btn btn-outline-danger btn-block"
              >
                See More
              </Link>
            </Card.Body>
          </Card>
        </CardDeck>
      </Col>
    );
  });

  return (
    <div>
      <Jumbotron fluid className="trend-background">
        <Container className="containerHost">
          <h1 className="mb-4 hostEvent">Host Your Own Events</h1>
          <Form inline>
            <Link to="/event/create">
              <Button className="buttonCreate both-line-light mx-auto">
                Create Events
              </Button>
            </Link>
          </Form>
        </Container>
      </Jumbotron>

      <Container className="mb-5">
        <Row>
          <h2 className="mb-2 mt-5 ml-5">TOP TRENDINGS EVENTS</h2>
        </Row>
        <Row>
          <div className="underlineTrend mb-2 ml-5"></div>
        </Row>

        <Row className="rowEvent rowTrend">{showTrend}</Row>
      </Container>
    </div>
  );
};

export default Trend;
