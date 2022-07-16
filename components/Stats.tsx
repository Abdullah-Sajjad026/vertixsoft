import {Col, Container, Row} from "reactstrap";
import StatsCard from "./StatsCard";

import {IoHeartOutline} from "react-icons/io5";
import {AiOutlineTeam} from "react-icons/ai";
import {BsTrophy, BsBox} from "react-icons/bs";

const Stats = () => {
  return (
    <section id="stats" className="stats">
      <Container>
        <Row
          className="stats-cards-container justify-content-center"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="20"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
        >
          <Col xs="12" sm="6" md="3">
            <StatsCard icon={<BsBox />} count="569" title="Expert Doctors" />{" "}
          </Col>
          <Col xs="12" sm="6" md="3">
            <StatsCard
              icon={<IoHeartOutline />}
              count="356"
              title="Happy Clients"
            />{" "}
          </Col>
          <Col xs="12" sm="6" md="3">
            <StatsCard
              icon={<AiOutlineTeam />}
              count="783"
              title="Business Partners"
            />{" "}
          </Col>
          <Col xs="12" sm="6" md="3">
            <StatsCard icon={<BsTrophy />} count="780" title="IT Consultant" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
