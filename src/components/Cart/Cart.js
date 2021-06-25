import { 
  Container,
  Row,
  Button,
} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import CartItem from './CartItem/CartItem'
import './Cart.css'

const Cart = ({ cart, handleUpdateCartQuantity, handleRemoveFromCart, handleEmptyCart  }) => {
  /* 
    use useHistory hook to add link
    to bootstrap-react button
  */
  const history = useHistory()

  function handleClick(path) {
    history.push(path)
  }
  
  const EmptyCart = () => {
    return <h3 className="text-muted">Your cart is empty.</h3>
  }

  const FilledCart = () => {
    return (
      <>
        <Row className="justify-content-evenly">
          { cart.line_items.map((item) => (
            <CartItem 
              key={ item.id }
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
            <Button 
              variant={"outline-primary"} 
              size="lg" 
              onClick={ () => handleClick("checkout") }
            >
              Checkout
            </Button>
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
    <main>
      <Container className="cart" fluid>
      <Container>
        <h1 className="col-12 text-center">Cart</h1>
      </Container>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
      </Container>
    </main>
  )
}

export default Cart
