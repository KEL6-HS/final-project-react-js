import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container lg:mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:w-3/12 md:w-6/12 sm:w-6/12">
              <div className="footer__about">
                <div className="footer__logo">
                  <a href="#">
                    <img src="img/footer-logo.png" alt />
                  </a>
                </div>
                <p>
                  The customer is at the heart of our unique business model,
                  which includes design.
                </p>
                <a href="#">
                  <img src="img/payment.png" alt />
                </a>
              </div>
            </div>
            <div className="lg:w-2/12 md:w-3/12 sm:w-6/12 offset-lg-1">
              <div className="footer__widget">
                <h6>Shopping</h6>
                <ul>
                  <li>
                    <a href="#">Clothing Store</a>
                  </li>
                  <li>
                    <a href="#">Trending Shoes</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <a href="#">Sale</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-2/12 md:w-3/12 sm:w-6/12">
              <div className="footer__widget">
                <h6>Shopping</h6>
                <ul>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Payment Methods</a>
                  </li>
                  <li>
                    <a href="#">Delivary</a>
                  </li>
                  <li>
                    <a href="#">Return & Exchanges</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-3/12 md:w-6/12 sm:w-6/12 offset-lg-1">
              <div className="footer__widget">
                <h6>NewLetter</h6>
                <div className="footer__newslatter">
                  <p>
                    Be the first to know about new arrivals, look books, sales &
                    promos!
                  </p>
                  <form action="#">
                    <input type="text" placeholder="Your email" />
                    <button type="submit">
                      <span className="icon_mail_alt"></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="lg:w-full text-center">
              <div className="footer__copyright__text">
                <p>
                  Copyright ©
                  <script>document.write(new Date().getFullYear());</script>
                  All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
