import React from 'react';
import Slider from "react-slick";
import { chunkArray } from './../../helpers/helper'
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="js-next position-absolute top-0 font-size-17 u-slick__arrow-normal top-10 pt-6 pt-md-0 fa fa-angle-right right-1 slick-arrow"
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={"js-prev position-absolute top-0 font-size-17 u-slick__arrow-normal top-10 pt-6 pt-md-0 fa fa-angle-left right-2 slick-arrow"}
            style={{ ...style }}
            onClick={onClick}
        />

    );
}

const sliderSettings = {
    // autoplay: true,
    draggable:true,
    autoplaySpeed: 5000,
    dots: true,
    className: "position-static overflow-hidden u-slick-overflow-visble py-5",
    // dotsClass: "",
    infinite: true,
    speed: 500,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
        <div style={{}}>
            <ul
                className="js-pagination text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-3 mt-md-0"
                style={{}}> {dots} </ul>
        </div>
    ),
    customPaging: i => (
        <div>
            <span></span>
        </div >
    )
}

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function SpecialCategory() {
    console.log("aaaaaaaaa", chunkArray(products, 4))
    return (
        <div className="mb-6" style={{ backgroundImage: 'url(/assets/img/1920X1080/img4.jpg)' }}>
            <div className="container">
                <div className="row min-height-564 align-items-center">
                    <div className="col-12 col-lg-4 col-xl-5 col-wd-6 d-none d-md-block">
                        <img className="img-fluid" src="/assets/img/665X616/img1.png" alt="Image Description" />
                    </div>
                    <div className="col-12 col-lg-8 col-xl-7 col-wd-6 pt-6 pt-md-0">
                        <div className=" d-flex border-bottom border-color-1 mr-md-2">
                            <h3 className="section-title section-title__full mb-0 pb-2 font-size-22">Television Entertainment</h3>
                        </div>
                        <Slider {...sliderSettings}>
                            <div className="js-slide">
                                <ul className="row list-unstyled products-group no-gutters mb-0 overflow-visible">
                                    <li className="col-md-6 product-item product-item__card mb-2 remove-divider pr-md-2 border-bottom-0">
                                        <div className="product-item__outer h-100 w-100">
                                            <div className="product-item__inner p-md-3 row no-gutters bg-white max-width-334">
                                                <div className="col col-lg-auto product-media-left">
                                                    <a href="../shop/single-product-fullwidth.html" className="max-width-120 d-block"><img className="img-fluid" src="/assets/img/150X140/img1.jpg" alt="Image Description" /></a>
                                                </div>
                                                <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1 pr-3 pr-md-0 pt-1 pt-md-0">
                                                    <div className="mb-2">
                                                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Tablets</a></div>
                                                        <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet Air 3 WiFi 64GB Gold</a></h5>
                                                    </div>
                                                    <div className="flex-center-between mb-2">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$629,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-item__footer bg-white">
                                                        <div className="border-top pt-2 flex-center-between flex-wrap">
                                                            <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                            <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-md-6 product-item product-item__card mb-2 remove-divider pr-md-2 border-bottom-0">
                                        <div className="product-item__outer h-100 w-100">
                                            <div className="product-item__inner p-md-3 row no-gutters bg-white max-width-334">
                                                <div className="col col-lg-auto product-media-left">
                                                    <a href="../shop/single-product-fullwidth.html" className="max-width-120 d-block"><img className="img-fluid" src="/assets/img/150X140/img2.jpg" alt="Image Description" /></a>
                                                </div>
                                                <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1 pr-3 pr-md-0 pt-1 pt-md-0">
                                                    <div className="mb-2">
                                                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Laptops & Computers</a></div>
                                                        <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook  Revolve 810 G2</a></h5>
                                                    </div>
                                                    <div className="flex-center-between mb-2">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$1 299,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-item__footer bg-white">
                                                        <div className="border-top pt-2 flex-center-between flex-wrap">
                                                            <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                            <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-md-6 product-item product-item__card mb-2 remove-divider pr-md-2 border-bottom-0">
                                        <div className="product-item__outer h-100 w-100">
                                            <div className="product-item__inner p-md-3 row no-gutters bg-white max-width-334">
                                                <div className="col col-lg-auto product-media-left">
                                                    <a href="../shop/single-product-fullwidth.html" className="max-width-120 d-block"><img className="img-fluid" src="/assets/img/150X140/img3.jpg" alt="Image Description" /></a>
                                                </div>
                                                <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1 pr-3 pr-md-0 pt-1 pt-md-0">
                                                    <div className="mb-2">
                                                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Accesories</a></div>
                                                        <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Pendrive USB 3.0 Flash 64 GB</a></h5>
                                                    </div>
                                                    <div className="flex-center-between mb-2">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$110,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-item__footer bg-white">
                                                        <div className="border-top pt-2 flex-center-between flex-wrap">
                                                            <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                            <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-md-6 product-item product-item__card mb-2 remove-divider pr-md-2 border-bottom-0">
                                        <div className="product-item__outer h-100 w-100">
                                            <div className="product-item__inner p-md-3 row no-gutters bg-white max-width-334">
                                                <div className="col col-lg-auto product-media-left">
                                                    <a href="../shop/single-product-fullwidth.html" className="max-width-120 d-block"><img className="img-fluid" src="/assets/img/150X140/img7.jpg" alt="Image Description" /></a>
                                                </div>
                                                <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1 pr-3 pr-md-0 pt-1 pt-md-0">
                                                    <div className="mb-2">
                                                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Headphones</a></div>
                                                        <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">White Solo 2 Wireless</a></h5>
                                                    </div>
                                                    <div className="flex-center-between mb-2">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$110,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-item__footer bg-white">
                                                        <div className="border-top pt-2 flex-center-between flex-wrap">
                                                            <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                            <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
<div className="js-slide">
                                <ul className="row list-unstyled products-group no-gutters mb-0 overflow-visible">
                                    <li className="col-md-6 product-item product-item__card mb-2 remove-divider pr-md-2 border-bottom-0">
                                        <div className="product-item__outer h-100 w-100">
                                            <div className="product-item__inner p-md-3 row no-gutters bg-white max-width-334">
                                                <div className="col col-lg-auto product-media-left">
                                                    <a href="../shop/single-product-fullwidth.html" className="max-width-120 d-block"><img className="img-fluid" src="/assets/img/150X140/img1.jpg" alt="Image Description" /></a>
                                                </div>
                                                <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1 pr-3 pr-md-0 pt-1 pt-md-0">
                                                    <div className="mb-2">
                                                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Tablets</a></div>
                                                        <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet Air 3 WiFi 64GB Gold</a></h5>
                                                    </div>
                                                    <div className="flex-center-between mb-2">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$629,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-item__footer bg-white">
                                                        <div className="border-top pt-2 flex-center-between flex-wrap">
                                                            <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                            <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-md-6 product-item product-item__card mb-2 remove-divider pr-md-2 border-bottom-0">
                                        <div className="product-item__outer h-100 w-100">
                                            <div className="product-item__inner p-md-3 row no-gutters bg-white max-width-334">
                                                <div className="col col-lg-auto product-media-left">
                                                    <a href="../shop/single-product-fullwidth.html" className="max-width-120 d-block"><img className="img-fluid" src="/assets/img/150X140/img2.jpg" alt="Image Description" /></a>
                                                </div>
                                                <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1 pr-3 pr-md-0 pt-1 pt-md-0">
                                                    <div className="mb-2">
                                                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Laptops & Computers</a></div>
                                                        <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook  Revolve 810 G2</a></h5>
                                                    </div>
                                                    <div className="flex-center-between mb-2">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$1 299,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-item__footer bg-white">
                                                        <div className="border-top pt-2 flex-center-between flex-wrap">
                                                            <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                            <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-md-6 product-item product-item__card mb-2 remove-divider pr-md-2 border-bottom-0">
                                        <div className="product-item__outer h-100 w-100">
                                            <div className="product-item__inner p-md-3 row no-gutters bg-white max-width-334">
                                                <div className="col col-lg-auto product-media-left">
                                                    <a href="../shop/single-product-fullwidth.html" className="max-width-120 d-block"><img className="img-fluid" src="/assets/img/150X140/img3.jpg" alt="Image Description" /></a>
                                                </div>
                                                <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1 pr-3 pr-md-0 pt-1 pt-md-0">
                                                    <div className="mb-2">
                                                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Accesories</a></div>
                                                        <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Pendrive USB 3.0 Flash 64 GB</a></h5>
                                                    </div>
                                                    <div className="flex-center-between mb-2">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$110,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-item__footer bg-white">
                                                        <div className="border-top pt-2 flex-center-between flex-wrap">
                                                            <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                            <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-md-6 product-item product-item__card mb-2 remove-divider pr-md-2 border-bottom-0">
                                        <div className="product-item__outer h-100 w-100">
                                            <div className="product-item__inner p-md-3 row no-gutters bg-white max-width-334">
                                                <div className="col col-lg-auto product-media-left">
                                                    <a href="../shop/single-product-fullwidth.html" className="max-width-120 d-block"><img className="img-fluid" src="/assets/img/150X140/img7.jpg" alt="Image Description" /></a>
                                                </div>
                                                <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1 pr-3 pr-md-0 pt-1 pt-md-0">
                                                    <div className="mb-2">
                                                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Headphones</a></div>
                                                        <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">White Solo 2 Wireless</a></h5>
                                                    </div>
                                                    <div className="flex-center-between mb-2">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$110,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-item__footer bg-white">
                                                        <div className="border-top pt-2 flex-center-between flex-wrap">
                                                            <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                            <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}