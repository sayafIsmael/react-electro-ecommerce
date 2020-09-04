import React from 'react'
import Slider from "react-slick";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="js-next position-absolute top-0 font-size-17 u-slick__arrow-normal top-10 fa fa-angle-right right-0 slick-arrow"
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={"js-prev position-absolute top-0 font-size-17 u-slick__arrow-normal top-10 fa fa-angle-left right-1 slick-arrow"}
            style={{ ...style }}
            onClick={onClick}
        />

    );
}

const sliderSettings = {
    // autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    className: "js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble pb-7 pt-2 px-1",
    // dotsClass: "",
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [{
        breakpoint: 1400,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 1200,
        settings: {
            slidesToShow: 4
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
        <div
            style={{

            }}
        >
            <ul
                className="js-pagination text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-3 mt-md-0"
                style={{
                    margin: '0 0.4375rem',
                    display: 'flex',
                    pointerEvents: 'all',
                }}> {dots} </ul>
        </div>
    ),
    customPaging: i => (
        <div>
            <span></span>
        </div >
    )
}

export default function RecommendedProducts() {
    return (
        <div className="col-xl-9 col-wd-9gdot5">
            {/* <!-- Recommended Products --> */}
            <div className="mb-6 d-none d-xl-block">
                <div className="position-relative">
                    <div className="border-bottom border-color-1 mb-2">
                        <h3 className="d-inline-block section-title section-title__full mb-0 pb-2 font-size-22">Recommended Products</h3>
                    </div>
                    <Slider {...sliderSettings}>
                        <div className="js-slide products-group">
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                    {/* <div className="js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble pb-7 pt-2 px-1"
                        data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-3 mt-md-0"
                        data-slides-show="5"
                        data-slides-scroll="1"
                        data-arrows-classes="position-absolute top-0 font-size-17 u-slick__arrow-normal top-10"
                        data-arrow-left-classes="fa fa-angle-left right-1"
                        data-arrow-right-classes="fa fa-angle-right right-0"
                        data-responsive='[{
                                      "breakpoint": 1400,
                                      "settings": {
                                        "slidesToShow": 4
                                      }
                                    }, {
                                        "breakpoint": 1200,
                                        "settings": {
                                          "slidesToShow": 4
                                        }
                                    }, {
                                      "breakpoint": 992,
                                      "settings": {
                                        "slidesToShow": 3
                                      }
                                    }, {
                                      "breakpoint": 768,
                                      "settings": {
                                        "slidesToShow": 2
                                      }
                                    }, {
                                      "breakpoint": 554,
                                      "settings": {
                                        "slidesToShow": 2
                                      }
                                    }]'>
                        <div className="js-slide products-group">
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                            <div className="product-item">
                                <div className="product-item__outer h-100">
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
                    </div> */}
                </div>
            </div>
        </div>
    )
}