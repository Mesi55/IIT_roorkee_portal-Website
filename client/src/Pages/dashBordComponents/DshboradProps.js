import React from 'react'
import { Container, Row, Col, Card, Button, } from "react-bootstrap";
function DshboradProps(props) {
 
        const { imageUrl, title, subtitle, buttonLabel, buttonIcon, url , styling,stylin,subti} = props;
      
        return (
          <Container>
            {/* <Row> */}
              <Col>
                <Card
                  border="black"
                  className="mb-2 mb-md-0 main-dash   border-bottom-0 rounded-top "
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: 450,
                   width: 300,
                    borderRadius: 30,
                    borderWidth: 20,
                    alignItems: "center",
                    opacity : 0.9,
                  }}
                >
                  <Card.Body>
                    <br />
                    <Card.Title className="fs-4 text" style={styling}>{title}</Card.Title>
                    <Card.Text  style={stylin}>
                      <h6>{subtitle}</h6>
                      <h5>{subti}</h5>
                    </Card.Text>
                  </Card.Body>
                  <a className='cardButton' href={url}>{buttonLabel}</a>
                </Card>
              </Col>
            {/* </Row> */}
          </Container>
        );
      }
export default DshboradProps