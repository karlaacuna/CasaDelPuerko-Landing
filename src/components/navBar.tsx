import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import '../styles/navBarStyle.css';

const NavBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar-banner') as HTMLElement;
      if (navbar) {
        navbar.classList.toggle('down', window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className="navbar-banner pt-3 pb-3">
      <Container>
        <Row className="w-100">
          <Col className='d-block'></Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <div  id='navbarright'>
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="#menu">Menú</Nav.Link>
                </div>
                <div id='navbarleft'>
                <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                <Nav.Link href="#whatsapp">(+51) 989-974-555</Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          <Col className="d-flex justify-content-center" xs={12}>
            <Navbar.Brand href="#home">
              <img alt="la casa del puerko" className="navbar-image" src="/public/sticker.png" />
            </Navbar.Brand>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
