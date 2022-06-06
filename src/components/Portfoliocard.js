import React, { useState } from "react";
import { Container, Carousel, Image } from "react-bootstrap";

export default function Portfoliocard(props) {
  const [index, setIndex] = useState(0);
  const handleCarousel = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const refresh = () => {
    props.setSingleView(true);
  };
  const handleClick = (artwork) => {
    props.setSingleViewData(artwork);
    refresh();
  };
  return (
    <Container fluid className="py-5">
      <h3 className="mb-3">{props.data.title}</h3>
      <h4 className="mb-3"> {props.data.subTitle}</h4>
      {props.data.img.length > 1 ? (
        <Carousel
          fade
          activeIndex={index}
          onSelect={handleCarousel}
          className="mb-3"
          style={{ boxShadow: "2px 2px 3px rgba(0,0,0,0.2)" }}
          onClick={() => handleClick(props.data)}
        >
          {props.data.img.map((img) => {
            return (
              <Carousel.Item interval={8000} key={img}>
                <img
                  className="d-block w-100"
                  src={`${img}`}
                  alt={`${props.data.title} thumbnail`}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      ) : (
        <Image
          className="d-block w-100 mb-3"
          src={props.data.img[0]}
          alt={`${props.data.title} thumbnail`}
          style={{ boxShadow: "2px 2px 3px rgba(0,0,0,0.2)" }}
          onClick={() => handleClick(props.data)}
        />
      )}

      {props.data.p1 ? <p className="mb-3">{props.data.p1}</p> : ""}
      {props.data.p2 ? <p className="mb-3">{props.data.p2}</p> : ""}

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
    </Container>
  );
}
