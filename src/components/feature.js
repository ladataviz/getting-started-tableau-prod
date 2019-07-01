import React, { Component } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export default props => (
  <Row className="justify-content-md-center" style={{ padding: "0 10%" }}>
    {/* <Col
      style={{
        position: "relative",
        top: "50%",
        margin: "auto auto",
      }}
    >
      <h2
        style={{
          margin: "0 20%",
          textAlign: "center",
        }}
      >
        <i>{props.text}</i>
      </h2>
    </Col> */}
    <Col
      md={12}
      style={{
        position: "relative",
        top: "50%",
        margin: "auto auto",
        textAlign: "center",
      }}
    >
      <img style={{ maxHeight: "290px", margin: "0" }} src={props.gif} />
    </Col>
    <Col
      md={12}
      style={{
        margin: "auto auto",
        textAlign: "center",
      }}
    >
      <p>{props.text}</p>
    </Col>
  </Row>
)
