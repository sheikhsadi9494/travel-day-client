import React from 'react';
import AboutUs from '../aboutUs/AboutUs';
import Banner from '../banner/Banner';
import Features from '../features/Features';
import Services from '../services/Services';

const HomeContainer = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Services></Services>
            <AboutUs></AboutUs>
        </div>
    );
};

export default HomeContainer;