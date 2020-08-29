import React from 'react'

export default function FeatureList() {
    return (
        <div className="mb-6 row border rounded-lg mx-0 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
            {/* <!-- Feature List --> */}
            <div className="media col px-6 px-xl-4 px-wd-8 flex-shrink-0 flex-xl-shrink-1 min-width-270-all py-3">
                <div className="u-avatar mr-2">
                    <i className="text-primary ec ec-transport font-size-46"></i>
                </div>
                <div className="media-body text-center">
                    <span className="d-block font-weight-bold text-dark">Free Delivery</span>
                    <div className=" text-secondary">from $50</div>
                </div>
            </div>
            {/* <!-- End Feature List --> */}

            {/* <!-- Feature List --> */}
            <div className="media col px-6 px-xl-4 px-wd-8 flex-shrink-0 flex-xl-shrink-1 min-width-270-all border-left py-3">
                <div className="u-avatar mr-2">
                    <i className="text-primary ec ec-customers font-size-56"></i>
                </div>
                <div className="media-body text-center">
                    <span className="d-block font-weight-bold text-dark">99 % Customer</span>
                    <div className=" text-secondary">Feedbacks</div>
                </div>
            </div>
            {/* <!-- End Feature List --> */}

            {/* <!-- Feature List --> */}
            <div className="media col px-6 px-xl-4 px-wd-8 flex-shrink-0 flex-xl-shrink-1 min-width-270-all border-left py-3">
                <div className="u-avatar mr-2">
                    <i className="text-primary ec ec-returning font-size-46"></i>
                </div>
                <div className="media-body text-center">
                    <span className="d-block font-weight-bold text-dark">365 Days</span>
                    <div className=" text-secondary">for free return</div>
                </div>
            </div>
            {/* <!-- End Feature List --> */}

            {/* <!-- Feature List --> */}
            <div className="media col px-6 px-xl-4 px-wd-8 flex-shrink-0 flex-xl-shrink-1 min-width-270-all border-left py-3">
                <div className="u-avatar mr-2">
                    <i className="text-primary ec ec-payment font-size-46"></i>
                </div>
                <div className="media-body text-center">
                    <span className="d-block font-weight-bold text-dark">Payment</span>
                    <div className=" text-secondary">Secure System</div>
                </div>
            </div>
            {/* <!-- End Feature List --> */}

            {/* <!-- Feature List --> */}
            <div className="media col px-6 px-xl-4 px-wd-8 flex-shrink-0 flex-xl-shrink-1 min-width-270-all border-left py-3">
                <div className="u-avatar mr-2">
                    <i className="text-primary ec ec-tag font-size-46"></i>
                </div>
                <div className="media-body text-center">
                    <span className="d-block font-weight-bold text-dark">Only Best</span>
                    <div className=" text-secondary">Brands</div>
                </div>
            </div>
        </div>
    )
}