import { Form, Col } from 'react-bootstrap'
import { useFormContext, Controller } from 'react-hook-form'

const FormTextField = ({ name, label, required, placeholder }) => {
  const { control } = useFormContext()

  return (
    <Col xs={12} md={6}>
      <Form.Label>{ label }</Form.Label>
      <Controller 
        control={control}
        name={name}
        required={required}
        render={ ({ field }) => (
          <Form.Control placeholder={ placeholder } />
        ) }
      />
    </Col>
  )
}

export default FormTextField
