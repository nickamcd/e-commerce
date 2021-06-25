import {
  ListGroup,
} from 'react-bootstrap'

const ItemReview = ({ checkoutToken }) => {
  return (
    <>
      <h6 className="">Your Cart</h6>
      <ListGroup>
        { checkoutToken.live.line_items.map((product) => {
          return (
            <ListGroup.Item className="d-flex justify-content-between lh-condensed" key={ product.name }>
              <div>
                { console.log(product) }
                <h6 className="my-0">{ product.name }</h6>
                <p className="text-muted">Quantity: { product.quantity }</p>
              </div>
              <span className="text-muted">{ product.line_total.formatted_with_symbol }</span>
            </ListGroup.Item>
          )
        }) }
        <ListGroup.Item>
          <div>
            <h6>Total: </h6>
            <span>{ checkoutToken.live.subtotal.formatted_with_symbol }</span>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  )
}

export default ItemReview
