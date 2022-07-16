import {FC, useState} from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

const Hero: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="hero d-flex flex-column">
      <header>
        <Navbar className="navbar" dark expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#stats">Stats</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
      <div className="container py-5 flex-grow-1 d-flex align-items-center">
        <div className="col-9">
          <h1 className="title">Perfect IT Solutions For Your Buisness</h1>
          <p className="lead">
            Sedut perspiciatis unde omnis iste natus error sitlupttem
            accusantium doloremque laudantium totam remap eriaeaque ipsa quae ab
            illo inventore veritatis
          </p>
          <div className="d-flex mt-5">
            <button className="btn">Learn More</button>
            <button className=" ms-3 btn btn--outline">Contact Us </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
