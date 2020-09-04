import React from 'react'
import Categories from './categories/Categories'
import FilterWithCheckbox from './filter-with-checkbox/FilterWithCheckbox'
import LatestProducts from './latest-products/LatestProducts'

export default function ShopLeftSidebar() {
    let brandFilters = [
        {name: 'Adidas', count: 56},
        {name: 'New Balance', count: 30},
        {name: 'Nike', count: 22},
        {name: 'Fred Perry ', count: 35},
    ]

    let colorFilters = [
        {name: 'Black', count: 56},
        {name: 'White', count: 30},
        {name: 'Yellow', count: 22},
        {name: 'Blue', count: 35},
    ]

    let latesProducts = [
        {
            name: "Notebook Black Spire V Nitro VN7-591G",
            image: "/assets/img/300X300/img1.jpg",
            rating: 4,
            price: 1999.00,
            discount: 0.20
        },
        {
            name: "Notebook Black Spire V Nitro VN7-591G",
            image: "/assets/img/300X300/img1.jpg",
            rating: 4,
            price: 1999.00,
            discount: 0.20
        },
        {
            name: "Tablet Thin EliteBook Revolve 810 G6",
            image: "/assets/img/300X300/img1.jpg",
            rating: 4,
            price: 1999.00,
            discount: 0.20
        },
        {
            name: "Notebook Black Spire V Nitro VN7-591G",
            image: "/assets/img/300X300/img1.jpg",
            rating: 4,
            price: 1999.00,
            discount: 0.20
        },
        {
            name: "Tablet Thin EliteBook Revolve 810 G6",
            image: "/assets/img/300X300/img1.jpg",
            rating: 4,
            price: 1999.00,
            discount: 0.20
        },
    ]

    return (
        <div className="d-none d-xl-block col-xl-3 col-wd-2gdot5">
            <Categories />
            <div className="mb-6">
                <div className="border-bottom border-color-1 mb-5">
                    <h3 className="section-title section-title__sm mb-0 pb-2 font-size-18">Filters</h3>
                </div>
                <FilterWithCheckbox name={"Brand"} filters={brandFilters}/>
                <FilterWithCheckbox name={"Color"} filters={colorFilters}/>

                <div className="range-slider">
                    <h4 className="font-size-14 mb-3 font-weight-bold">Price</h4>
                    {/* <!-- Range Slider --> */}
                    <input className="js-range-slider" type="text"
                        data-extra-classes="u-range-slider u-range-slider-indicator u-range-slider-grid"
                        data-type="double"
                        data-grid="false"
                        data-hide-from-to="true"
                        data-prefix="$"
                        data-min="0"
                        data-max="3456"
                        data-from="0"
                        data-to="3456"
                        data-result-min="#rangeSliderExample3MinResult"
                        data-result-max="#rangeSliderExample3MaxResult" />
                    {/* <!-- End Range Slider --> */}
                    <div className="mt-1 text-gray-111 d-flex mb-4">
                        <span className="mr-0dot5">Price: </span>
                        <span>$</span>
                        <span id="rangeSliderExample3MinResult" className=""></span>
                        <span className="mx-0dot5"> — </span>
                        <span>$</span>
                        <span id="rangeSliderExample3MaxResult" className=""></span>
                    </div>
                    <button type="submit" className="btn px-4 btn-primary-dark-w py-2 rounded-lg">Filter</button>
                </div>
            </div>
            <LatestProducts products={latesProducts}/>
        </div>
    )
}