import React from 'react'

export default function Breadcrumb(){
    return (
        <div className="bg-gray-13 bg-md-transparent">
                <div className="container">
                    {/* <!-- breadcrumb --> */}
                    <div className="my-md-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="../home/index.html">Home</a></li>
                                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">Smart Phones & Tablets</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <!-- End breadcrumb --> */}
                </div>
            </div>
    )
}