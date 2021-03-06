import React, { useState } from "react";
import { Container, Carousel, Image, Row, Col } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

export default function PortfolioItemModal(props) {
  const [index, setIndex] = useState(0);
  const handleCarousel = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container
      className="p-3"
      style={{
        position: "fixed",
        width: "100vw",
        height: "80vh",
        zIndex: "200",
        top: "15vh",
        right: "0",
        left: "0",
        backgroundColor: "white",
        boxShadow: "300px 300px 300px 400px rgba(0,0,0,0.4)",
      }}
    >
      <Row>
        <Col md={6} className="d-flex">
          {props.data.img.length > 1 ? (
            <Carousel
              variant="dark"
              fade
              activeIndex={index}
              onSelect={handleCarousel}
              className="mt-5 mb-3"
              style={{ alignSelf: "center" }}
            >
              {props.data.img.map((img) => {
                return (
                  <Carousel.Item interval={8000} key={img} className="d-flex">
                    <Image
                      fluid
                      className="d-block m-auto"
                      src={`${img}`}
                      alt={`${props.data.title} thumbnail`}
                      style={{
                        maxHeight: "65vh",
                        alignSelf: "center",
                      }}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          ) : (
            <Image
              fluid
              className="d-block m-auto mt-5"
              src={props.data.img[0]}
              alt={`${props.data.title}`}
              style={{
                maxHeight: "65vh",
                alignSelf: "center",
              }}
            />
          )}
        </Col>
        <Col md={5} className="p-5">
          <h3>{props.data.title}</h3>
          <h4 className="mb-3 mt-5"> {props.data.subTitle}</h4>
          <div style={{ overFlow: "scroll" }}>
            {props.data.p1 ? <p className="mb-3">{props.data.p1}</p> : ""}
            {props.data.p2 ? <p className="mb-3">{props.data.p2}</p> : ""}
          </div>

          <Row>
            <Col md={6}>
              {props.data.sitelink ? (
                <p className="mb-2">
                  {" "}
                  <a href={props.data.sitelink}> {props.data.title} </a>
                </p>
              ) : (
                ""
              )}
              {props.data.git ? (
                <p>
                  {" "}
                  <a href={props.data.git}> Git Repo</a>{" "}
                </p>
              ) : (
                ""
              )}
            </Col>
          </Row>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <AiOutlineClose
            style={{ fontSize: "32px" }}
            onClick={() => props.setSingleView(false)}
          />
        </Col>
      </Row>
    </Container>
  );
}
