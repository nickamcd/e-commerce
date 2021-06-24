import { 
  Container,
  Row,
  Button,
} from 'react-bootstrap'
import CartItem from './CartItem/CartItem'
import './Cart.css'

const Cart = ({ cart, handleUpdateCartQuantity, handleRemoveFromCart, handleEmptyCart  }) => {
  const EmptyCart = () => {
    return <h3 className="text-muted">Your cart is empty.</h3>
  }

  const FilledCart = () => {
    return (
      <>
        <Row className="justify-content-evenly">
          { cart.line_items.map((item) => (
            <CartItem 
              item={ item } 
              onUpdateCartQuantity={ handleUpdateCartQuantity } 
              onRemoveFromCart={ handleRemoveFromCart }
            />
          )) }
        </Row>
        <div className="">
          <h4>
            Subtotal: { cart.subtotal.formatted_with_symbol }
          </h4>
          <div className="d-flex justify-content-between align-items-center">
            <Button variant={"outline-primary"} size="lg" >Checkout</Button>
            <Button 
              variant={"outline-danger"} 
              size="lg" 
              onClick={ handleEmptyCart }
            >
                Empty Cart
            </Button>
          </div>
        </div>
      </>
    )
  }

  if (!cart.line_items) return 'Loading...'

  return (
    <Container className="cart" fluid>
      <Container>
        <h1 className="col-12 text-center">Cart</h1>
      </Container>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
    </Container>
  )
}

export default Cart
