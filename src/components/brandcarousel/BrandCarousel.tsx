import React from 'react'
import Slider from "react-slick";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="js-next d-none d-lg-inline-block u-slick__arrow-normal u-slick__arrow-centered--y fa fa-angle-right u-slick__arrow-classic-inner--right slick-arrow"
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={"js-prev d-none d-lg-inline-block u-slick__arrow-normal u-slick__arrow-centered--y fa fa-angle-left u-slick__arrow-classic-inner--left z-index-9 slick-arrow"}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 554,
            settings: {
                slidesToShow: 1
            }
        }
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
}

export default function BrandCarousel() {
    return (
        <div className="container mb-8">
            <div className="py-2 border-top border-bottom">
                <Slider {...sliderSettings}>
                    <div className="js-slide">
                        <a href="#" className="link-hover__brand">
                            <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img1.png" alt="Image Description" />
                        </a>
                    </div>
                    <div className="js-slide">
                        <a href="#" className="link-hover__brand">
                            <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img2.png" alt="Image Description" />
                        </a>
                    </div>
                    <div className="js-slide">
                        <a href="#" className="link-hover__brand">
                            <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img3.png" alt="Image Description" />
                        </a>
                    </div>
                    <div className="js-slide">
                        <a href="#" className="link-hover__brand">
                            <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img4.png" alt="Image Description" />
                        </a>
                    </div>
                    <div className="js-slide">
                        <a href="#" className="link-hover__brand">
                            <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img5.png" alt="Image Description" />
                        </a>
                    </div>
                    <div className="js-slide">
                        <a href="#" className="link-hover__brand">
                            <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img6.png" alt="Image Description" />
                        </a>
                    </div>
                </Slider>
            </div>
        </div>
    )
}