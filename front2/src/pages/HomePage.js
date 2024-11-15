import React from 'react';
import Layout from "./../components/Layout"
import Hero from '../components/Hero';
import IconSection from '../components/IconSection';
import Recent from '../components/RecentAdvert';


const HomePage =() => {

    return (
        <Layout>
            <Hero/>
            <Recent/>
            <IconSection/>
        </Layout>
    )
}

export default HomePage ;