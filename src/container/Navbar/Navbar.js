import React from "react";
import "./Navbar.css";
import shoppingcart from "../../Assets/Images/shopping-cart.png"

const Navbar = () => {
  return (
    <>
      <div className="main-div-of-sports-theme-in-navbar">
        <div className="second-main-div-of-sports-theme-in-navbar">
          <div className="div-of-the-all-content-in-nav-bar">
            <div className="div-of-the-ruuning-specialists-and-rungran">
              <div className="div-of-merging-img-and-gran">
                <div className="div-of-the-run">
                  <h1>RUN</h1>
                  {/* <img src="https://run-gran.themerex.net/wp-content/uploads/2018/01/logo2.png"/> */}
                </div>
                <div className="div-of-gran-in-navbar">
                  <h1>GRAN</h1>
                </div>
              </div>
              <div className="div-of-THE-RUNNING-SPECIALIST">
                <p>the Running Specialists</p>
              </div>
            </div>
            <div className="div-of-the-nav-bar-content-in-forest-theme">
              <div className="div-of-the-home-nav-bar">
                <a className="classname-in-anchor-tag" href="">Home</a>
              </div>
              <div className="div-of-the-about-nav-bar">
                <a className="classname-in-anchor-tag" href="">About</a>
              </div>
              <div className="div-of-the-about-nav-bar">
                <a className="classname-in-anchor-tag" href="">Shop</a>
              </div>
              <div className="div-of-the-about-nav-bar">
                <a className="classname-in-anchor-tag" href="">Blog</a>
              </div>
            </div>
            <div className="cart-items-in-nav-bar">
              <img className="img-of-the-shopping-cart" src= {shoppingcart}/>
              <div className="cart-items-and-shop-up-btn">
              <div >
              <p className="cart-items">Cart: 0 items - $0.00</p>
              </div>
              <div className="outer-part-of-shop-up-btn">
              <button className="shop-up-button" type="button">
                <b> SHOP UP</b> 
                </button>
                </div>
                </div>
              </div>
             
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;