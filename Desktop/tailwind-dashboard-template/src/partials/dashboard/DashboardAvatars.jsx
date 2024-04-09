import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import User01 from '../../images/user-36-01.jpg';
import User02 from '../../images/user-36-02.jpg';
import User03 from '../../images/user-36-03.jpg';
import User04 from '../../images/user-36-04.jpg';

function DashboardAvatars() {
  return (
    <Container fluid className="mb-4">
      <Row className="justify-content-center justify-content-sm-start">
        <Col className="d-flex flex-wrap align-items-center">
          <Link to="#0">
            <Image src={User01} roundedCircle width="36" height="36" alt="User 01" className="mr-3 mb-3" />
          </Link>
          <Link to="#0">
            <Image src={User02} roundedCircle width="36" height="36" alt="User 02" className="mr-3 mb-3" />
          </Link>
          <Link to="#0">
            <Image src={User03} roundedCircle width="36" height="36" alt="User 03" className="mr-3 mb-3" />
          </Link>
          <Link to="#0">
            <Image src={User04} roundedCircle width="36" height="36" alt="User 04" className="mr-3 mb-3" />
          </Link>
          <Button variant="light" className="d-flex align-items-center justify-content-center rounded-circle bg-white border border-secondary shadow-sm ml-2 mb-3">
            <span className="sr-only text-warning">Add new user</span>
            <svg className="w-4 h-4" viewBox="0 0 16 16">
              <path fill="#6c757d" d="M14.5 7H9V1c0-.55-.45-1-1-1s-1 .45-1 1v6H1c-.55 0-1 .45-1 1s.45 1 1 1h6v6c0 .55.45 1 1 1s1-.45 1-1V9h6c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
            </svg>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardAvatars;
