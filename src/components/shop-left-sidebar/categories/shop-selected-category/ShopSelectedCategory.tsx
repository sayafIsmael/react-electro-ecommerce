import React from 'react'

export default function ShopSelectedCategory() {
    return (
        <li>
            <a className="dropdown-current active" href="#">Smart Phones & Tablets <span className="text-gray-25 font-size-12 font-weight-normal"> (50)</span></a>
            
            {/* Sub Cateegories */}
            <ul className="list-unstyled dropdown-list">
                {/* <!-- Menu List --> */}
                <li><a className="dropdown-item" href="#">Smartphones<span className="text-gray-25 font-size-12 font-weight-normal"> (30)</span></a></li>
                <li><a className="dropdown-item" href="#">Tablets<span className="text-gray-25 font-size-12 font-weight-normal"> (20)</span></a></li>
                {/* <!-- End Menu List --> */}
            </ul>
        </li>
    )
}