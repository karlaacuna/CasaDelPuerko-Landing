import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>La Casa del Puerco</h5>
            <p>Chicharronería tradicional peruana, ofreciendo los mejores sabores del Perú.</p>
          </Col>

          <Col md={4}>
            <h5>Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Inicio</a></li>
              <li><a href="#menu" className="text-white">Menú</a></li>
              <li><a href="#nosotros" className="text-white">¿Quiénes somos?</a></li>
              <li><a href="#contacto" className="text-white">Contacto</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Contacto</h5>
            <p><i className="fas fa-phone-alt"></i> (+51) 989-974-555</p>
            <p><i className="fas fa-envelope"></i> contacto@lacasadelpuerco.com</p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} La Casa del Puerko. Todos los derechos reservados.</p>
            <p>&copy; Lic. Karla Lizeth Acuña Inca</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
