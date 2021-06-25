import {
  Container,
  Row,
} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { commerce } from '../../lib/commerce'
import CheckoutForm from './CheckoutForm/CheckoutForm'
import MultiStepForm from './CheckoutForm/MultiStepForm/MultiStepForm'

const Checkout = ({ cart }) => {
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [activeStep, setActiveStep] = useState(0)
  const [shippingData, setShippingData] = useState({})

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

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const prevStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

  const next = (data) => {
    setShippingData(data)
    nextStep()
  }

  return (
    <>
      <main>
        <Container>
          <h2 className="text-center">Checkout</h2>
        </Container>
        <Container>
          <Row>
            <MultiStepForm activeStep={ activeStep }></MultiStepForm>
            {/* 
              <h4 className="mb-3">Shipping Address:</h4>
              { checkoutToken && (<CheckoutForm checkoutToken={ checkoutToken } />) }
            */}
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Checkout
