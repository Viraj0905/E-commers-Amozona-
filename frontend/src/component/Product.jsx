import React from "react";
import Rating from "./Rating";
function Product(props){
    const {product}=props;
return(<div>
    <div key={product._id} className="card">
          <a href={`/product/${product._id}`}>
                  <img className="medium" src={product.image} alt="product" />
              </a>
          <div className="card-body">
          <a href={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
              </a>
         
          <Rating rating={product.rating} numReview={product.numReviews} />
          <div className="pricing">{"Price: "+product.price+" Rs."}</div>
      </div>
  </div>
  </div>
  )
}
export default Product;