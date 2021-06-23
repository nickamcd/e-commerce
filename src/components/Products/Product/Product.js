import './Product.css'
import { FaCartPlus } from 'react-icons/fa'
import { 
  Col, 
  Card,
  Button,
} from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Col className="product mb-5 ms-1" xs={8} md={4} lg={3} xl={2}>
      <Card className="shadow-lg" title={ product.name }>
        <Card.Header className="bg-primary text-white text-center">
          <Card.Title>{ product.name }</Card.Title>
        </Card.Header>
        <Card.Img className="card-image" variant="top" src={ product.media.source } />
        <Card.Body >
          <Card.Text className="h4" dangerouslySetInnerHTML={{__html: product.description}} ></Card.Text>
        </Card.Body>
        <Card.Footer className="text-white bg-primary d-flex justify-content-between align-items-center">
          <span>Price: { product.price.formatted_with_symbol }</span>
          <Button variant="outline-info" title="Add to Cart"><i><FaCartPlus /></i></Button>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default Product

/* 
    <div className="product mb-5 ms-1 col-8 col-md-4 col-lg-3 col-xl-2" >
      <div className="card border-0 shadow-lg">
        <div className="card-header text-white bg-primary text-center"><h3>{ product.name }</h3></div>
        <div className="embed-responsive embed-responsive-16by9">
          <img className="card-img-top embed-responsive-item" src={ product.image } alt="card image top" />
        </div>
        <div className="card-body">
          <h4 className="card-text">Roast: { product.roast }</h4>
          <h5 className="card-text text-secondary">Country of Origin: { product.origin }</h5>
        </div>
        <div className="card-footer text-white bg-primary d-flex justify-content-between align-items-center">
          Price: { product.price } <button class="btn btn-outline-info" title="Add to Cart">
            <i><FaCartPlus /></i>
          </button>
        </div>
      </div>
    </div>
*/