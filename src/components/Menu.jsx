import pastas from "../data/menu.json";
import { Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => (
  <div>
    <Row className="mt-4 justify-content-center row-cols-xl-3">
      {pastas.map(dish => (
        <Col key={dish.id} className="mb-3">
          <Link to={"/details/" + dish.id}>
            <img src={dish.image} alt={dish.name} className="img-fluid" />
          </Link>
          <h4 className="mt-3">{dish.name}</h4>
          <Badge variant="warning" className="mr-2">
            {dish.price}€
          </Badge>
          <Badge variant="danger">{dish.label}</Badge>
        </Col>
      ))}
    </Row>
  </div>
);

export default Menu;
