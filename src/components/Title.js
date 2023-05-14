import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function Title(props) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h4>{props.title}</h4>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};
