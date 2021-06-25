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
                <Button variant="secondary" title="prev" onClick={ prevStep }>
                  Previous Step
                </Button>
                <Button variant="secondary" title="next" >
                  Next Step
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
