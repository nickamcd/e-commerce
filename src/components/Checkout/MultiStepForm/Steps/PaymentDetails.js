import { Form, Button } from 'react-bootstrap'
import { 
  Elements, 
  CardElement, 
  ElementsConsumer, 
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import ItemReview from './ItemReview/ItemReview'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const PaymentDetails = ({ shippingData, checkoutToken, prevStep, nextStep, onCaptureCheckout }) => {
  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault()

    if (!stripe || !elements) return

    const cardElement = elements.getElement(CardElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement })
    if (error) {
      console.log(error)
    } else {
      const orderData = { 
        line_items: checkoutToken.live.line_items,
        customer: { 
          firstname: shippingData.firstName, 
          lastname: shippingData.lastName, 
          email: shippingData.email },
        shipping: { 
          name: 'Primary', 
          street: shippingData.street, 
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: { 
          gateway: 'stripe',
          stripe: { 
            payment_method_id: paymentMethod.id
          }
        }
      }

       onCaptureCheckout(checkoutToken.id, orderData)

       nextStep()
    }
  }

  return (
    <>
      <ItemReview checkoutToken={ checkoutToken }/>
      <Elements stripe={ stripePromise }>
        <ElementsConsumer>
          { ({elements, stripe}) => (
            <Form className="bg-secondary mt-5 rounded" onSubmit={ (e) => handleSubmit(e, elements, stripe) }>
              <CardElement className="bg-light rounded" />
              <div className="d-flex justify-content-evenly align-items-center m-4">
                <Button variant="danger" title="prev" onClick={ prevStep }>
                  Back
                </Button>
                <Button type="submit" variant="success" title="next" disabled={ !stripe }>
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
