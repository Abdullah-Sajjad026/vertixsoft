import {Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import SectionTitleBox from "./SectionTitleBox";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <SectionTitleBox
        title="Don't Hesitate To Contact Us"
        supTitle=" CONTACT US "
      />
      <Container>
        <Form className="contact-form">
          <Row>
            <Col xs="12" sm="6">
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" />
              </FormGroup>
            </Col>
            <Col xs="12" sm="6">
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" />
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup>
                <Label for="message">Message</Label>
                <Input type="textarea" name="message" id="message" />
              </FormGroup>
            </Col>
            <Col xs="12">
              <button className="btn" type="submit">
                Send
              </button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};
export default Contact;
