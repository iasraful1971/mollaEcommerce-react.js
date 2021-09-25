import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
  //  console.log(props.product);
    const {name , img , price ,seller , star} =props.product
  
    return (
        <div className="single-product">
            <img src={img} alt="" />
            <p>{name.slice(0,80)}</p>
            <h4>Price: ${price}</h4>
            <h6>seller: {seller}</h6>

            <Rating className="star"
            initialRating={star}
             emptySymbol="far fa-star"
             fullSymbol="fas fa-star"
            readonly
            > </Rating> <br />
            <button onClick={()=> props.handleAddToCart(props.product)}> <i class="fas fa-shopping-cart"></i> Add to cart</button>
        </div>
    );
};

export default Product;