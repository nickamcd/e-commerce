import { Form, Button } from 'react-bootstrap'
import { 
  Elements, 
  CardElement, 
  ElementsConsumer, 
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import ItemReview from './ItemReview/ItemReview'

const stripePromise = loadStripe()

const PaymentDetails = ({ checkoutToken, prevStep }) => {
  return (
    <>
      <ItemReview checkoutToken={ checkoutToken }/>
      <Elements stripe={ stripePromise }>
        <ElementsConsumer>
          { ({elements, stripe}) => (
            <Form>
              <CardElement />
              <div className="d-flex justify-content-evenly align-items-center m-4">
                <Button variant="danger" title="prev" onClick={ prevStep }>
                  Back
                </Button>
                <Button variant="success" title="next" disabled={ !stripe }>
                  Pay { checkoutToken.live.subtotal.formatted_with_symbol }
                </Button>
              </div>
            </Form>
          ) }
        </ElementsConsumer>
      </Elements>
    </>
  )
}

export default PaymentDetails
