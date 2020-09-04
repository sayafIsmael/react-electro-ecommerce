import React from 'react'

export default function FilterWithCheckbox({ name, filters }) {
    return (
        <div className="border-bottom pb-4 mb-4">
            <h4 className="font-size-14 mb-3 font-weight-bold">{name}</h4>

            {/* <!-- Checkboxes --> */}
            {filters.map((item, i) => {
                return <div key={i} className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="brandAdidas" />
                        <label className="custom-control-label" htmlFor="brandAdidas">{item.name}
                                            <span className="text-gray-25 font-size-12 font-weight-normal"> ({item.count})</span>
                        </label>
                    </div>
                </div>
            })}

            {/* <!-- End Checkboxes --> */}

            {/* <!-- View More - Collapse --> */}
            <div className="collapse" id={`collapse${name.replace(/\s/g,'')}`}>
                <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="brandGucci" />
                        <label className="custom-control-label" htmlFor="brandGucci">Gucci
                                                <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                        </label>
                    </div>
                </div>
                <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="brandMango" />
                        <label className="custom-control-label" htmlFor="brandMango">Mango
                                                <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                        </label>
                    </div>
                </div>
            </div>
            {/* <!-- End View More - Collapse --> */}

            {/* <!-- Link --> */}
            <a className="link link-collapse small font-size-13 text-gray-27 d-inline-flex mt-2" data-toggle="collapse" href={`#collapse${name.replace(/\s/g,'')}`} role="button" aria-expanded="false" aria-controls={`collapse${name.replace(/\s/g,'')}`}>
                <span className="link__icon text-gray-27 bg-white">
                    <span className="link__icon-inner">+</span>
                </span>
                <span className="link-collapse__default">Show more</span>
                <span className="link-collapse__active">Show less</span>
            </a>
            {/* <!-- End Link --> */}
        </div>
    )
}