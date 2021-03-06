import {
  Container,
  Row,
} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { commerce } from '../../lib/commerce'
import MultiStepForm from './MultiStepForm/MultiStepForm'
import './Checkout.css'

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
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
          <Row className="stepper">
            { checkoutToken && ( 
              <MultiStepForm 
                checkoutToken={ checkoutToken } 
                onCaptureCheckout={ onCaptureCheckout } 
                order={ order }
              /> ) }
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Checkout
