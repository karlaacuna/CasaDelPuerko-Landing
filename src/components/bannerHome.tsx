import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/bannerHomeStyle.css';

export default function BannerHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="bannerHomeImage"
          src="https://placehold.co/800x400?text=Imagen+1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>¡Bienvenidos a La Casa del Puerko!</h3>
          <p>Hogar del chicharrón más rico de Perú.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="bannerHomeImage"
          src="https://placehold.co/800x400?text=Imagen+2"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>¿Se te antoja?</h3>
          <p>Realiza tu pedido aquí.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="bannerHomeImage"
          src="https://placehold.co/800x400?text=Imagen+3"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Mira nuestro menú</h3>
          <p>Click aquí</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
