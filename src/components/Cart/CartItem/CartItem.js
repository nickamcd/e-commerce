import { 
  Col, 
  Card,
  Button,
} from 'react-bootstrap'
import { FaMinus, FaPlus } from 'react-icons/fa'
import './CartItem.css'

const CartItem = ({ item }) => {
  return (
    <Col className="cart-item mb-5 ms-1" xs={8} md={4} lg={3} >
      <Card className="shadow-lg" title={ item.name }>
        <Card.Header className="bg-secondary text-white text-center">
          <Card.Title>{ item.name }</Card.Title>
        </Card.Header>
        <Card.Img className="card-image" variant="top" src={ item.media.source } />
        <Card.Footer className="cart-item-footer text-white bg-secondary">
          <div className="d-flex justify-content-between align-items-center">
            <span>Total Price: { item.line_total.formatted_with_symbol }</span>
            <div className="d-flex justify-content-center align-items-center">
              <Button variant="outline-danger" size="sm" title="Decrease Quantity" >
                <FaMinus />
              </Button>
              <span className="text-nowrap m-2">Qty: { item.quantity }</span>
              <Button variant="outline-info" size="sm" title="Decrease Quantity" >
                <FaPlus />
              </Button>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Button className="mt-3 text-white" variant="warning" size="sm" >Remove All</Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default CartItem
