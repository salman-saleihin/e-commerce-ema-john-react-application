import React from 'react';
import './Product.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons' ;

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>

            <div>
                <img src={img} alt="Product Images from Data" />
            </div>

            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by : {seller}</small></p>
                <p>$ {price}</p>
                <br />
                <p><small>Only {stock} Left in Stock - Order Now</small></p>
                <button
                    className='main-button'    
                    // onClick={props.handleAddProduct(props.product)}
                    onClick={() => props.handleAddProduct(props.product)}
                > 
                     <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;