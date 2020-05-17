import React, { Component } from "react";

import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import imageCards from "../../image/eventposter.jpg";

import "./ShowAll.css";

class ShowAll extends Component {
  render() {
    return (
      <div>
        {/* Sisa Map data , dan pakai carousel slide kesamping lebih bagus keknya */}
        <Navbar />
        <Container className="mt-5 pt-5 mb-5">
          <Row>
            <Col>
              <h2 className="text-center mt-3">DISCOVER EVENTS</h2>
              <div className="underlineShowAll mx-auto"></div>
            </Col>
          </Row>

          <Row>
            <h2 className="mt-5 pt-2">Visual Arts</h2>
          </Row>
          <Row>
            <div className="underlineShowAll mb-4"></div>
          </Row>

          <Row>
            <CardDeck className=" pt-2">
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020 PM
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>

          <Row>
            <h2 className="mt-5 pt-2">Films</h2>
          </Row>
          <Row>
            <div className="underlineShowAll mb-4"></div>
          </Row>

          <Row>
            <CardDeck className="pt-2">
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020 PM
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>

          <Row>
            <h2 className="mt-5 pt-2">Sports</h2>
          </Row>
          <Row>
            <div className="underlineShowAll mb-4"></div>
          </Row>

          <Row>
            <CardDeck className=" pt-2">
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020 PM
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>

          <Row>
            <h2 className="mt-5 pt-2">Festival</h2>
          </Row>
          <Row>
            <div className="underlineShowAll mb-4"></div>
          </Row>

          <Row>
            <CardDeck className="pt-2">
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020 PM
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>

          <Row>
            <h2 className="mt-5 pt-2">Fashion</h2>
          </Row>
          <Row>
            <div className="underlineShowAll mb-4"></div>
          </Row>

          <Row>
            <CardDeck className="pt-2">
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020 PM
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>

          <Row>
            <h2 className="mt-5 pt-2">Nightlife</h2>
          </Row>
          <Row>
            <div className="underlineShowAll mb-4"></div>
          </Row>

          <Row>
            <CardDeck className="pt-2">
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020 PM
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>

          <Row>
            <h2 className="mt-5 pt-2">Charity</h2>
          </Row>
          <Row>
            <div className="underlineShowAll mb-4"></div>
          </Row>

          <Row>
            <CardDeck className="pt-2">
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020 PM
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default ShowAll;
