import React from 'react'
import HeaderGLobal from './../../components/header-global/HeaderGlobal'
import Breadcrumb from './../../components/breadcrumb/Breadcrumb'
import CategoryListLeft from './../../components/category-list-left/CategoryListLeft'

export default function Shop() {
    return (
        <React.Fragment>
            <HeaderGLobal />
            <main id="content" role="main">
                <Breadcrumb />
                <div className="container">
                    <div className="row mb-8">
                        <CategoryListLeft />
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}