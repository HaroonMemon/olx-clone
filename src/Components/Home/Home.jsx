import React from "react";
import "./home.css"
import {
    appGallery, banner1, banner10, banner11,
    banner2, banner3, banner4, banner5, banner6,
    banner7, banner8, banner9, iosStrore, olxSlider,
    olxWeb, playStore
} from "../../Assests";
import Ad from "../Ad/./Ad";

function Home() {
    const images = [
        banner1,
        banner2,
        banner3,
        banner4,
        banner5,
        banner6,
        banner7,
        banner8,
        banner9,
        banner10,
        banner11,
    ]
    return (
        <div className="home">
            <div className="home-inner">
                <div className="olx-slider">
                    <img src={olxSlider} alt="" />
                </div>

                <Ad images={images} startFromIndex={0} />



                <Ad images={images} startFromIndex={5}/>

                <div className="olx-download">
                    <div className="olx-web">
                        <img src={olxWeb} alt="" />
                    </div>
                    <div className="try-olx">
                        <h1>try the olx app</h1>
                        <p>Buy, sell and find just about anything using the app on your mobile.</p>
                    </div>
                    <div className="get-app">
                        <h5>get your app today</h5>
                        <div className="download-img">
                            <img src={iosStrore} alt="" />
                            <img src={playStore} alt="" />
                            <img src={appGallery} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;