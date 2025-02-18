
export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    whatsapp: string;
}
  
export interface ProductCardProps {
    product: Product; 
}
  