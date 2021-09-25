import React from 'react';
import logo from '../../images/logo (2).png';
import Heroarea from '../Heroarea/Hero';
import './Header.css';

const Headerarea = () => {
    return (
      <>
      
      <div className="header">
            <div className="topbar">
                <div className="left">
                    <p><i class="fas fa-phone"></i><span style={{marginLeft:'10px'}}>Call: +0123 456 789</span> </p>
                </div>
                <div className="right">
                    <ul>
                        <li>USD<i class="fas fa-angle-down"></i></li>
                        <li>English<i class="fas fa-angle-down"></i></li>
                        <li>Sign in/ Sign Up<i class="fas fa-angle-down"></i></li>
                    </ul>
                </div>
       
            </div>
            <div className="logo-area">
            <div className="left">
                <img src={logo} alt="" />
            </div>
            <div className="middle">
                <input className="form-control" placeholder="Search Your products" type="text"/>
            </div>
            <div className="right">
                <ul>
                    <li><i class="fas fa-compress-arrows-alt"></i></li>
                    <li><i class="fas fa-heart"></i></li>
                    <li><i class="fas fa-shopping-cart"></i></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="menu">
             <div className="left">
                 <span><i class="fas fa-bars"></i> categories</span>
             </div>

             <div className="middle">
             
             <nav>
             <ul>
                
                <a class="nav-link" aria-current="page" href="/">Home</a>
                <a class="nav-link" aria-current="page" href="/">Shop</a>
                <a class="nav-link" aria-current="page" href="/">Products</a>
                <a class="nav-link" aria-current="page" href="/">Pages</a>
                <a class="nav-link" aria-current="page" href="/">Blogs</a>
                <a class="nav-link" aria-current="page" href="/">About Us</a>
                <a class="nav-link" aria-current="page" href="/">Contact</a>
                
               
        
          </ul>
             </nav>

             </div>
             <div className="right">
           
                 <p> <i class="fas fa-poo-storm"></i> Clearance Up to 30% Off</p>
             </div>
         </div>
            <Heroarea></Heroarea>
       
      </>
    );
};

export default Headerarea;