import { Form, Col } from 'react-bootstrap'
import { useState } from 'react'
import { useFormContext, Controller } from 'react-hook-form'

const FormTextField = ({ name, label, required, placeholder }) => {
  const { control, register } = useFormContext()

  return (
    <Col xs={12} md={6}>
      <Form.Label>{ label }</Form.Label>
      <Controller 
        control={control}
        name={name}
        required={required}
        render={ ({ field }) => (
          <Form.Control
            as="input" 
            placeholder={ placeholder } 
            {...register(name)}
          />
        ) }
      />
    </Col>
  )
}

export default FormTextField
