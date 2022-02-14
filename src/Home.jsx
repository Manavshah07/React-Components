import React from 'react'
import web from "../src/images/Home/Home.svg"
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
                name="Grow your buisness with"
                imgsrc={web} 
                visit="/service"
                btname="Get Started"
            />
        </>
    )
}

export default Home;
