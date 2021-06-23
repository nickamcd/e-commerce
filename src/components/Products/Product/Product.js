import './Product.css'

const Product = ({ product }) => {
  return (
    <div className="product card shadow-lg mb-5 ms-1 col-8 col-md-4 col-lg-3 col-xl-2">
      <div className="card-header text-center">{ product.name }</div>
      <div className="embed-responsive embed-responsive-16by9">
        <img className="card-img-top embed-responsive-item" src={ product.image } alt="card image top" />
      </div>
      <div className="card-body">
        <h4 className="card-text">Roast: { product.roast }</h4>
        <h5 className="card-text">Country of Origin: { product.origin }</h5>
      </div>
      <div className="card-footer">Price: { product.price } <icon></icon></div>
    </div>
  )
}

export default Product
