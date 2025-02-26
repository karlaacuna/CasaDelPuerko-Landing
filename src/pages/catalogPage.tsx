import ProductCard from "../components/productCard";
import productsChicharron from "../assets/productsChicharron";
import { Col, Container, Row } from "react-bootstrap";

export function CatalogPage() {
    return (
        <>
        <Container className="mb-5 mt-5">
        <Row>
                {productsChicharron.map((product) => (
                    <Col key={product.id} xs={6} sm={6} md={4} lg={3}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    )

}