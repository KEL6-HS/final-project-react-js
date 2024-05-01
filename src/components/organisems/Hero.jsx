import React from "react";
import hero from "../../../public/img/hero/hero-1.jpg"

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__slider owl-carousel">
          <div className="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
            <div className="container md:mx-auto max-w-screen-lg">
              <div className="flex">
                <div className="sm:w-full md:w-8/12 lg:w-7/12 px-4">
                  <div className="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Fall - Winter Collections 2030</h2>
                    <p>
                      A specialist label creating luxury essentials. Ethically
                      crafted with an unwavering commitment to exceptional
                      quality.
                    </p>
                    <a href="#" className="primary-btn">
                      Shop now <span className="arrow_right"></span>
                    </a>
                    <div className="hero__social">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__items set-bg" data-setbg="img/hero/hero-2.jpg">
            <div className="container md:mx-auto max-w-screen-lg">
              <div className="flex">
                <div className="sm:w-full md:w-8/12 lg:w-7/12 px-4">
                  <div className="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Fall - Winter Collections 2030</h2>
                    <p>
                      A specialist label creating luxury essentials. Ethically
                      crafted with an unwavering commitment to exceptional
                      quality.
                    </p>
                    <a href="#" className="primary-btn">
                      Shop now <span className="arrow_right"></span>
                    </a>
                    <div className="hero__social">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
