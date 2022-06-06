import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import projectData from "../projectData";
import PortfolioCard from "./Portfoliocard";
import PortfolioItemModal from "./PortfolioItemModal";

export default function Portfolio() {
  const [singleView, setSingleView] = useState(false);
  const [singleViewData, setSingleViewData] = useState({});

  return (
    <div id="portfolio" className="mt-3">
      {singleView && window.innerWidth > 780 ? (
        <PortfolioItemModal
          data={singleViewData}
          setSingleView={setSingleView}
        />
      ) : (
        ""
      )}
      <Row className="mt-3">
        {" "}
        <h2 style={{ textAlign: "center" }}> Portfolio</h2>
      </Row>
      <Row className="mt-3">
        {projectData.map((project) => {
          return (
            <Col
              className="mt-3"
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
              key={project.title}
            >
              <PortfolioCard
                data={project}
                setSingleView={setSingleView}
                setSingleViewData={setSingleViewData}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
