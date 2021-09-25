import React from 'react';
import banner1 from '../../images/banner-1.jpg';
import banner2 from '../../images/banner-2.jpg';
import banner3 from '../../images/banner-3.jpg';
import './Hero.css';


const Heroarea = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
   
    <div className="slider1">
            <h3>Big fighting</h3>
            <h1>Eco Dot Third Gen.</h1>
            <h3>$ 5666</h3>
            <button>Buy here</button>
    </div>
    </div>
    <div class="carousel-item">
      <div className="slider2">
      <h3>Big fighting</h3>
            <h1>Eco Dot Third Gen.</h1>
            <h3>$ 5666</h3>
            <button>Buy here</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    </div>
                    <div className="col-lg-4">
                        <div className="banner">
                            <div className="one">
                               <img src={banner1} alt="" />
                            </div>
                            <div className="two">
                            <img src={banner2} alt="" />

                            </div>
                            <div className="three">
                            <img src={banner3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heroarea;