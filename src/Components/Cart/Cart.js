import React from 'react';
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Cart = (props) => {
    const { cart, clear, text} = props;
    let total = 0;
    let shippingCharge = 0;
    let tax = 0;
    let grandTotal = 0;
    let itemQuantity = 0;
    for (const product of cart) {
        let { price, shipping, quantity } = product;
        itemQuantity = itemQuantity + quantity;
        total += price * quantity;
        shippingCharge += shipping;
        tax = Number((total * .10).toFixed(2));
        grandTotal = total + shippingCharge + tax;

    }
    const navigate = useNavigate()
    const reviewOrder = () => {
        if (text === "Review Order") {
            navigate('/order-review')
        } else {
            navigate('/shipping')
        }
    }
    return (
        <div className='shopping-cart'>
            <h2 className='order-heading'>Order summary</h2>
            <p className="order-details">Selected Items : {itemQuantity}</p>
            <p className="order-details">Total Price : $ {total}</p>
            <p className="order-details">Total Shipping Charge : $ {shippingCharge}</p>
            <p className="order-details">Tax : $ {tax} (10%)</p>
            <h3 className="grand-total">Grand Total : $ {Number((grandTotal).toFixed(2))}</h3>
            <button className="order">
                <p className="order-text" onClick={reviewOrder}>{text}</p>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
            <button className="clear" onClick={clear}>
                <p className="clear-text">Clear Cart</p>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    );
};

export default Cart;