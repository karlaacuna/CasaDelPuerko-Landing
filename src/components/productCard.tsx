import { Card} from 'react-bootstrap';
import { ProductCardProps } from '../interfaces/product';
import '../styles/productCardStyle.css';
import CartButton from '../atoms/CartButton';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => { 
  return (
    <Card className="productContainer">
      <Card.Img src={product.image} alt={product.name} className='cardImageProduct'/>
      <Card.Body className='cardBodyProduct'>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="cardTextProduct">
          {product.description}
        </Card.Text>
        <div className='divcontprod'>
        <Card.Text className='productPrice'>
          {`S/.${product.price}`}
        </Card.Text>
        <div className='buttonBuyProduct'>
        <CartButton productWhatsapp={product.whatsapp}></CartButton>
        </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;