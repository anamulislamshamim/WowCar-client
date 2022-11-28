import React from 'react';
import Banner from './Banner';
import { Faq } from './FAQ';
import HomePageCars from './HomePageCars';
import WhyChooseWowCar from './WhyChooseWowCar';

const Home = () => {
    return (
        <div className='min-h-[65vh]'>
            <Banner />
            <WhyChooseWowCar />
            <HomePageCars />
            <Faq />
        </div>
    );
};

export default Home;