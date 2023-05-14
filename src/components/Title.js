import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

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
