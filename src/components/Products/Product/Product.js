import './Product.css'
import { FaCartPlus } from 'react-icons/fa'

const Product = ({ product }) => {
  return (
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
  )
}

export default Product
