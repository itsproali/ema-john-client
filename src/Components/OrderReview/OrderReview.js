import React from "react";
import useCart from "../../hooks/useCart";
// import useProducts from "../../hooks/useProducts";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  // const [products] = useProducts();
  const [cart, setCart] = useCart();
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const handleRemoveItem = (product) => {
    const rest = cart.filter((pd) => product._id !== pd._id);
    setCart(rest);
    removeFromDb(product._id);
  };
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center w-5/6 sm:w-4/5 mx-auto gap-14">
      <div className="grid grid-cols-1 gap-4 lg:col-span-2">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="order-summary order-first">
        <Cart text="Proceed Checkout" cart={cart} clear={clearCart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
