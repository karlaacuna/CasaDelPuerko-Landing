import { Card, Button } from 'react-bootstrap';
import { ProductCardProps } from '../interfaces/product';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => { 
  return (
    <Card className="my-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          <strong>{`$${product.price}`}</strong>
        </Card.Text>
        <Button variant="primary" href={`https://wa.me/${product.whatsapp}`}>
          Comprar en WhatsApp
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;