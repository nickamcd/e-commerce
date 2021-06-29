import { Button, Spinner } from "react-bootstrap"
import { useHistory } from "react-router-dom"

const Confirmation = ({ order }) => {

  const history = useHistory()

  function handleClick(path) {
    history.push(path)
  }
  return (
    order.customer ? (
      <>
        <div>
          <h5 className="title">{ order.customer.firstname } { order.customer.lastname }, thank you for shopping with us!</h5>
          <h6 className="subtitle">Order: { order.customer_reference }</h6>
        </div>
        <Button variant="primary" onClick={ () => handleClick("") } >Back to Home</Button>
      </>
    ) : (
      <div className="d-flex p-3 m-3 justify-content-center align-items-center">
        <Spinner animation="grow" className="align-self-center" />
      </div>
    )
  )
}

export default Confirmation