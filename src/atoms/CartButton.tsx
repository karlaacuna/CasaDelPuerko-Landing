import React from 'react';
import './cartButtonStyle.css';


const CartButton: React.FC<{ productWhatsapp: string }> = ({ productWhatsapp }) => {
  return (
    <a href={`https://wa.me/${productWhatsapp}`} className="redButton">
    </a>
  );
};

export default CartButton;
