import React, { useState } from 'react'
import HomeServices from "../../components/HomeServices/HomeServices.jsx";
import MostBookedServices from '../../components/MostBookedService/MostBookedServices.jsx'
import ClickableImage from '../../components/ClickableImage/ClickableImage.jsx'

function Home(){
    return (
        <div>
            <HomeServices/>
            <MostBookedServices />
            <ClickableImage />
            <MostBookedServices />
        </div>
    );
}

export default Home;



