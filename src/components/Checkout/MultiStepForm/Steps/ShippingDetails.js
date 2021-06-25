import { useState, useEffect } from 'react'
import {
  Form,
  Row,
  Col,
  Button,
} from 'react-bootstrap'
import { commerce } from '../../../../lib/commerce'

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
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })
    setShippingOptions(options)
    if (options[0]) setShippingOption(options[0].id)
  }

  // on page load
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
  }, [])

  // on shipping country change
  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry)
  }, [shippingCountry])

  // on shipping subdivision change
  useEffect(() => {
    if (shippingSubdivision) {
      fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
    }
  }, [shippingSubdivision])

  return (
    <Form>
      <Form.Group>
        <Row className="mb-3">
          <Col xs={12}>
            <Form.Label>Address</Form.Label>
            <Form.Control required placeholder="1111 1st St" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group>
        <Row className="mb-3">
          <Col xs={12}>
            <Form.Label>
              Address 2 <span className="text-muted">(Optional)</span>
            </Form.Label>
            <Form.Control required placeholder="Apartment or Suite #" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group>
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Label> City</Form.Label>
            <Form.Control required placeholder="" />
          </Col>
          <Col xs={12} md={6}>
            <Form.Label>Zip / Postal Code</Form.Label>
            <Form.Control placeholder="" />
          </Col>
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
  )
}

export default ShippingDetails
