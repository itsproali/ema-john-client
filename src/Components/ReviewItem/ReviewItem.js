import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ReviewItem = (props) => {
  const { product, handleRemoveItem } = props;
  const { name, quantity, shipping, price, img } = product;
  return (
    <div className="flex items-center border-2 border-red-200 rounded-md p-1">
      <img className="w-[91px] rounded-md" src={img} alt={name} />
      <div className="mx-2">
        <h1 className="font-semibold" title={name}>
          {name.length > 30 ? name.slice(0, 30) + "..." : name}
        </h1>
        <p>
          <small>
            Price : <span className="text-red-400">$ {price}</span>
          </small>
        </p>
        <p>
          <small>
            Shipping Charge : <span className="text-red-400">$ {shipping}</span>
          </small>
        </p>
        <p>
          <small>
            Quantity : <span className="text-red-400">{quantity}</span>
          </small>
        </p>
      </div>
      <FontAwesomeIcon
        icon={faTrashAlt}
        onClick={() => handleRemoveItem(product)}
        className="h-[30px] w-[30px] ml-auto sm:mr-4 cursor-pointer text-red-500 bg-red-200 rounded-full p-3 hover:bg-red-500 hover:text-red-300 ease-in-out duration-300"
        title="Remove From Cart"
      />
    </div>
  );
};

export default ReviewItem;
