import { 
  Form,
  Row,
  Col,
  Button
} from 'react-bootstrap'

const UserDetails = ({ checkoutToken, nextStep }) => {
  return (
    <Form>
      <Form.Group>
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Label>First Name</Form.Label>
            <Form.Control />
          </Col>
          <Col xs={12} md={6}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group>
        <Row className="mb-3">
          <Col xs={12}>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="example@email.com" />
          </Col>
        </Row>
      </Form.Group>
      <div className="d-flex justify-content-evenly align-items-center m-4">
        <Button variant="secondary" title="next" onClick={ nextStep } >
          Next Step
        </Button>
      </div>
    </Form>
  )
}

export default UserDetails
