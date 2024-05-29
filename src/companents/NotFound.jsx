import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <Container className="text-center" style={{ marginTop: '100px' }}>
      <Row>
        <Col>
          <h1 className="display-1">404</h1>
          <p className="lead">Upsss.</p>
          <img src="/public/images/notfound.avif" alt="" />
          <div className="button p-5">        
            <Button variant="primary" onClick={goHome}>Return Home Page</Button>
          </div>

        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
