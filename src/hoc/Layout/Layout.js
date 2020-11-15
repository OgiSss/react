import React from 'react';
import './Layout.scss';
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

const layout = props => {

  return (
    <React.Fragment>

      <Container fluid>
        <Row>
          {props.isAuthenticated && <Navbar />}
        </Row>
        <Row>
          <Col xs={2} id="sidebar-wrapper bg-light">
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <main className={!props.isAuthenticated ? "Content" : ''}>{props.children}</main>
          </Col>
        </Row>

      </Container>
    </React.Fragment>
  );
};


export default layout;
