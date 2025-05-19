import React from 'react';
import HeroSection from "../components/propertyDetail/heroSection.jsx";
import FloorPlansSection from "../components/propertyDetail/floorPlans.jsx";
import InterestSection from "../components/propertyDetail/interestSection.jsx";
import Slider from '../components/propertyDetail/slider.jsx'

const PropertyDetail = () => {

    return (
        <>
            <HeroSection/>
            <FloorPlansSection/>
            <Slider/>
            <InterestSection/>
        </>
    );
};

export default PropertyDetail;
