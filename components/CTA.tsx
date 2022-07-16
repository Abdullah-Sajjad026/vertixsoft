import {Col, Container, Row} from "reactstrap";

const CTA = () => {
  return (
    <section className="cta">
      <Container>
        <Row className="justify-content-center align-items-center px-3 px-sm-0">
          <Col xs="12" md="6">
            <h2 className="section-title">
              Learn Any Information For IT Solutions
            </h2>
          </Col>
          <Col xs="12" md="6" className="mt-3 mt-sm-0">
            <div className="p-5 bg-white text-center rounded">
              <h2 style={{color: "#096bd8"}}> +92 306 7663441</h2>
            </div>
          </Col>
        </Row>{" "}
      </Container>
    </section>
  );
};

export default CTA;
