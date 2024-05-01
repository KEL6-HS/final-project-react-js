import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__option">
          <div className="offcanvas__links">
            <a href="#">Sign in</a>
            <a href="#">FAQs</a>
          </div>
          <div className="offcanvas__top__hover">
            <span>
              Usd <i className="arrow_carrot-down"></i>
            </span>
            <ul>
              <li>USD</li>
              <li>EUR</li>
              <li>USD</li>
            </ul>
          </div>
        </div>
        <div className="offcanvas__nav__option">
          <a href="#" className="search-switch">
            <img src="img/icon/search.png" alt />
          </a>
          <a href="#">
            <img src="img/icon/heart.png" alt />
          </a>
          <a href="#">
            <img src="img/icon/cart.png" alt /> <span>0</span>
          </a>
          <div className="price">$0.00</div>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__text">
          <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
      </div>

      <header className="header">
        <div className="header__top">
          <div className="container md:mx-auto max-w-screen-lg">
            <div className="flex">
              <div className="lg:w-6/12 md:w-7/12">
                <div className="header__top__left">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
              </div>
              <div className="lg:w-6/12 md:w-5/12">
                <div className="header__top__right">
                  <div className="header__top__links">
                    <a href="sign_in.html">Sign in</a>
                    <a href="#">FAQs</a>
                  </div>
                  <div className="header__top__hover">
                    <span>
                      Usd <i className="arrow_carrot-down"></i>
                    </span>
                    <ul>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>USD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-3 md:mx-auto max-w-screen-lg">
          <div className="flex flex-wrap">
            <div className="sm:w-full lg:w-3/12 md:w-3/12">
              <div className="header__logo">
                <a href="./index.html">
                  <img src="img/logo.png" alt />
                </a>
              </div>
            </div>
            <div className="sm:w-full md:w-6/12 lg:w-6/12">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="dropdown">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/shop-details">Shop Details</Link>
                      </li>
                      <li>
                        <Link to="/shopping-cart">Shopping Cart</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Check Out</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contacts</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="sm:w-full lg:w-3/12 md:w-3/12">
              <div className="header__nav__option">
                <a href="#" className="search-switch">
                  <img src="img/icon/search.png" alt />
                </a>
                <a href="#">
                  <img src="img/icon/heart.png" alt />
                </a>
                <a href="#">
                  <img src="img/icon/cart.png" alt /> <span>0</span>
                </a>
                <div className="price">$0.00</div>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
}
