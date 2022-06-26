import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = props => {
    const { img, name, price, seller, ratings, ratingsCount } = props?.product
    return (
        <div className="cart">
            <div className="cart-image">
                <img src={img} alt={name} />
            </div>
            <div className="cart-text">
                <h3 className="cart-title">{name}</h3>
                <p className="price">Price: $ {price}</p>
                <small className="manufacturer">Manufacturer : {seller}</small>
                <small className="rating">Rating : {ratings} ({ratingsCount})</small>
            </div>
            <button className="cart-btn" onClick={() => props.cart(props.product)}>
                <p className='cart-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;