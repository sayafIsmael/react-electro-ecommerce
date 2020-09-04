import React from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import './recommendation.scss'

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
    draggable: true,
    autoplaySpeed: 5000,
    dots: true,
    className: "position-static overflow-hidden u-slick-overflow-visble pb-7 pt-2 px-1",
    // dotsClass: "",
    // infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1400,
        settings: {
            slidesToShow: 6
        }
    }, {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 554,
        settings: {
            slidesToShow: 2
        }
    }],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
        <div style={{}}>
            <ul
                className="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-3 mt-md-0"
                style={{}}> {dots} </ul>
        </div>
    ),
    customPaging: i => (
        <div>
            <span></span>
        </div >
    )
}


export default function Recommendation() {
    return (
        <div className="position-relative">
            <div className="border-bottom border-color-1 mb-2">
                <h3 className="section-title section-title__full d-inline-block mb-0 pb-2 font-size-22">Recommendation for you</h3>
            </div>
            <Slider {...sliderSettings}>
                <div className="js-slide products-group">
                    <div className="product-item product-item-hover-fix" >
                        <div className="product-item__outer h-100 w-100">
                            <div className="product-item__inner px-wd-4 p-2 p-md-3">
                                <div className="product-item__body pb-xl-2">
                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                    <div className="mb-2">
                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                                    </div>
                                    <div className="flex-center-between mb-1">
                                        <div className="prodcut-price">
                                            <div className="text-gray-100">$685,00</div>
                                        </div>
                                        <div className="d-none d-xl-block prodcut-add-cart">
                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item__footer">
                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="js-slide products-group">
                    <div className="product-item product-item-hover-fix">
                        <div className="product-item__outer h-100 w-100">
                            <div className="product-item__inner px-wd-4 p-2 p-md-3">
                                <div className="product-item__body pb-xl-2">
                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                    <div className="mb-2">
                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                                    </div>
                                    <div className="flex-center-between mb-1">
                                        <div className="prodcut-price">
                                            <div className="text-gray-100">$685,00</div>
                                        </div>
                                        <div className="d-none d-xl-block prodcut-add-cart">
                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item__footer">
                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="js-slide products-group">
                    <div className="product-item product-item-hover-fix">
                        <div className="product-item__outer h-100 w-100">
                            <div className="product-item__inner px-wd-4 p-2 p-md-3">
                                <div className="product-item__body pb-xl-2">
                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                    <div className="mb-2">
                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img3.jpg" alt="Image Description" /></a>
                                    </div>
                                    <div className="flex-center-between mb-1">
                                        <div className="prodcut-price">
                                            <div className="text-gray-100">$685,00</div>
                                        </div>
                                        <div className="d-none d-xl-block prodcut-add-cart">
                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item__footer">
                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="js-slide products-group">
                    <div className="product-item product-item-hover-fix">
                        <div className="product-item__outer h-100 w-100">
                            <div className="product-item__inner px-wd-4 p-2 p-md-3">
                                <div className="product-item__body pb-xl-2">
                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                    <div className="mb-2">
                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img4.jpg" alt="Image Description" /></a>
                                    </div>
                                    <div className="flex-center-between mb-1">
                                        <div className="prodcut-price">
                                            <div className="text-gray-100">$685,00</div>
                                        </div>
                                        <div className="d-none d-xl-block prodcut-add-cart">
                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item__footer">
                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="js-slide products-group">
                    <div className="product-item product-item-hover-fix">
                        <div className="product-item__outer h-100 w-100">
                            <div className="product-item__inner px-wd-4 p-2 p-md-3">
                                <div className="product-item__body pb-xl-2">
                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                    <div className="mb-2">
                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img5.jpg" alt="Image Description" /></a>
                                    </div>
                                    <div className="flex-center-between mb-1">
                                        <div className="prodcut-price">
                                            <div className="text-gray-100">$685,00</div>
                                        </div>
                                        <div className="d-none d-xl-block prodcut-add-cart">
                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item__footer">
                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="js-slide products-group">
                    <div className="product-item product-item-hover-fix">
                        <div className="product-item__outer h-100 w-100">
                            <div className="product-item__inner px-wd-4 p-2 p-md-3">
                                <div className="product-item__body pb-xl-2">
                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                    <div className="mb-2">
                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img6.jpg" alt="Image Description" /></a>
                                    </div>
                                    <div className="flex-center-between mb-1">
                                        <div className="prodcut-price">
                                            <div className="text-gray-100">$685,00</div>
                                        </div>
                                        <div className="d-none d-xl-block prodcut-add-cart">
                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item__footer">
                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="js-slide products-group">
                    <div className="product-item product-item-hover-fix">
                        <div className="product-item__outer h-100 w-100">
                            <div className="product-item__inner px-wd-4 p-2 p-md-3">
                                <div className="product-item__body pb-xl-2">
                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                    <div className="mb-2">
                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                                    </div>
                                    <div className="flex-center-between mb-1">
                                        <div className="prodcut-price">
                                            <div className="text-gray-100">$685,00</div>
                                        </div>
                                        <div className="d-none d-xl-block prodcut-add-cart">
                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item__footer">
                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="js-slide products-group">
                    <div className="product-item product-item-hover-fix">
                        <div className="product-item__outer h-100 w-100">
                            <div className="product-item__inner px-wd-4 p-2 p-md-3">
                                <div className="product-item__body pb-xl-2">
                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                    <div className="mb-2">
                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                                    </div>
                                    <div className="flex-center-between mb-1">
                                        <div className="prodcut-price">
                                            <div className="text-gray-100">$685,00</div>
                                        </div>
                                        <div className="d-none d-xl-block prodcut-add-cart">
                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item__footer">
                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="js-slide products-group">
                    <div className="product-item product-item-hover-fix">
                        <div className="product-item__outer h-100 w-100">
                            <div className="product-item__inner px-wd-4 p-2 p-md-3">
                                <div className="product-item__body pb-xl-2">
                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                    <div className="mb-2">
                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                                    </div>
                                    <div className="flex-center-between mb-1">
                                        <div className="prodcut-price">
                                            <div className="text-gray-100">$685,00</div>
                                        </div>
                                        <div className="d-none d-xl-block prodcut-add-cart">
                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item__footer">
                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}