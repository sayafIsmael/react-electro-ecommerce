import React from 'react'

export default function BannerTwoColumn(){
    return (
        <div className="mb-8">
        <div className="row">
            <div className="col-md-6 mb-3 mb-md-0">
                <a href="../shop/shop.html">
                    <img className="img-fluid" src="/assets/img/690X150/img1.jpg" alt="Image Description"/>
                </a>
            </div>
            <div className="col-md-6">
                <a href="../shop/shop.html">
                    <img className="img-fluid" src="/assets/img/690X150/img2.jpg" alt="Image Description"/>
                </a>
            </div>
        </div>
    </div>
    )
}