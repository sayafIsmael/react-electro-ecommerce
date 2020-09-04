import React from 'react'
import Layout from "./../../components/layouts/Layout"
import Breadcrumb from './../../components/breadcrumb/Breadcrumb'
import ShopLeftSidebar from '../../components/shop-left-sidebar/ShopLeftSidebar'
import RecommendedProducts from './../../components/recommended-products/RecommendedProducts'
import  

export default function Shop() {
    return (
        <Layout>
            <Breadcrumb />
            <div className="container">
                <div className="row mb-8">
                    <ShopLeftSidebar />
                    <RecommendedProducts />
                    
                </div>
            </div>
        </Layout>
    )
}