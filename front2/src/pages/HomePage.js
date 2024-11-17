import React from 'react';
import Layout from "../layout/Layout"
import Hero from '../components/Hero';
import IconSection from '../components/IconSection';
import Recent from '../components/RecentAdvert';
import AdvertCategories from '../tools/AdvertCategory';
import WebPage from '../tools/Sidebar';


const HomePage =() => {

    return (
        <Layout>
            <Hero/>
            <Recent/>
            <AdvertCategories/>
            
            
        </Layout>
    )
}

export default HomePage ;