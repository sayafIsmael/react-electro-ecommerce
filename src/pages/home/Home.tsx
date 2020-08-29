import React from "react";
import Header from "./../../components/header/Header"
import Slider from "./../../components/slider/Slider"
import Banner from "./../../components/banner/Banner"
import FeatureList from "./../../components/featureList/FeatureList"
import SpecialCategory from "./../../components/specialcategory/SpecialCategory"

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <main id="content" role="main">
                <Slider />
                <div className="container">
                    <Banner />
                    <FeatureList/>
                    <SpecialCategory/>
                </div>
            </main>
        </React.Fragment >
    )
}