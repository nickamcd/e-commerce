import './Product.css'

const Product = ({ product }) => {
  return (
    <div className="product panel rounded m-1 p-1 col-5 col-lg-3 col-xl-2">
      <div className="panel-heading">{ product.name }</div>
      <div className="panel-body">
        <img className="img-responsive rounded" src={ product.image } />
      </div>
      <div class="panel-footer">
        <h3>Roast: { product.roast }</h3>
        <h4>Country of Origin: { product.origin }</h4>
        <p>Price: { product.price }</p>
      </div>
    </div>
  )
}

export default Product
