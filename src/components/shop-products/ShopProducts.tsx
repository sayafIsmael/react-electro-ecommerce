import React from "react"

export default function ShopProducts({ category }) {
    return (
        <React.Fragment>
            <div className="flex-center-between mb-3">
                <h3 className="font-size-25 mb-0">{category}</h3>
                <p className="font-size-14 text-gray-90 mb-0">Showing 1–25 of 56 results</p>
            </div>
            {/* <!-- End shop-control-bar Title -->
            // <!-- Shop-control-bar --> */}
            <div className="bg-gray-1 flex-center-between borders-radius-9 py-1">
                <div className="d-xl-none">
                    {/* <!-- Account Sidebar Toggle Button --> */}
                    <a id="sidebarNavToggler1" className="btn btn-sm py-1 font-weight-normal" href="javascript:;" role="button"
                        aria-controls="sidebarContent1"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-unfold-event="click"
                        data-unfold-hide-on-scroll="false"
                        data-unfold-target="#sidebarContent1"
                        data-unfold-type="css-animation"
                        data-unfold-animation-in="fadeInLeft"
                        data-unfold-animation-out="fadeOutLeft"
                        data-unfold-duration="500">
                        <i className="fas fa-sliders-h"></i> <span className="ml-1">Filters</span>
                    </a>
                    {/* <!-- End Account Sidebar Toggle Button --> */}
                </div>
                <div className="px-3 d-none d-xl-block">
                    <ul className="nav nav-tab-shop" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-one-example1-tab" data-toggle="pill" href="#pills-one-example1" role="tab" aria-controls="pills-one-example1" aria-selected="false">
                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                    <i className="fa fa-th"></i>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-two-example1-tab" data-toggle="pill" href="#pills-two-example1" role="tab" aria-controls="pills-two-example1" aria-selected="false">
                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                    <i className="fa fa-align-justify"></i>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-three-example1-tab" data-toggle="pill" href="#pills-three-example1" role="tab" aria-controls="pills-three-example1" aria-selected="true">
                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                    <i className="fa fa-list"></i>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-four-example1-tab" data-toggle="pill" href="#pills-four-example1" role="tab" aria-controls="pills-four-example1" aria-selected="true">
                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                    <i className="fa fa-th-list"></i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                    <form method="get">
                        {/* <!-- Select --> */}
                        <select className="js-select selectpicker dropdown-select max-width-200 max-width-160-sm right-dropdown-0 px-2 px-xl-0"
                            data-style="btn-sm bg-white font-weight-normal py-2 border text-gray-20 bg-lg-down-transparent border-lg-down-0">
                            <option value="one" selected>Default sorting</option>
                            <option value="two">Sort by popularity</option>
                            <option value="three">Sort by average rating</option>
                            <option value="four">Sort by latest</option>
                            <option value="five">Sort by price: low to high</option>
                            <option value="six">Sort by price: high to low</option>
                        </select>
                        {/* <!-- End Select --> */}
                    </form>
                    <form method="POST" className="ml-2 d-none d-xl-block">
                        {/* <!-- Select --> */}
                        <select className="js-select selectpicker dropdown-select max-width-120"
                            data-style="btn-sm bg-white font-weight-normal py-2 border text-gray-20 bg-lg-down-transparent border-lg-down-0">
                            <option value="one" selected>Show 20</option>
                            <option value="two">Show 40</option>
                            <option value="three">Show All</option>
                        </select>
                        {/* <!-- End Select --> */}
                    </form>
                </div>
                <nav className="px-3 flex-horizontal-center text-gray-20 d-none d-xl-flex">
                    <form method="post" className="min-width-50 mr-1">
                        <input min="1" max="3" step="1" type="number" className="form-control text-center px-2 height-35" value="1" />
                    </form> of 3
                                <a className="text-gray-30 font-size-20 ml-2" href="#">→</a>
                </nav>
            </div>
            {/* <!-- End Shop-control-bar --> */}
            {/* <!-- Shop Body --> */}
            {/* <!-- Tab Content --> */}
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade pt-2 show active" id="pills-one-example1" role="tabpanel" aria-labelledby="pills-one-example1-tab" data-target-group="groups">
                    <ul className="row list-unstyled products-group no-gutters">

                        <li className="col-6 col-md-3 col-wd-2gdot4 product-item">
                            <div className="product-item__outer h-100">
                                <div className="product-item__inner px-xl-4 p-3">
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
                        </li>
                        <li className="col-6 col-md-3 col-wd-2gdot4 product-item">
                            <div className="product-item__outer h-100">
                                <div className="product-item__inner px-xl-4 p-3">
                                    <div className="product-item__body pb-xl-2">
                                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                                        <div className="mb-2">
                                            <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img2.jpg" alt="Image Description"/></a>
                                                    </div>
                                            <div className="flex-center-between mb-1">
                                                <div className="prodcut-price d-flex align-items-center position-relative">
                                                    <ins className="font-size-20 text-red text-decoration-none">$1999,00</ins>
                                                    <del className="font-size-12 tex-gray-6 position-absolute bottom-100">$2 299,00</del>
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
                                    </li>
                    </ul>
                </div>
                    <div className="tab-pane fade pt-2" id="pills-two-example1" role="tabpanel" aria-labelledby="pills-two-example1-tab" data-target-group="groups">
                        <ul className="row list-unstyled products-group no-gutters">
                            <li className="col-6 col-md-3 col-wd-2gdot4 product-item">
                                <div className="product-item__outer h-100">
                                    <div className="product-item__inner px-xl-4 p-3">
                                        <div className="product-item__body pb-xl-2">
                                            <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                            <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                            <div className="mb-2">
                                                <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                                            </div>
                                            <div className="mb-3">
                                                <a className="d-inline-flex align-items-center small font-size-14" href="#">
                                                    <div className="text-warning mr-2">
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                    </div>
                                                    <span className="text-secondary">(40)</span>
                                                </a>
                                            </div>
                                            <ul className="font-size-12 p-0 text-gray-110 mb-4">
                                                <li className="line-clamp-1 mb-1 list-bullet">Brand new and high quality</li>
                                                <li className="line-clamp-1 mb-1 list-bullet">Made of supreme quality, durable EVA crush resistant, anti-shock material.</li>
                                                <li className="line-clamp-1 mb-1 list-bullet">20 MP Electro and 28 megapixel CMOS rear camera</li>
                                            </ul>
                                            <div className="text-gray-20 mb-2 font-size-12">SKU: FW511948218</div>
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
                            </li>

                        </ul>
                    </div>
                    <div className="tab-pane fade pt-2" id="pills-three-example1" role="tabpanel" aria-labelledby="pills-three-example1-tab" data-target-group="groups">
                        <ul className="d-block list-unstyled products-group prodcut-list-view">
                            <li className="product-item remove-divider">
                                <div className="product-item__outer w-100">
                                    <div className="product-item__inner remove-prodcut-hover py-4 row">
                                        <div className="product-item__header col-6 col-md-4">
                                            <div className="mb-2">
                                                <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                                            </div>
                                        </div>
                                        <div className="product-item__body col-6 col-md-5">
                                            <div className="pr-lg-10">
                                                <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                <h5 className="mb-2 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                                <div className="prodcut-price mb-2 d-md-none">
                                                    <div className="text-gray-100">$685,00</div>
                                                </div>
                                                <div className="mb-3 d-none d-md-block">
                                                    <a className="d-inline-flex align-items-center small font-size-14" href="#">
                                                        <div className="text-warning mr-2">
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                        <span className="text-secondary">(40)</span>
                                                    </a>
                                                </div>
                                                <ul className="font-size-12 p-0 text-gray-110 mb-4 d-none d-md-block">
                                                    <li className="line-clamp-1 mb-1 list-bullet">Brand new and high quality</li>
                                                    <li className="line-clamp-1 mb-1 list-bullet">Made of supreme quality, durable EVA crush resistant, anti-shock material.</li>
                                                    <li className="line-clamp-1 mb-1 list-bullet">20 MP Electro and 28 megapixel CMOS rear camera</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-item__footer col-md-3 d-md-block">
                                            <div className="mb-3">
                                                <div className="prodcut-price mb-2">
                                                    <div className="text-gray-100">$685,00</div>
                                                </div>
                                                <div className="prodcut-add-cart">
                                                    <a href="../shop/single-product-fullwidth.html" className="btn btn-sm btn-block btn-primary-dark btn-wide transition-3d-hover">Add to cart</a>
                                                </div>
                                            </div>
                                            <div className="flex-horizontal-center justify-content-between justify-content-wd-center flex-wrap">
                                                <a href="../shop/compare.html" className="text-gray-6 font-size-13 mx-wd-3"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                <a href="../shop/wishlist.html" className="text-gray-6 font-size-13 mx-wd-3"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="tab-pane fade pt-2" id="pills-four-example1" role="tabpanel" aria-labelledby="pills-four-example1-tab" data-target-group="groups">
                        <ul className="d-block list-unstyled products-group prodcut-list-view-small">
                            <li className="product-item remove-divider">
                                <div className="product-item__outer w-100">
                                    <div className="product-item__inner remove-prodcut-hover py-4 row">
                                        <div className="product-item__header col-6 col-md-2">
                                            <div className="mb-2">
                                                <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                                            </div>
                                        </div>
                                        <div className="product-item__body col-6 col-md-7">
                                            <div className="pr-lg-10">
                                                <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                <h5 className="mb-2 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                                <div className="prodcut-price d-md-none">
                                                    <div className="text-gray-100">$685,00</div>
                                                </div>
                                                <ul className="font-size-12 p-0 text-gray-110 mb-4 d-none d-md-block">
                                                    <li className="line-clamp-1 mb-1 list-bullet">Brand new and high quality</li>
                                                    <li className="line-clamp-1 mb-1 list-bullet">Made of supreme quality, durable EVA crush resistant, anti-shock material.</li>
                                                    <li className="line-clamp-1 mb-1 list-bullet">20 MP Electro and 28 megapixel CMOS rear camera</li>
                                                </ul>
                                                <div className="mb-3 d-none d-md-block">
                                                    <a className="d-inline-flex align-items-center small font-size-14" href="#">
                                                        <div className="text-warning mr-2">
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                        <span className="text-secondary">(40)</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-item__footer col-md-3 d-md-block">
                                            <div className="mb-2 flex-center-between">
                                                <div className="prodcut-price">
                                                    <div className="text-gray-100">$685,00</div>
                                                </div>
                                                <div className="prodcut-add-cart">
                                                    <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                </div>
                                            </div>
                                            <div className="flex-horizontal-center justify-content-between justify-content-wd-center flex-wrap border-top pt-3">
                                                <a href="../shop/compare.html" className="text-gray-6 font-size-13 mx-wd-3"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                <a href="../shop/wishlist.html" className="text-gray-6 font-size-13 mx-wd-3"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                {/* <!-- End Tab Content --> */}
                {/* <!-- End Shop Body --> */}
                {/* <!-- Shop Pagination --> */}
                <nav className="d-md-flex justify-content-between align-items-center border-top pt-3" aria-label="Page navigation example">
                    <div className="text-center text-md-left mb-3 mb-md-0">Showing 1–25 of 56 results</div>
                    <ul className="pagination mb-0 pagination-shop justify-content-center justify-content-md-start">
                        <li className="page-item"><a className="page-link current" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                    </ul>
                </nav>
                {/* <!-- End Shop Pagination --> */}
        </React.Fragment>
    )
}