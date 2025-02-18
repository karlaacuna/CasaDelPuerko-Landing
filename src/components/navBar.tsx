import { Container, Navbar, Nav } from 'react-bootstrap';
import '../styles/navBarStyle.css'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed='top' className='navbar-banner'>
      <Container>
        <Navbar.Brand href="#home">La Casa del Puerko</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#menu">Menú</Nav.Link>
            <Nav.Link href="#nosotros">¿Quiénes somos?</Nav.Link>
            <Nav.Link href="#whatsapp">(+51) 989-974-555</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
