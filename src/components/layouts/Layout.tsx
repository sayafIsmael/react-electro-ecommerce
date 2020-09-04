import React, { useEffect } from 'react'
import Header from "./../header/Header"
import HeaderGLobal from './../../components/header-global/HeaderGlobal'
import BrandCarousel from "./../brandcarousel/BrandCarousel"
import Footer from "./../footer/Footer"
import AccountSidebar from "./../account-sidebar/AccountSidebar"
import GoToTop from "./../go-to-top/GoToTop"

import {
    useLocation
} from "react-router-dom";

export default function Layout({ children }) {
    let { pathname } = useLocation();

    useEffect(()=>{
        console.log("pageview", pathname)
    },[pathname])

    return (
        <React.Fragment>
            {pathname == "/" && <Header />}
            {pathname != "/" && <HeaderGLobal/>}
            <main id="content" role="main">
                {children}
                <BrandCarousel />
            </main>
            <Footer />
            <AccountSidebar />
            <GoToTop />
        </React.Fragment>
    )
}