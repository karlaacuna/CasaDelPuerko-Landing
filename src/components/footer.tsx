import { Container, Row, Col } from 'react-bootstrap';
import '../styles/footerStyle.css';

export default function Footer() {
  return (
    <footer className="footer-bg">
      <Container>
        <Row className='mt-4'>
        <Col md={4} className="text-center">
            <img alt="la casa del puerko" className="footer-image" src="/LCDP STICKER.png" />
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook de La Casa del Puerko" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/lacasadelpuerko.pe/" title="Instagram de La Casa del Puerko" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/+51904914460" target="_blank" rel="noopener noreferrer" title="Whatsapp de La Casa del Puerko" className="social-icon">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </Col>
          <Col md={4} className='footer-text'>
            <h5>La Casa del Puerko</h5>
            <p>Chicharronería tradicional peruana, ofreciendo los mejores chicharrones de Lima, Perú.</p>
          </Col>
          <Col md={4}>
          <h5>Contacto</h5>
            <p> (+51) 904-914-460</p>
            <p> contacto@lacasadelpuerco.com</p>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} La Casa del Puerko.</p>
            <p>&copy; Desarrollado por Lic. Karla Lizeth Acuña Inca</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
