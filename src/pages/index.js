import React from "react"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Book from "../components/book"
import Button from "react-bootstrap/Button"
import dashgif from "../images/dash.gif" // Tell Webpack this JS file uses this image
import Feature from "../components/feature"
import vizgif from "../images/vizgif.gif"
import exploregif from "../images/explore.gif" // Tell Webpack this JS file uses this image$
import picme from "../images/me.png" // Tell Webpack this JS file uses this image
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const IndexPage = () => (
  <Layout>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <SEO title="Getting Started with Tableau" />
    <Container style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <Book />
        </Col>
        <Col
          style={{
            position: "relative",
            top: "50%",
            margin: "auto auto",
          }}
        >
          <h1>Getting Started with Tableau 2019.2</h1>
          <p>
            <i>The most up-to-date Tableau book you can find!</i>
          </p>
          <Button>Purchase</Button>
        </Col>
      </Row>
    </Container>
    <Container
      style={{
        paddingTop: "30px",
        paddingBottom: "30px",
        margin: "0",
        maxWidth: "100%",
      }}
    >
      <Row>
        <Col
          style={{
            padding: "0 5%",
          }}
        >
          <p>
            <strong>
              What is <i>Getting Started with Tableau 2019.2</i>:
            </strong>
          </p>
          <p>
            Tableau is the leading data visualization tool and is regularly
            updated with new functionalities and features. The latest release,
            Tableau 2019.2, promises new and advanced features related to visual
            analytics, reporting, dashboarding, and a host of other data
            visualization aspects.{" "}
            <strong>Getting Started with Tableau 2019.2</strong> will get you up
            to speed with these additional functionalities.
          </p>
          <p>
            The book starts by highlighting the new functionalities of Tableau
            2019.2, providing concrete examples of how to use them. However, if
            you're new to Tableau, don’t worry – you’ll be guided through the
            major aspects of Tableau with relevant examples. You'll learn how to
            connect to data, build a data source, visualize your data, build a
            dashboard, and even share data online. In the concluding chapters,
            you'll delve into advanced techniques such as creating a
            cross-database join and data blending.
          </p>
        </Col>
        <Col
          style={{
            padding: "0 5%",
          }}
        >
          <p>
            <strong>What you will learn:</strong>
          </p>
          <ul>
            <li>
              Discover the new functionalities of Tableau 2019: Ask Data,
              Parameter actions, Vector Maps, and many more.
            </li>
            <li>
              Connect tables, perform joins, unions. and make transformations
              such as pivoting the field and splitting columns.
            </li>
            <li>Build an efficient data source for analysis.</li>
            <li>
              Design insightful data visualization using different mark types
              and properties.
            </li>
            <li>Develop powerful dashboards and stories.</li>
            <li>Share your work and interact with Tableau Server.</li>
            <li>Use Tableau to explore your data and find new insights.</li>
            <li>
              Explore Tableau's advanced features like calculations, analytics
              tools, and gear up for upcoming challenges.
            </li>
          </ul>
        </Col>
        <h4 style={{ padding: "40px 20%", textAlign: "center" }}>
          <strong>
            By the end of this book, you will be able to use Tableau effectively
            to create quick, cost-effective, and business-efficient visual
            solutions.
          </strong>
        </h4>
      </Row>
    </Container>
    <Container
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        margin: "0",
        maxWidth: "100%",
        backgroundColor: "#fafafa",
      }}
    >
      <Feature
        gif={vizgif}
        text="Visualize your data while playing with Tableau"
      />
      <Row style={{ minHeight: "50px" }} />
      <Feature
        gif={dashgif}
        text="Create beautiful, powerful, and interactive Dashboards"
      />
      <Row style={{ minHeight: "50px" }} />
      <Feature gif={exploregif} text="Explore your data to find new insights" />
    </Container>
    <Container
      style={{
        textAlign: "left",
        padding: "30px 0 0 0",
        margin: "0",
        maxWidth: "100%",
        backgroundColor: "#118ab2",
      }}
    >
      <Row
        style={{
          minHeight: "500px",
        }}
      >
        <Col
          style={{
            position: "relative",
          }}
        >
          <img
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              margin: "auto auto",
              width: "80%",
              maxWidth: "70%",
            }}
            src={picme}
          />
        </Col>
        <Col
          style={{
            position: "relative",
            top: "50%",
            padding: "0 5%",
            margin: "auto auto",
            color: "white",
          }}
        >
          <h1>
            Hi, I'm <strong>Tristan</strong>!
          </h1>
          <p>
            In 2015, I discovered the wonderful world of{" "}
            <strong>data visualization</strong> with Tableau.
          </p>
          <p>
            I've traveled around the globe to provide expertize and trainings in
            many different companies, always focused on data visualization.
          </p>
          <p>
            In 2017, I won the <strong>Iron Viz</strong> competition (the
            ultimate data visualization battle organized by Tableau every year)
            in Las Vegas in front of more than 10,000 people.
          </p>
          <p>
            Since then, I help other people with Tableau by making webinars,
            conferences, blog articles, and, finally, a book
            <i>
              <strong> Getting Started with Tableau</strong>
            </i>
            !
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
