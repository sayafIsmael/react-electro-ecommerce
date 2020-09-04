import React from "react";
import Layout from "./../../components/layouts/Layout"
import Slider from "./../../components/slider/Slider"
import BannerThreeColumn from "../../components/banner/BannerThreeColumn"
import BannerTwoColumn from "../../components/banner/BannerTwoColumn"
import FeatureList from "../../components/featurelist/FeatureList"
import SpecialCategory from "./../../components/specialcategory/SpecialCategory"
import SingleCategory from "./../../components/singlecategory/SingleCategory"
import BestSellers from "./../../components/bestsellers/BestSellers"
import TopCategories from "./../../components/topcategories/TopCategories"
import Recommendation from "./../../components/recommendation/Recommendation"

export default function Home() {
    return (
        <Layout>
            <Slider />
            <div className="container">
                <BannerThreeColumn />
                <FeatureList />
                <SpecialCategory />
            </div>
            <div className="container">
                <SingleCategory />
                <SingleCategory />
            </div>
            <BestSellers />
            <div className="container">
                <TopCategories />
                <Recommendation />
                <BannerTwoColumn />
            </div>
        </Layout>
    )
}