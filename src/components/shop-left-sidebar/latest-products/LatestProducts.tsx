import React from 'react'
import StarRatings from 'react-star-ratings';

export default function LatestProducts({ products }) {
    return (
        <div className="mb-8">
            <div className="border-bottom border-color-1 mb-5">
                <h3 className="section-title section-title__sm mb-0 pb-2 font-size-18">Latest Products</h3>
            </div>
            <ul className="list-unstyled">
                {products.map((item, i) => {
                    return <li className="mb-4" key={i}>
                        <div className="row">
                            <div className="col-auto">
                                <a href="../shop/single-product-fullwidth.html" className="d-block width-75">
                                    <img className="img-fluid" src={item.image} alt="Image Description" />
                                </a>
                            </div>
                            <div className="col">
                                <h3 className="text-lh-1dot2 font-size-14 mb-0"><a href="../shop/single-product-fullwidth.html">{item.name}</a></h3>
                                <div style={{position: 'absolute', bottom: -6}}>
                                    <StarRatings
                                        rating={item.rating}
                                        starDimension="14px"
                                        starSpacing="1px"
                                        starRatedColor="#ffc107"
                                        starEmptyColor="rgba(0, 0, 0, 0.2)"
                                    />
                                    <div className="font-weight-bold">
                                        {item.discount && <del className="font-size-11 text-gray-9 d-block"> Tk: {item.price}</del>}
                                        {item.discount && <ins className="font-size-15 text-red text-decoration-none d-block"> Tk: {item.price - (item.price * item.discount)}</ins>}
                                        {!item.discount && <ins className="font-size-15 text-red text-decoration-none d-block"> Tk: {item.price}</ins>}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                })}

            </ul>
        </div>
    )
}