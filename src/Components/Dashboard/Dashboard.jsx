import React from "react";
import "./dashboard.css"
import MainCatergory from "./MainCatergory/MainCatergory";

const Dashboard = () => {
    return(
        <div className="dashboard">
            <div className="dashboard-inner">
                <div className="dashboard-left">
                    <h1>Olx</h1>
                    <h3> Main Category </h3>
                    <h3> Sub Category </h3>
                </div>
                <div className="dashboard-right">
                    <div className="header">

                    </div>
                    <div className="container">
                        <MainCatergory />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard