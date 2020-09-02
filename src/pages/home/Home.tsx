import React from "react";
import Header from "./../../components/header/Header"
import Slider from "./../../components/slider/Slider"
import BannerThreeColumn from "../../components/banner/BannerThreeColumn"
import BannerTwoColumn from "../../components/banner/BannerTwoColumn"
import FeatureList from "../../components/featurelist/FeatureList"
import SpecialCategory from "./../../components/specialcategory/SpecialCategory"
import SingleCategory from "./../../components/singlecategory/SingleCategory"
import BestSellers from "./../../components/bestsellers/BestSellers"
import TopCategories from "./../../components/topcategories/TopCategories"
import Recommendation from "./../../components/recommendation/Recommendation"
import BrandCarousel from "./../../components/brandcarousel/BrandCarousel"
import Footer from "./../../components/footer/Footer"
import AccountSidebar from "./../../components/account-sidebar/AccountSidebar"
import GoToTop from "./../../components/go-to-top/GoToTop"

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <main id="content" role="main">
                <Slider />
                <div className="container">
                    <BannerThreeColumn />
                    <FeatureList/>
                    <SpecialCategory/>
                </div>
                <div className="container">
                    <SingleCategory/>
                    <SingleCategory/>
                </div>
                <BestSellers/>
                <div className="container">
                    <TopCategories/>
                    <Recommendation/>
                    <BannerTwoColumn/>
                </div>
                <BrandCarousel/>
            </main>
            <Footer/>
            <AccountSidebar/>
            <GoToTop/>
        </React.Fragment >
    )
}