import {Col, Container, Row} from "reactstrap";
import SectionTitleBox from "./SectionTitleBox";
import ServiceCard from "./ServiceCard";
import LaptopImg from "../public/images/laptop.png";
import DatabaseImg from "../public/images/database.png";
import ServerImg from "../public/images/server.png";
import Line1Img from "../public/images/line-01.png";
import Line2Img from "../public/images/line-02.png";
import ServiceImg from "../public/images/service.png";
import Image from "next/image";

const About = () => {
  const services = [
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
    <section id="about" className="about ">
      <Container>
        <SectionTitleBox
          title="More than 23+ years we provide"
          titleSpan="IT solutions"
          subTitle="Sedut perspiciatis unde omnis iste natus error sitlupttem
      accusantium doloremque laudantium totam remap eriaeaque ipsa quae ab
      illo inventore veritatis"
        />
        <Row className="cards-container">
          <Col xs="12" sm="6" md="4">
            <ServiceCard
              icon={services[0].icon}
              title={services[0].title}
              info={services[0].info}
            />
          </Col>
          <Col xs="12" sm="6" md="4" className="d-none d-lg-inline-block">
            <Image src={ServiceImg} alt="" className="w-100" />
          </Col>
          <Col xs="12" sm="6" md="4">
            <ServiceCard
              icon={services[1].icon}
              title={services[1].title}
              info={services[1].info}
            />
          </Col>
          <Col
            xs="12"
            sm="6"
            md="4"
            className="d-none d-lg-inline-block text-end"
          >
            <Image src={Line1Img} alt="" className="w-100" />
          </Col>
          <Col xs="12" sm="6" md="4">
            <ServiceCard
              icon={services[2].icon}
              title={services[2].title}
              info={services[2].info}
            />
          </Col>
          <Col xs="12" sm="6" md="4" className="d-none d-lg-inline-block">
            <Image src={Line2Img} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
