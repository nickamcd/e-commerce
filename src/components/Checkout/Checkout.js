import {
  Container,
  Row,
} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { commerce } from '../../lib/commerce'
import CheckoutForm from './CheckoutForm/CheckoutForm'

const Checkout = ({ cart }) => {
  const [checkoutToken, setCheckoutToken] = useState(null)

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
        setCheckoutToken(token)
      } catch (err) {
        console.log(err)
      }
    }

    generateToken()
  }, [cart])

  return (
    <>
      <main>
        <Container>
          <h2 className="text-center">Checkout</h2>
        </Container>
        <Container>
          <Row>
              <h4 className="mb-3">Shipping Address:</h4>
              { checkoutToken && (<CheckoutForm checkoutToken={ checkoutToken } />) }
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Checkout
