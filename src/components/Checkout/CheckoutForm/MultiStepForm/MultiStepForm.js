import { Confirmation } from './Steps'
import { Form } from 'react-bootstrap'

const MultiStepForm = ({ activeStep }) => {
  const formSwitch = (step) => {
    switch (step) {
      case 0:
        return <Confirmation />
    }
  }

  return (
    <Form>
      { formSwitch(activeStep) }
    </Form>
  )
}

export default MultiStepForm
