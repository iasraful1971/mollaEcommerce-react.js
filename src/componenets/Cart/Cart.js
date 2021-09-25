import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart);

    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const tax = total /50;
    let ship = 0;
    if(total > 100){
        ship = 50
    }
    else{
        ship = 0;
    }
    const grandTotal = total + tax + ship
    return (
        <div>
                          
              <h5>Ordered History: </h5>   <hr />
              <h5>Item Orderd: {props.cart.length}</h5>
              <br />
              <h6>Price: ${total.toFixed(2)}</h6>
              <p>tax : ${tax.toFixed(2)}</p>
              <p>shipping: ${ship}</p>
              <hr />
              <h4>Grand Total: ${grandTotal.toFixed(2)}</h4> <br />
              <button>Procced</button>
           
        </div>
    );
};

export default Cart;