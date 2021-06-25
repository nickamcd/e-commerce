import { 
  Form,
  Row,
  Col
} from 'react-bootstrap'

const UserDetails = ({ checkoutToken }) => {
  return (
    <>
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
    </>
  )
}

export default UserDetails
