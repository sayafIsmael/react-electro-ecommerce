import React from 'react'

export default function FooterNewsLetter(){
    return (
        // <!-- Footer-newsletter -->
            <div className="bg-primary py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-md-3 mb-lg-0">
                            <div className="row align-items-center">
                                <div className="col-auto flex-horizontal-center">
                                    <i className="ec ec-newsletter font-size-40"></i>
                                    <h2 className="font-size-20 mb-0 ml-3">Sign up to Newsletter</h2>
                                </div>
                                <div className="col my-4 my-md-0">
                                    <h5 className="font-size-15 ml-4 mb-0">...and receive <strong>$20 coupon for first shopping.</strong></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            {/* <!-- Subscribe Form --> */}
                            <form className="js-validate js-form-message">
                                <label className="sr-only" htmlFor="subscribeSrEmail">Email address</label>
                                <div className="input-group input-group-pill">
                                    <input type="email" className="form-control border-0 height-40" name="email" id="subscribeSrEmail" placeholder="Email address" aria-label="Email address" aria-describedby="subscribeButton" required
                                    data-msg="Please enter a valid email address."/>
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-dark btn-sm-wide height-40 py-2" id="subscribeButton">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                            {/* <!-- End Subscribe Form --> */}
                        </div>
                    </div>
                </div>
            </div>
    )
}