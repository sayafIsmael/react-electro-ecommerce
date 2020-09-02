import React from "react";
import ElectroLogo from './svg/ElectroLogo';
import Topbar from './../topbar/Topbar';
import HeaderSidebar from './../headersidebar/HeaderSidebar';

export default function Header() {
    return (
        /* <!-- ========== HEADER ========== -->*/
        <header id="header" className="u-header u-header-left-aligned-nav">
            <div className="u-header__section">
                <Topbar />
                {/* <!-- Logo-Search-header-icons --> */}
                <div className="py-2 py-xl-5 bg-primary-down-lg">
                    <div className="container my-0dot5 my-xl-0">
                        <div className="row align-items-center">
                            {/* <!-- Logo-offcanvas-menu --> */}
                            <div className="col-auto">
                                {/* <!-- Nav --> */}
                                <nav className="navbar navbar-expand u-header__navbar py-0 justify-content-xl-between max-width-270 min-width-270">
                                    {/* <!-- Logo --> */}
                                    <a className="order-1 order-xl-0 navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="../home/index.html" aria-label="Electro">
                                        <ElectroLogo />
                                    </a>
                                    {/* <!-- End Logo --> */}

                                    {/* <!-- Fullscreen Toggle Button --> */}
                                    <button id="sidebarHeaderInvokerMenu" type="button" className="navbar-toggler d-block btn u-hamburger mr-3 mr-xl-0"
                                        aria-controls="sidebarHeader"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-unfold-event="click"
                                        data-unfold-hide-on-scroll="false"
                                        data-unfold-target="#sidebarHeader1"
                                        data-unfold-type="css-animation"
                                        data-unfold-animation-in="fadeInLeft"
                                        data-unfold-animation-out="fadeOutLeft"
                                        data-unfold-duration="500">
                                        <span id="hamburgerTriggerMenu" className="u-hamburger__box">
                                            <span className="u-hamburger__inner"></span>
                                        </span>
                                    </button>
                                    {/* <!-- End Fullscreen Toggle Button --> */}
                                </nav>
                                {/* <!-- End Nav --> */}

                                <HeaderSidebar/>
                            </div>
                            {/* <!-- End Logo-offcanvas-menu --> */}
                            {/* <!-- Search Bar --> */}
                            <div className="col d-none d-xl-block">
                                <form className="js-focus-state">
                                    <label className="sr-only" htmlFor="searchproduct">Search</label>
                                    <div className="input-group">
                                        <input type="email" className="form-control py-2 pl-5 font-size-15 border-right-0 height-40 border-width-2 rounded-left-pill border-primary" name="email" id="searchproduct-item" placeholder="Search for Products" aria-label="Search for Products" aria-describedby="searchProduct1" required />
                                        <div className="input-group-append">
                                            {/* <!-- Select --> */}
                                            <select className="js-select selectpicker dropdown-select custom-search-categories-select"
                                                data-style="btn height-40 text-gray-60 font-weight-normal border-top border-bottom border-left-0 rounded-0 border-primary border-width-2 pl-0 pr-5 py-2">
                                                <option value="one" selected>All Categories</option>
                                                <option value="two">Two</option>
                                                <option value="three">Three</option>
                                                <option value="four">Four</option>
                                            </select>
                                            {/* <!-- End Select --> */}
                                            <button className="btn btn-primary height-40 py-2 px-3 rounded-right-pill" type="button" id="searchProduct1">
                                                <span className="ec ec-search font-size-24"></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- End Search Bar --> */}
                            {/* <!-- Header Icons --> */}
                            <div className="col col-xl-auto text-right text-xl-left pl-0 pl-xl-3 position-static">
                                <div className="d-inline-flex">
                                    <ul className="d-flex list-unstyled mb-0 align-items-center">
                                        {/* <!-- Search --> */}
                                        <li className="col d-xl-none px-2 px-sm-3 position-static">
                                            <a id="searchClassicInvoker" className="font-size-22 text-gray-90 text-lh-1 btn-text-secondary" href="javascript:;" role="button"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Search"
                                                aria-controls="searchClassic"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                data-unfold-target="#searchClassic"
                                                data-unfold-type="css-animation"
                                                data-unfold-duration="300"
                                                data-unfold-delay="300"
                                                data-unfold-hide-on-scroll="true"
                                                data-unfold-animation-in="slideInUp"
                                                data-unfold-animation-out="fadeOut">
                                                <span className="ec ec-search"></span>
                                            </a>

                                            {/* <!-- Input --> */}
                                            <div id="searchClassic" className="dropdown-menu dropdown-unfold dropdown-menu-right left-0 mx-2" aria-labelledby="searchClassicInvoker">
                                                <form className="js-focus-state input-group px-3">
                                                    <input className="form-control" type="search" placeholder="Search Product" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary px-3" type="button"><i className="font-size-18 ec ec-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* <!-- End Input --> */}
                                        </li>
                                        {/* <!-- End Search --> */}
                                        <li className="col d-none d-xl-block"><a href="../shop/compare.html" className="text-gray-90" data-toggle="tooltip" data-placement="top" title="Compare"><i className="font-size-22 ec ec-compare"></i></a></li>
                                        <li className="col d-none d-xl-block"><a href="../shop/wishlist.html" className="text-gray-90" data-toggle="tooltip" data-placement="top" title="Favorites"><i className="font-size-22 ec ec-favorites"></i></a></li>
                                        <li className="col d-xl-none px-2 px-sm-3"><a href="../shop/my-account.html" className="text-gray-90" data-toggle="tooltip" data-placement="top" title="My Account"><i className="font-size-22 ec ec-user"></i></a></li>
                                        <li className="col pr-xl-0 px-2 px-sm-3">
                                            <a href="../shop/cart.html" className="text-gray-90 position-relative d-flex " data-toggle="tooltip" data-placement="top" title="Cart">
                                                <i className="font-size-22 ec ec-shopping-bag"></i>
                                                <span className="bg-lg-down-black width-22 height-22 bg-primary position-absolute d-flex align-items-center justify-content-center rounded-circle left-12 top-8 font-weight-bold font-size-12">2</span>
                                                <span className="d-none d-xl-block font-weight-bold font-size-16 text-gray-90 ml-3">$1785.00</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- End Header Icons --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- End Logo-Search-header-icons --> */}

                {/* <!-- Primary-menu-wide --> */}
                <div className="d-none d-xl-block bg-primary">
                    <div className="container">
                        <div className="min-height-45">
                            {/* <!-- Nav --> */}
                            <nav className="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--wide u-header__navbar--no-space">
                                {/* <!-- Navigation --> */}
                                <div id="navBar" className="collapse navbar-collapse u-header__navbar-collapse">
                                    <ul className="navbar-nav u-header__navbar-nav">
                                        {/* <!-- Home --> */}
                                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut"
                                            data-position="left">
                                            <a id="homeMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Home</a>

                                            {/* <!-- Home - Mega Menu --> */}
                                            <div className="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="homeMegaMenu">
                                                <div className="row u-header__mega-menu-wrapper">
                                                    <div className="col-md-3">
                                                        <span className="u-header__sub-menu-title">Home & Static Pages</span>
                                                        <ul className="u-header__sub-menu-nav-group">
                                                            <li><a href="index.html" className="nav-link u-header__sub-menu-nav-link">Home v1</a></li>
                                                            <li><a href="home-v2.html" className="nav-link u-header__sub-menu-nav-link">Home v2</a></li>
                                                            <li><a href="home-v3.html" className="nav-link u-header__sub-menu-nav-link">Home v3</a></li>
                                                            <li><a href="home-v3-full-color-bg.html" className="nav-link u-header__sub-menu-nav-link">Home v3.1</a></li>
                                                            <li><a href="home-v4.html" className="nav-link u-header__sub-menu-nav-link">Home v4</a></li>
                                                            <li><a href="home-v5.html" className="nav-link u-header__sub-menu-nav-link">Home v5</a></li>
                                                            <li><a href="home-v6.html" className="nav-link u-header__sub-menu-nav-link">Home v6</a></li>
                                                            <li><a href="home-v7.html" className="nav-link u-header__sub-menu-nav-link">Home v7</a></li>
                                                            <li><a href="about.html" className="nav-link u-header__sub-menu-nav-link">About</a></li>
                                                            <li><a href="contact-v1.html" className="nav-link u-header__sub-menu-nav-link">Contact v1</a></li>
                                                            <li><a href="contact-v2.html" className="nav-link u-header__sub-menu-nav-link">Contact v2</a></li>
                                                            <li><a href="faq.html" className="nav-link u-header__sub-menu-nav-link">FAQ</a></li>
                                                            <li><a href="store-directory.html" className="nav-link u-header__sub-menu-nav-link">Store Directory</a></li>
                                                            <li><a href="terms-and-conditions.html" className="nav-link u-header__sub-menu-nav-link">Terms and Conditions</a></li>
                                                            <li><a href="404.html" className="nav-link u-header__sub-menu-nav-link">404</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <span className="u-header__sub-menu-title">Shop Pages</span>
                                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                                            <li><a href="../shop/shop-grid.html" className="nav-link u-header__sub-menu-nav-link">Shop Grid</a></li>
                                                            <li><a href="../shop/shop-grid-extended.html" className="nav-link u-header__sub-menu-nav-link">Shop Grid Extended</a></li>
                                                            <li><a href="../shop/shop-list-view.html" className="nav-link u-header__sub-menu-nav-link">Shop List View</a></li>
                                                            <li><a href="../shop/shop-list-view-small.html" className="nav-link u-header__sub-menu-nav-link">Shop List View Small</a></li>
                                                            <li><a href="../shop/shop-left-sidebar.html" className="nav-link u-header__sub-menu-nav-link">Shop Left Sidebar</a></li>
                                                            <li><a href="../shop/shop-full-width.html" className="nav-link u-header__sub-menu-nav-link">Shop Full width</a></li>
                                                            <li><a href="../shop/shop-right-sidebar.html" className="nav-link u-header__sub-menu-nav-link">Shop Right Sidebar</a></li>
                                                        </ul>
                                                        <span className="u-header__sub-menu-title">Product Categories</span>
                                                        <ul className="u-header__sub-menu-nav-group">
                                                            <li><a href="../shop/product-categories-4-column-sidebar.html" className="nav-link u-header__sub-menu-nav-link">4 Column Sidebar</a></li>
                                                            <li><a href="../shop/product-categories-5-column-sidebar.html" className="nav-link u-header__sub-menu-nav-link">5 Column Sidebar</a></li>
                                                            <li><a href="../shop/product-categories-6-column-full-width.html" className="nav-link u-header__sub-menu-nav-link">6 Column Full width</a></li>
                                                            <li><a href="../shop/product-categories-7-column-full-width.html" className="nav-link u-header__sub-menu-nav-link">7 Column Full width</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <span className="u-header__sub-menu-title">Single Product Pages</span>
                                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                                            <li><a href="../shop/single-product-extended.html" className="nav-link u-header__sub-menu-nav-link">Single Product Extended</a></li>
                                                            <li><a href="../shop/single-product-fullwidth.html" className="nav-link u-header__sub-menu-nav-link">Single Product Fullwidth</a></li>
                                                            <li><a href="../shop/single-product-sidebar.html" className="nav-link u-header__sub-menu-nav-link">Single Product Sidebar</a></li>
                                                        </ul>
                                                        <span className="u-header__sub-menu-title">Ecommerce Pages</span>
                                                        <ul className="u-header__sub-menu-nav-group">
                                                            <li><a href="../shop/shop.html" className="nav-link u-header__sub-menu-nav-link">Shop</a></li>
                                                            <li><a href="../shop/cart.html" className="nav-link u-header__sub-menu-nav-link">Cart</a></li>
                                                            <li><a href="../shop/checkout.html" className="nav-link u-header__sub-menu-nav-link">Checkout</a></li>
                                                            <li><a href="../shop/my-account.html" className="nav-link u-header__sub-menu-nav-link">My Account</a></li>
                                                            <li><a href="../shop/track-your-order.html" className="nav-link u-header__sub-menu-nav-link">Track your Order</a></li>
                                                            <li><a href="../shop/compare.html" className="nav-link u-header__sub-menu-nav-link">Compare</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <span className="u-header__sub-menu-title">Blog Pages</span>
                                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                                            <li><a href="../blog/blog-v1.html" className="nav-link u-header__sub-menu-nav-link">Blog v1</a></li>
                                                            <li><a href="../blog/blog-v2.html" className="nav-link u-header__sub-menu-nav-link">Blog v2</a></li>
                                                            <li><a href="../blog/blog-v3.html" className="nav-link u-header__sub-menu-nav-link">Blog v3</a></li>
                                                            <li><a href="../blog/blog-full-width.html" className="nav-link u-header__sub-menu-nav-link">Blog Full Width</a></li>
                                                            <li><a href="../blog/single-blog-post.html" className="nav-link u-header__sub-menu-nav-link">Single Blog Post</a></li>
                                                        </ul>
                                                        <span className="u-header__sub-menu-title">Shop Columns</span>
                                                        <ul className="u-header__sub-menu-nav-group">
                                                            <li><a href="../shop/shop-7-columns-full-width.html" className="nav-link u-header__sub-menu-nav-link">7 Column Full width</a></li>
                                                            <li><a href="../shop/shop-6-columns-full-width.html" className="nav-link u-header__sub-menu-nav-link">6 Column Full width</a></li>
                                                            <li><a href="../shop/shop-5-columns-sidebar.html" className="nav-link u-header__sub-menu-nav-link">5 Column Sidebar</a></li>
                                                            <li><a href="../shop/shop-4-columns-sidebar.html" className="nav-link u-header__sub-menu-nav-link">4 Column Sidebar</a></li>
                                                            <li><a href="../shop/shop-3-columns-sidebar.html" className="nav-link u-header__sub-menu-nav-link">3 Column Sidebar</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Home - Mega Menu --> */}
                                        </li>
                                        {/* <!-- End Home --> */}

                                        {/* <!-- TV & Audio --> */}
                                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut">
                                            <a id="TVMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">TV & Audio</a>

                                            {/* <!-- TV & Audio - Mega Menu --> */}
                                            <div className="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="TVMegaMenu">
                                                <div className="row u-header__mega-menu-wrapper">
                                                    <div className="col-md-3">
                                                        <span className="u-header__sub-menu-title">Televisions</span>
                                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Smart TVs</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">4K TVs</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Full HD TVs</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Large Screen TVs</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">32 inch TVs</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">39-43 inch TV</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">48 &amp; Above</a></li>
                                                        </ul>
                                                        <span className="u-header__sub-menu-title">Home Audio/Video</span>
                                                        <ul className="u-header__sub-menu-nav-group">
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Speakers</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Home Theaters</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Projectors</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Headphones</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Noise Cancelling Headphones</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Soundbars</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Headphones with Mic</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <span className="u-header__sub-menu-title">Shop by Brand</span>
                                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">VU</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Mi LED Smart TVs</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Samsung</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Panasonic</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">TCL</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Sanyo</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Micromax</a></li>
                                                        </ul>
                                                        <span className="u-header__sub-menu-title">Shop by Brand</span>
                                                        <ul className="u-header__sub-menu-nav-group">
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">JBL</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Sony</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Ultimate ears</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Philips</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Protronics</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Saregama</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Harmon Kardon</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <span className="u-header__sub-menu-title">Other Home Entertainment</span>
                                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Home Theater Systems</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Projectors &amp; Accessoires</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Set top Boxes</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Streaming Media Players</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">DVD &amp; Blu-ray Players</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Cables</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Audio-video Accessories</a></li>
                                                        </ul>
                                                        <span className="u-header__sub-menu-title">Shop By Price</span>
                                                        <ul className="u-header__sub-menu-nav-group">
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Below Rs. 100$</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">101$ - 199$</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">200$ - 299$</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">300$ - 399$</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">400$ - 499$</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">500$ - 599$</a></li>
                                                            <li><a href="#" className="nav-link u-header__sub-menu-nav-link">600$ and Above</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <a href="#" className="d-block mb-3">
                                                            <img className="img-fluid" src="../../assets/img/300X275/img1.jpg" alt="Image Description" />
                                                        </a>
                                                        <a href="#" className="d-block">
                                                            <img className="img-fluid" src="../../assets/img/300X275/img2.jpg" alt="Image Description" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End TV & Audio - Mega Menu --> */}
                                        </li>
                                        {/* <!-- End Pages --> */}

                                        {/* <!-- Smart Phones --> */}
                                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut">
                                            <a id="smartphonesMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Smart Phones</a>

                                            {/* <!-- Smart Phones - Mega Menu --> */}
                                            <div className="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="smartphonesMegaMenu">
                                                <div className="row u-header__mega-menu-wrapper">
                                                    <div className="col-md-8">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">Accessories</span>
                                                                <ul className="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Headsets</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Cables &amp; Chargers</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Electronic Accessories</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Selfie Sticks</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Internal Batteries</a></li>
                                                                </ul>
                                                                <span className="u-header__sub-menu-title">Cases &amp; Covers</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">For iPhone X<br /> </a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">For Samsung S9</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Below AED 59</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">For Xiaomi</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">For iPhone 7</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">Tablets</span>
                                                                <ul className="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">iPads</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Samsung</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Microsoft Surface</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Lenovo</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Innjoo</a></li>
                                                                </ul>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <span className="u-header__sub-menu-title">Shop By Price</span>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">For iPhone X<br /> </a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">For Samsung S9</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Below AED 59</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">For Xiaomi</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">For iPhone 7</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">Mobiles</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Samsung</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Lenovo</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Mi</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Motorola</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Oppo</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Panasonic<br /> </a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">HTC</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Blackberry</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">LG</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Micromax</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Nokia</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Huawei</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">#Trending</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Oppo</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Panasonic</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Samsung</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Lenovo</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Mi</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Motorola</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Nokia</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Huawei</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">HTC</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Blackberry</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">LG</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Micromax</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="d-block">
                                                            <img className="img-fluid" src="../../assets/img/1024X1024/img1.jpg" alt="Image Description" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Smart Phones - Mega Menu --> */}
                                        </li>
                                        {/* <!-- End Blog --> */}

                                        {/* <!-- Laptops & Desktops --> */}
                                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut">
                                            <a id="laptopsdesktopsMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Laptops & Desktops</a>

                                            {/* <!-- Laptops & Desktops - Mega Menu --> */}
                                            <div className="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="laptopsdesktopsMegaMenu">
                                                <div className="row u-header__mega-menu-wrapper">
                                                    <div className="col-md-8">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">Laptops</span>
                                                                <ul className="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Thin and Light Laptops</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">2-in-1 Laptops</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Gaming Laptops</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Budget Laptops</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Business Laptops</a></li>
                                                                </ul>
                                                                <span className="u-header__sub-menu-title">Shop By Brand</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Apple<br /> </a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">HP</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Dell</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Lenovo</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Acer</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">Tablets</span>
                                                                <ul className="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Lenovo</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Apple</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Samsung</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Micromax</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">iBall</a></li>
                                                                </ul>
                                                                <span className="u-header__sub-menu-title">PC Accessories</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li className="nav-title">PC Accessories</li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Keyboards<br /> </a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Mice</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Laptop Bags</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">PC Speakers</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Batteries</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">Processors</span>
                                                                <ul className="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Intel</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">AMD</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Qualcomm</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">IBM</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Motorola</a></li>
                                                                </ul>
                                                                <span className="u-header__sub-menu-title">Shop By Price</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Below Rs. 500$</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">500$ - 699$</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">700$ - 799$</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">800$ - 899$</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">900$ and Above</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">Best Processors</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Intel Core i9-7980XE<br /> </a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">AMD Ryzen Threadripper 1950X</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">AMD Ryzen 5 1600X</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Intel Core i7-8700K</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">AMD Ryzen 7 1800X</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Intel Core i5-7600K</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">AMD Ryzen 3 1300X</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Intel Core i7-7820X</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Intel Core i5-7600K</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">AMD Ryzen 4 1100X</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Intel Core i3-7280K</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="d-block">
                                                            <img className="img-fluid" src="../../assets/img/1024X1024/img2.jpg" alt="Image Description" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Laptops & Desktops - Mega Menu --> */}
                                        </li>
                                        {/* <!-- End Laptops & Desktops --> */}

                                        {/* <!-- Gadgets --> */}
                                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut">
                                            <a id="GadgetsMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Gadgets</a>

                                            {/* <!-- Gadgets - Mega Menu --> */}
                                            <div className="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="GadgetsMegaMenu">
                                                <div className="row u-header__mega-menu-wrapper">
                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col-md-6 mb-3">
                                                                <a href="#" className="d-block">
                                                                    <img className="img-fluid" src="../../assets/img/300X275/img3.jpg" alt="Image Description" />
                                                                </a>
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <span className="u-header__sub-menu-title">Computers &amp; Accessories</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Laptops, Desktops &amp; Monitors</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Networking &amp; Internet Devices</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Computer Accessories</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <a href="#" className="d-block">
                                                                    <img className="img-fluid" src="../../assets/img/300X275/img4.jpg" alt="Image Description" />
                                                                </a>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <span className="u-header__sub-menu-title">Peripherals</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Hard Drives</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Pen Drives & Memory Cards</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Printers & Ink</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Mouse</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col-md-6 mb-3">
                                                                <a href="#" className="d-block">
                                                                    <img className="img-fluid" src="../../assets/img/300X275/img5.jpg" alt="Image Description" />
                                                                </a>
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <span className="u-header__sub-menu-title">Cameras</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">DSLR</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Lenses</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Security &amp; Surveillance</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Binoculars &amp; Telescopes</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Camcorders</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <a href="#" className="d-block">
                                                                    <img className="img-fluid" src="../../assets/img/300X275/img6.jpg" alt="Image Description" />
                                                                </a>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <span className="u-header__sub-menu-title">Watches</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Men's Watches</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Women's Watches</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Premium Watches</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Kids Watches</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Deals on Watches</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col-md-6 mb-3">
                                                                <a href="#" className="d-block">
                                                                    <img className="img-fluid" src="../../assets/img/300X275/img7.jpg" alt="Image Description" />
                                                                </a>
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <span className="u-header__sub-menu-title">Accessories</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Mouses</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Keyboards</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Hardrives</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Headphones</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Speakers</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <a href="#" className="d-block">
                                                                    <img className="img-fluid" src="../../assets/img/300X275/img8.jpg" alt="Image Description" />
                                                                </a>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <span className="u-header__sub-menu-title">Gadgets</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Fire TV Stick</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Google Chromecast</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Set Top</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Accessories</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Deals of the Day</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Gadgets - Mega Menu --> */}
                                        </li>
                                        {/* <!-- End Gadgets --> */}

                                        {/* <!-- GPS & Car --> */}
                                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut">
                                            <a id="GPSCarMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">GPS & Car</a>

                                            {/* <!-- GPS & Car - Mega Menu --> */}
                                            <div className="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="GPSCarMegaMenu" style={{ minWidth: 330 }}>
                                                <div className="row u-header__mega-menu-wrapper">
                                                    <div className="col-md-8">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">Car Audios</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Music Systems</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Video Systems</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Speakers</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Car Monitors</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Car Parts</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Monitoring</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Network Jammers</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Car Accessories</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Car Electronics</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">All Audio Products</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Accessories</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">GPS & Accessories</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Gps Tracking Devices</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Networking Devices</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Tracking Sensors</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Monitoring</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Jammers</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Tracking Sensors</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Monitoring</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Anti-Tracker</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Accessories</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Devices</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Trackers</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">Accessories &amp; Parts</span>
                                                                <ul className="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Car Accessories</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Car Electronics</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Car Parts</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Car &amp; Bike Care</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">All Car Products</a></li>
                                                                </ul>
                                                                <span className="u-header__sub-menu-title">Shop By Price</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Below Rs. 100$</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">101$ - 199$</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">200$ - 299$</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">300$ - 399$</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">400$ and Above</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">GPS & Accessories</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Gps Tracking Devices</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Networking Devices</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Tracking Sensors</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Monitoring</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Jammers</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Tracking Sensors</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Monitoring</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Anti-Tracker</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Accessories</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Devices</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">GPS Trackers</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="d-block">
                                                            <img className="img-fluid" src="../../assets/img/1024X1024/img3.jpg" alt="Image Description" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End GPS & Car - Mega Menu --> */}
                                        </li>
                                        {/* <!-- End GPS & Car --> */}

                                        {/* <!-- Cameras & Accessories --> */}
                                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut">
                                            <a id="CamerasAccessoriesMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Cameras & Accessories</a>

                                            {/* <!-- Cameras & Accessories - Mega Menu --> */}
                                            <div className="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="CamerasAccessoriesMegaMenu">
                                                <div className="row u-header__mega-menu-wrapper">
                                                    <div className="col-md-8">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">Cameras</span>
                                                                <ul className="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">DSLR Cameras</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Digital Cameras</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Security &amp; Surveillance</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Camcorders</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Consoles</a></li>
                                                                </ul>
                                                                <span className="u-header__sub-menu-title">Shop By Price</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Below Rs. 100$</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">101$ - 199$</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">200$ - 299$</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">300$ - 399$</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">400$ and Above</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">Shop By Focal Length</span>
                                                                <ul className="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">8mm - 24mm</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">24mm - 35mm</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">35mm - 85mm</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">85mm - 135mm</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">135mm+</a></li>
                                                                </ul>
                                                                <span className="u-header__sub-menu-title">#Trending</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Sony</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Nikon</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Canon</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Sanyo</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Samsung</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">Accessories</span>
                                                                <ul className="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Headphones</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Mouses</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Hardrives</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Headphones</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Speakers</a></li>
                                                                </ul>
                                                                <span className="u-header__sub-menu-title">Add-ons</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Data Cables</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Keypads</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Earphones</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Lenses</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Camera Accessories</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="u-header__sub-menu-title">Shop By Brands</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Canon</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Nikon</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Pentax</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Sony</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Apple</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Leica</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Samsung</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Panasonic</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">LG</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Oppo</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Olympus</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Sanyo</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="d-block">
                                                            <img className="img-fluid" src="../../assets/img/1024X1024/img4.png" alt="Image Description" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Cameras & Accessories - Mega Menu --> */}
                                        </li>
                                        {/* <!-- End Cameras & Accessories --> */}

                                        {/* <!-- Movies & Games --> */}
                                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                                            data-event="hover"
                                            data-animation-in="slideInUp"
                                            data-animation-out="fadeOut">
                                            <a id="MoviesGamesMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Movies & Games</a>

                                            {/* <!-- Movies & Games - Mega Menu --> */}
                                            <div className="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="MoviesGamesMegaMenu">
                                                <div className="row u-header__mega-menu-wrapper">
                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col">
                                                                <a href="#" className="d-block">
                                                                    <img className="img-fluid" src="../../assets/img/300X275/img9.jpg" alt="Image Description" />
                                                                </a>
                                                            </div>
                                                            <div className="col">
                                                                <span className="u-header__sub-menu-title">Movies &amp; TV Shows</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">All Movies &amp; TV Shows</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Blu-ray</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Latest Movies</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">All English</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">All Hindi</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col">
                                                                <a href="#" className="d-block">
                                                                    <img className="img-fluid" src="../../assets/img/300X275/img10.jpg" alt="Image Description" />
                                                                </a>
                                                            </div>
                                                            <div className="col">
                                                                <span className="u-header__sub-menu-title">Video Games</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Games &amp; Accessories</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">PC Games</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">New Releases</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Consoles</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Accessories</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col">
                                                                <a href="#" className="d-block">
                                                                    <img className="img-fluid" src="../../assets/img/300X275/img11.jpg" alt="Image Description" />
                                                                </a>
                                                            </div>
                                                            <div className="col">
                                                                <span className="u-header__sub-menu-title">Music</span>
                                                                <ul className="u-header__sub-menu-nav-group">
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">5.1 Speaker</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Home Theatres</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Soundbars</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Accessories</a></li>
                                                                    <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Consoles</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Movies & Games - Mega Menu --> */}
                                        </li>
                                        {/* <!-- End Movies & Games --> */}
                                    </ul>
                                </div>
                                {/* <!-- End Navigation --> */}
                            </nav>
                            {/* <!-- End Nav --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- End Primary-menu-wide --> */}
            </div>
        </header>
        /* <!-- ========== END HEADER ========== --> */

    )
}