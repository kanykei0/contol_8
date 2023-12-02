import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Toolbar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">
          Quotes Central
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavLink to="/" className="nav-link mx-3">
            Quotes
          </NavLink>
          <NavLink to="/add-quote" className="nav-link mx-3">
            New quote
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Toolbar;
