import React from "react";
import { Link } from "react-router-dom";
const Product = ({ productdata }) => {
  return (
    <>
      <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div class="product-item bg-light mb-4">
          <div class="product-img position-relative overflow-hidden">
            <Link to={`ProductDetail/${productdata._id}`}>
              <img class="img-fluid w-100" src={productdata.image.url} alt="" />
            </Link>
          </div>
          <div class="text-center py-4">
            <Link class="h6 text-decoration-none text-truncate" href="">
              {productdata.name}
            </Link>
            <div class="d-flex align-items-center justify-content-center mt-2">
              <h5>{productdata.price}</h5>
              <h6 class="text-muted ml-2">
              </h6>
            </div>
            <div class="d-flex align-items-center justify-content-center mb-1">
              <small class="fa fa-star text-primary mr-1"></small>
              <small class="fa fa-star text-primary mr-1"></small>
              <small class="fa fa-star text-primary mr-1"></small>
              <small class="fa fa-star text-primary mr-1"></small>
              <small class="fa fa-star text-primary mr-1"></small>
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
