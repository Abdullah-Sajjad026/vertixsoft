import {Col, Container, Row} from "reactstrap";
import SectionTitleBox from "./SectionTitleBox";
import ServiceCard from "./ServiceCard";
import LaptopImg from "../public/images/laptop.png";
import DatabaseImg from "../public/images/database.png";
import ServerImg from "../public/images/server.png";
import ToolsImg from "../public/images/tools.png";
import MarketingImg from "../public/images/marketing.png";
import StrategyImg from "../public/images/strategy.png";

const Services = () => {
  const services = [
    {
      icon: MarketingImg,
      title: "Marketing Strategy",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      icon: ToolsImg,
      title: "Analysis For Tools      ",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      icon: StrategyImg,
      title: "UX/UI Strategy      ",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      icon: LaptopImg,
      title: "Web Development",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking",
    },
    {
      icon: ServerImg,
      title: "Server Security",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking",
    },
    {
      icon: DatabaseImg,
      title: "Database Analysis",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking",
    },
  ];

  return (
    <section id="services" className="services">
      <Container>
        <SectionTitleBox
          supTitle="Our Services"
          title="We provide exclusive services for your business"
        />
        <Row
          className="cards-container gy-5 mt-4 px-3 px-sm-0"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="20"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
        >
          {services.map((value, index) => (
            <Col xs="12" sm="6" md="4" key={index}>
              <ServiceCard {...value} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
