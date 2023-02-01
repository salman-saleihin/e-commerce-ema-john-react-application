import React from 'react';
import './Product.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons' ;
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props);
    const { img, name, seller, price, stock , key} = props.product;
    return (
        <div className='product'>

            <div>
                <img src={img} alt="Product Images from Data" />
            </div>

            <div>
                <h4 className='product-name'> <Link to={"/product/"+key}>{name}</Link> </h4>
                <br />
                <p><small>by : {seller}</small></p>
                <p>$ {price}</p>
                <br />
                <p><small>Only {stock} Left in Stock - Order Now</small></p>
                { props.showAddToCart === true && <button
                    className='main-button'    
                    // onClick={props.handleAddProduct(props.product)}
                    onClick={() => props.handleAddProduct(props.product)}
                > 
                     <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
                </button>}
            </div>
        </div>
    );
};

export default Product;