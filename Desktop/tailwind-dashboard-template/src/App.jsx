import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LeftSide from './page_couverture/Leftside';
import RightSide from './page_couverture/Rightside';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import './css/style.css';
import './charts/ChartjsConfig';

// Import des pages
import Dashboard from './pages/Dashboard';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // déclenché lors du changement de route

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

function HomePage() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <LeftSide />
          </Col>
          <Col>
            <RightSide />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
