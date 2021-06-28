import { useState, useEffect } from 'react'
import {
  Form,
  Row,
  Col,
  Button,
} from 'react-bootstrap'
import { useForm, FormProvider } from 'react-hook-form'
import { commerce } from '../../../../lib/commerce'
import FormTextField from './FormTextField'

const ShippingDetails = ({ checkoutToken, nextStep, prevStep }) => {
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubdivision, setShippingSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')

  // country array
  const countries =  Object.entries(shippingCountries).map( ([ code, name ]) => ({ id: code, label: name }) )
  const subdivisions =  Object.entries(shippingSubdivisions).map( ([ code, name ]) => ({ id: code, label: name }) )
  const options = shippingOptions.map((option) => ({ id: option.id, label: `${option.description} - (${option.price.formatted_with_symbol})` }))

  const methods = useForm()

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)
    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0])
  }
  
  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)
    setShippingSubdivisions(subdivisions)
    setShippingSubdivision(Object.keys(subdivisions)[0])
  }

  const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
    console.log(country)
    console.log(region)
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })
    console.log(options)
    setShippingOptions(options)
    if (options[0]) setShippingOption(options[0].id)
  }

  // on page load
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
  }, [checkoutToken.id])

  // on shipping country change
  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry)
  }, [shippingCountry])

  // on shipping subdivision change
  useEffect(() => {
    if (shippingSubdivision) {
      fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
    }
  }, [checkoutToken.id, shippingCountry, shippingSubdivision])

  return (
    <FormProvider {...methods}>
      <Form onSubmit=''>
        <Form.Group>
          <Row className="mb-3">
            <FormTextField required name="address1" label="Address" placeholder="1234 Main St."/>
            <FormTextField required name="address2" label="Address 2 (Optional)" placeholder="Apt. or Suite #"/>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row className="mb-3">
            <FormTextField required name="city" label="City" />
            <FormTextField required name="zip" label="Zip / Postal Code" />
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col xs={12} md={4}>
              <Form.Label>Country</Form.Label>
              <Form.Control required as="select" value={ shippingCountry } 
                onChange={ (e) => setShippingCountry(e.target.value) } >
                {
                  countries.map((country) => {
                    return <option key={ country.id } value={ country.id }>{ country.label }</option>
                  })
                }
              </Form.Control>
            </Col>
            <Col xs={12} md={4}>
              <Form.Label>State/Province</Form.Label>
              <Form.Control required as="select" value={ shippingSubdivision } 
                onChange={ (e) => setShippingSubdivision(e.target.value) } >
                {
                  subdivisions.map((subdivision) => {
                    return <option key={ subdivision.id } value={ subdivision.id }>{ subdivision.label }</option>
                  })
                }
              </Form.Control>
            </Col>
            <Col xs={12} md={4}>
              <Form.Label>Shipping Options</Form.Label>
              <Form.Control as="select" value={ shippingOption } 
                onChange={ (e) => setShippingOption(e.target.value) } >
                {
                  options.map((option) => {
                    return <option key={ option.id } value={ option.id }>{ option.label }</option>
                  })
                }
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <div className="d-flex justify-content-evenly align-items-center m-4">
          <Button variant="secondary" title="prev" onClick={ prevStep } >
            Previous Step
          </Button>
          <Button variant="secondary" title="next" onClick={ nextStep } >
            Next Step
          </Button>
        </div>
      </Form>
    </FormProvider>
  )
}

export default ShippingDetails
