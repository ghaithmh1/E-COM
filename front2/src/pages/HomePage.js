import React from 'react';
import Layout from "../layout/Layout"
import Hero from '../components/Hero';

import Random from '../components/RandomAdverts';

import AdvertCategories from '../tools/AdvertCategory';
import Recent from '../components/RecentAdvert';


const HomePage =() => {

    return (
        <Layout>
            <Hero/>
            <Random/>
            <Recent/>
            <AdvertCategories/>
            
            
        </Layout>
    )
}

export default HomePage ;