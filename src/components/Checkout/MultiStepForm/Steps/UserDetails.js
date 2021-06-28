import { 
  Form,
  Row,
  Button
} from 'react-bootstrap'
import { useForm, FormProvider } from 'react-hook-form'
import FormTextField from './FormTextField'

const UserDetails = ({ checkoutToken, nextStep }) => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <Form>
        <Form.Group>
          <Row className="mb-3">
            <FormTextField required name="firstName" label="First Name" placeholder="John"/>
            <FormTextField required name="lastName" label="Last Name" placeholder="Doe"/>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row className="mb-3">
            <FormTextField required name="email" label="Email" placeholder="example@email.com" />
          </Row>
        </Form.Group>
        <div className="d-flex justify-content-evenly align-items-center m-4">
          <Button variant="secondary" title="next" onClick={ nextStep } >
            Next Step
          </Button>
        </div>
      </Form>
    </FormProvider>
  )
}

export default UserDetails
