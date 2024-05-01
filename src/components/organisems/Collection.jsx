import React from 'react'

export default function Collection() {
  return (
   <>
    <section className="banner spad">
        <div className="container mx-auto">
            <div className="flex flex-wrap">
                <div className="lg:w-7/12 lg:basis-7/12 basis-full px-3 offset-lg-4 w-full">
                    <div className="banner__item">
                        <div className="banner__item__pic">
                            <img src="img/banner/banner-1.jpg" alt />
                        </div>
                        <div className="banner__item__text">
                            <h2>Clothing Collections 2030</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-5/12 lg:basis-5/12 basis-full px-3 w-full">
                    <div className="banner__item banner__item--middle">
                        <div className="banner__item__pic">
                            <img src="img/banner/banner-2.jpg" alt />
                        </div>
                        <div className="banner__item__text">
                            <h2>Accessories</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-7/12 lg:basis-7/12 basis-full px-3 w-full">
                    <div className="banner__item banner__item--last">
                        <div className="banner__item__pic">
                            <img src="img/banner/banner-3.jpg" alt />
                        </div>
                        <div className="banner__item__text">
                            <h2>Shoes Spring 2030</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}
