const ProductList = ({ products, addToCart }) => {
  return (
    <div className="row text-center justify-content-center align-items-center">
      {/* <h2>Products</h2> */}
      {products.map((product) => (
        <div className="col-lg-3 text-center card-item mt-4 mx-2">
          <div>
            <img
              src="https://themesberg.com/docs/pixel-bootstrap/assets/img/shop/item-2.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div>
            <h2>{product.name})</h2>
            <p class="font-weight-light text-gray mt-2 px-2 mt-2">
              {product.description}
            </p>

            <div class="d-flex justify-content-between align-items-center mt-3 px-2">
              <span className="h5 mb-0 text-gray">${product.price}</span>
              <button className="addtoCart" onClick={() => addToCart(product)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
