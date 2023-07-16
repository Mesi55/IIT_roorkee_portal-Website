import React from "react";
import newresource from "../../Images/photoCollections/comperssed/v.jpg";
import "./DashBoard.css"
import {Link} from 'react-router-dom'
import { Container, Row, Col, Card} from "react-bootstrap";
function Resources() {
  
  return (
      <Container>
      <Row>
        <Col>
          <Card
            border="gray"
            className="mb-3 mb-md-0 border-bottom-0  main-dash rounded-top"
            style={{
              backgroundImage: `url(${newresource})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: 450,
              width: 300,
              borderRadius:30,
              borderWidth: 20,
            }}
          >
            <Card.Body>
              <br />
              <Card.Title className=" fs-5 rounded courseMaterial text bg-white text-black">Get uploaded Course materials</Card.Title>
              <br /><br/> 
              <Card.Text  > 
                <div className="akafiOne">
              <Link to="/phdSectionDisplay" className='cardButton3   ' >Show PhD Resources</Link>
              <Link to="/mtechSectioDisplay" className='cardButton3 my-1 ' >Show M-Tech Resources</Link>
              <Link to="/btechSectionDisplay" className='cardButton3 my-1' >Show B-Tech Resources</Link>
            
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>


);


}

export default Resources


