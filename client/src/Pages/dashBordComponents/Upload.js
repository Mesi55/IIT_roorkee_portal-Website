import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import uploadImag from "../../Images/photoCollections/comperssed/malothu-santhosh-9jcbVG_Dzh8-unsplash-min.jpg";
import "../dashBordComponents/DashBoard.css";

function Upload() {
  return (
    <Container>
      {/* <Row> */}
      <Col>
        <Card
          border="gray"
          className="mb-3 mb-md-0 border-bottom-0 main-dash  rounded-top "
          style={{
            backgroundImage: `url(${uploadImag})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: 450,
            width: 300,
            borderRadius: 30,
            borderWidth: 20,
          }}
        >
          <Card.Body>
            <br />
            <Card.Title className=" fs-5 text ">
              Upload Course Files Here
            </Card.Title>
            <br />
            <br /> <br />
            <br />
            <br />
            <br />
            <Card.Text>
              <div className="mt-4">
                <Link to="/phdSectionUpload" className="cardButton2">
                  For PhD Section
                </Link>
                <Link to="/mtechSectioUpload" className="cardButton2 ">
                  For MTech Section
                </Link>
                <Link to="/btechSectionUpload" className="cardButton2  ">
                  For BTech Section
                </Link>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      {/* </Row> */}
    </Container>
  );
}

export default Upload;
