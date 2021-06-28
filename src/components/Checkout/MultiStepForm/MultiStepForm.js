import { useState } from 'react'
import { 
  Confirmation,
  PaymentDetails,
  ShippingDetails,
  UserDetails,
} from './Steps'
import './MultiStepForm.css'

const MultiStepForm = ({ checkoutToken, onCaptureCheckout }) => {
  const [activeStep, setActiveStep] = useState(0)

  const [shippingData, setShippingData] = useState({})

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const prevStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1) 

  const next = (data) => {
    console.log(data)
    setShippingData(data)
    nextStep()
  }

  const formSwitch = (step, checkoutToken) => {
    switch (step) {
      case 0:
        return <UserDetails 
                  checkoutToken={ checkoutToken } 
                  next={ next } 
                />
      case 1:
        return <ShippingDetails 
                  shippingData={ shippingData }
                  checkoutToken={ checkoutToken } 
                  next={ next } 
                  prevStep={ prevStep } 
                />
      case 2:
        return <PaymentDetails 
                  shippingData={ shippingData }
                  checkoutToken={ checkoutToken } 
                  nextStep={ nextStep } 
                  prevStep={ prevStep } 
                  onCaptureCheckout={ onCaptureCheckout } 
                />
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
