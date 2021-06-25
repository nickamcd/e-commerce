import { Form, Row, Col } from 'react-bootstrap'
import { 
  Elements, 
  CardElement, 
  ElementsConsumer, 
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import ItemReview from './ItemReview/ItemReview'

const PaymentDetails = ({ checkoutToken }) => {
  return (
    <>
      <ItemReview checkoutToken={ checkoutToken }/>
      <Form.Group>
      </Form.Group>
    </>
  )
}

export default PaymentDetails
