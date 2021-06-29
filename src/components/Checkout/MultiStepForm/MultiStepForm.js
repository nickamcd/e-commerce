import { useState } from 'react'
import { 
  Confirmation,
  PaymentDetails,
  ShippingDetails,
  UserDetails,
} from './Steps'
import { useForm, FormProvider } from 'react-hook-form'
import './MultiStepForm.css'

const MultiStepForm = ({ checkoutToken, onCaptureCheckout, order }) => {
  const [activeStep, setActiveStep] = useState(0)
  const [shippingData, setShippingData] = useState({})

  const methods = useForm()
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const prevStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1) 
  const next = (data) => {
    setShippingData(data)
    nextStep()
  }

  const formSwitch = (step, checkoutToken) => {
    switch (step) {
      case 0:
        return <UserDetails 
                  checkoutToken={ checkoutToken } 
                  next={ next } 
                  methods={ methods }
                />
      case 1:
        return <ShippingDetails 
                  shippingData={ shippingData }
                  checkoutToken={ checkoutToken } 
                  next={ next } 
                  prevStep={ prevStep } 
                  methods={ methods }
                />
      case 2:
        return <PaymentDetails 
                  shippingData={ shippingData }
                  checkoutToken={ checkoutToken } 
                  nextStep={ nextStep } 
                  prevStep={ prevStep } 
                  onCaptureCheckout={ onCaptureCheckout } 
                  methods={ methods }
                />
      case 3:
        return <Confirmation order={ order }/>
      default:
        // do nothing
    }
  }

  return (
    <FormProvider {...methods}>
      { formSwitch(activeStep, checkoutToken, methods) }
    </FormProvider>
  )
}

export default MultiStepForm
