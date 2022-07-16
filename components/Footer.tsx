import {Container} from "reactstrap";

const Footer = () => {
  return (
    <footer id="footer" className="footer py-3 px-3 border-top">
      <Container>
        <div className="d-flex justify-content-between">
          <p className="m-0">&copy; Copyright 2022 Vertix Soft.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
