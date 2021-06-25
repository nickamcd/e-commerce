import { useState } from 'react'
import { 
  Form,
  Button,
} from 'react-bootstrap'
import { 
  Confirmation,
  PaymentDetails,
  ShippingDetails,
  UserDetails,
} from './Steps'

const MultiStepForm = ({ checkoutToken }) => {
  const [activeStep, setActiveStep] = useState(0)

  const formSwitch = (step, checkoutToken) => {
    switch (step) {
      case 0:
        return <UserDetails checkoutToken={ checkoutToken } />
      case 1:
        return <ShippingDetails checkoutToken={ checkoutToken } />
      case 2:
        return <PaymentDetails checkoutToken={ checkoutToken }/>
      case 3:
        return <Confirmation />
    }
  }

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const prevStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1) 

  return (
    <Form>
      { formSwitch(activeStep, checkoutToken) }
      <div className="d-flex justify-content-evenly align-items-center m-4">
        <Button 
          variant="secondary" 
          title="prev"
          onClick={ () => prevStep() }
        >
          Previous Step
        </Button>
        <Button 
          variant="secondary" 
          title="next"
          onClick={ () => nextStep() }
        >
          Next Step
        </Button>
      </div>
    </Form>
  )
}

export default MultiStepForm
