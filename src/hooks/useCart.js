import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    const keys = Object.keys(storedCart);

    fetch("http://localhost:5000/cartProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        for (const id in storedCart) {
          const addedProduct = data.find((product) => product._id === id);
          if (addedProduct) {
            addedProduct.quantity = storedCart[id];
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, []);
  return [cart, setCart];
};

export default useCart;
