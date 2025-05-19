import React from 'react'
import HeroSection from "../components/home/heroSection.jsx";
import AboutSection from "../components/home/aboutSection.jsx";
import PropertyGallery from "../components/home/propertyGallery.jsx";
import FeatureSection from "../components/home/featureSection.jsx";
import Nurturing from "../components/home/nurturing.jsx";
import StatsSection from "../components/home/statsSection.jsx";
import Journey from "../components/home/journey.jsx";

const Home = () => {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <PropertyGallery/>
            <FeatureSection/>
            <Nurturing/>
            <StatsSection/>
            <Journey/>
        </>
    )
}
export default Home
