import { useState } from 'react'
import { 
  Confirmation,
  PaymentDetails,
  ShippingDetails,
  UserDetails,
} from './Steps'
import './MultiStepForm.css'

const MultiStepForm = ({ checkoutToken }) => {
  const [activeStep, setActiveStep] = useState(0)

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const prevStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1) 

  const formSwitch = (step, checkoutToken) => {
    switch (step) {
      case 0:
        return <UserDetails checkoutToken={ checkoutToken } nextStep={ nextStep } />
      case 1:
        return <ShippingDetails checkoutToken={ checkoutToken } nextStep={ nextStep } prevStep={ prevStep } />
      case 2:
        return <PaymentDetails checkoutToken={ checkoutToken } nextStep={ nextStep } prevStep={ prevStep } />
      case 3:
        return <Confirmation />
      default:
        // do nothing
    }
  }

  return (
    <div>
      { formSwitch(activeStep, checkoutToken) }
    </div>
  )
}

export default MultiStepForm
