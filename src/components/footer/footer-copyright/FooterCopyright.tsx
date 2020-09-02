import React from 'react'

export default function FooterCopyright(){
    return (
        <div className="bg-gray-14 py-2">
                <div className="container">
                    <div className="flex-center-between d-block d-md-flex">
                        <div className="mb-3 mb-md-0">© <a href="#" className="font-weight-bold text-gray-90">Electro</a> - All rights Reserved</div>
                        <div className="text-md-right">
                            <span className="d-inline-block bg-white border rounded p-1">
                                <img className="max-width-5" src="/assets/img/100X60/img1.jpg" alt="Image Description"/>
                            </span>
                            <span className="d-inline-block bg-white border rounded p-1">
                                <img className="max-width-5" src="/assets/img/100X60/img2.jpg" alt="Image Description"/>
                            </span>
                            <span className="d-inline-block bg-white border rounded p-1">
                                <img className="max-width-5" src="/assets/img/100X60/img3.jpg" alt="Image Description"/>
                            </span>
                            <span className="d-inline-block bg-white border rounded p-1">
                                <img className="max-width-5" src="/assets/img/100X60/img4.jpg" alt="Image Description"/>
                            </span>
                            <span className="d-inline-block bg-white border rounded p-1">
                                <img className="max-width-5" src="/assets/img/100X60/img5.jpg" alt="Image Description"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    )
}