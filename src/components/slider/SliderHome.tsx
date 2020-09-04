import React from "react";
import Slider from "react-slick";
const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    draggable:true,
    // className: "js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble pb-7 pt-2 px-1",
    // dotsClass: "text-center position-absolute right-0 bottom-0 left-0 u-slick__pagination u-slick__pagination--long justify-content-center mb-3 mb-md-4",
    infinite: true,
    // useCSS: true,
    speed: 500,
    arrows: false,
    appendDots: dots => (
        <div style={{}}>
            <ul
                className="text-center position-absolute right-0 bottom-0 left-0 u-slick__pagination u-slick__pagination--long justify-content-center mb-3 mb-md-4"
                style={{}}> {dots} </ul>
        </div>
    ),
    customPaging: i => (
        <div>
            <span></span>
        </div >
    )
}

const sliders = [
    { 
        title: "Love TO GET WHAT YOU LOVE",
        description: 'TIMEPIECES THAT MAKE A STATEMENT UP TO 40% OFF',
        buttonTitle: "Start Buying",
        btnlink:"/shop/single-product",
        productImage: "/assets/img/468X417/img1.png",
    },
    { 
        title: "SHOP TO GET WHAT YOU LOVE",
        description: 'TIMEPIECES THAT MAKE A STATEMENT UP TO 40% OFF',
        buttonTitle: "Start Buying",
        btnlink:"/shop/single-product",
        productImage: "/assets/img/468X417/img1.png",
    },
    { 
        title: "VISIT TO GET WHAT YOU LOVE",
        description: 'TIMEPIECES THAT MAKE A STATEMENT UP TO 40% OFF',
        buttonTitle: "Start Buying",
        btnlink:"/shop/single-product",
        productImage: "/assets/img/468X417/img1.png",
    },
    { 
        title: "SHOP TO GET WHAT YOU LOVE",
        description: 'TIMEPIECES THAT MAKE A STATEMENT UP TO 40% OFF',
        buttonTitle: "Start Buying",
        btnlink:"/shop/single-product",
        productImage: "/assets/img/468X417/img1.png",
    }

]

export default function SliderHome() {
    return (
        // <!-- Slider Section -->
        <div className="mb-4">
            <div className="bg-img-hero" style={{ backgroundImage: 'url(assets/img/1920X422/img2.jpg)' }}>
                <div className="container overflow-hidden">
                    <Slider {...sliderSettings}>
                        {sliders.map((item, i) =>{
                            return <div className="js-slide" key={i}>
                            <div className="row pt-7 py-md-0">
                                <div className="d-none d-wd-block offset-1"></div>
                                <div className="col-xl col col-md-6 mt-md-8 mt-lg-10">
                                    <div className="ml-xl-4">
                                        <h6 className="font-size-15 font-weight-bold mb-2 text-cyan"
                                            data-scs-animation-in="fadeInUp">
                                            {item.title.toUpperCase()}
                                        </h6>
                                        <h1 className="font-size-46 text-lh-50 font-weight-light mb-8"
                                            data-scs-animation-in="fadeInUp"
                                            data-scs-animation-delay="200">
                                            {item.description}
                                        </h1>
                                        <a href={item.btnlink} className="btn btn-primary transition-3d-hover rounded-lg font-weight-normal py-2 px-md-7 px-3 font-size-16"
                                            data-scs-animation-in="fadeInUp"
                                            data-scs-animation-delay="300">
                                            {item.buttonTitle} {/**Start Buying */}
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-6 d-flex align-items-end ml-auto ml-md-0"
                                    data-scs-animation-in="fadeInRight"
                                    data-scs-animation-delay="500">
                                    <img className="img-fluid ml-auto mr-10 mr-wd-auto" src={item.productImage} alt="Image Description" />
                                </div>
                            </div>
                        </div>
                        })}
                    </Slider>
                </div>
            </div>
        </div>
        //  <!-- End Slider Section --> 
    )
}