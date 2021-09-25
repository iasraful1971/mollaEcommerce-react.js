import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart]  = useState([]);
   
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // handle add to cart 
    const handleAddToCart = (product) =>{
       const newCart =[...cart, product];
       setCart(newCart)
    }
    return (

        <div className="container shop-container py-5">
             <div className="cart-area">
                    <div className="cart-container">
                          <Cart cart={cart}></Cart>
                    </div>
                </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="product-container">
                        <p style={{textAlign:'center' , padding:'20px 0', fontSize:'20px' , fontWeight: 'bold', color:'purple'}}>In our Store available products are : {products.length}</p>
                        <div className="product-grid">
                            {
                                products.map(product => <Product
                                key={product.key}
                                product={product}
                                handleAddToCart={handleAddToCart}
                                ></Product>)
                            }
                        </div>
                    </div>

                </div>
               
            </div>
        </div>
    );
};

export default Shop;