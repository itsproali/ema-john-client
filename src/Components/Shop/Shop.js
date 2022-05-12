import React, { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
// import useProducts from "../../hooks/useProducts";
import { addToDb, deleteShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // const [products] = useProducts();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [pageNo, setPageNo] = useState(0);
  const [page, setPage] = useState(0);
  useEffect(() => {
    fetch(`https://ema-john-itsproali.herokuapp.com/products?page=${page}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page]);

  useEffect(() => {
    fetch("https://ema-john-itsproali.herokuapp.com/count")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        setPageNo(Math.ceil(count / 10));
      });
  }, []);

  // Add To Cart
  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exist = cart.find((product) => product._id === selectedProduct._id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      selectedProduct.quantity += 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  // Delete Products From Cart
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div>
      <div className="shop-container">
        <div className="products">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              cart={addToCart}
            ></Product>
          ))}
        </div>

        <div className="order-summary">
          <Cart text="Review Order" cart={cart} clear={clearCart}></Cart>
        </div>
      </div>

      {/* Pagination */}
      <div className="my-4 mx-auto text-center">
        {[...Array(pageNo).keys()].map((number) => (
          <button
            className={`page-btn ${page === number && "selected"}`}
            onClick={() => setPage(number)}
            key={number}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Shop;
