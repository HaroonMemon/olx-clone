import React, { useState } from "react";
import Select, { components } from "react-select";
import { cap, olxw, olxb, car, build, carb, buildb, search, add, } from "../../Assests"
import "./navbar.css"
import { FaSearch, FaChevronDown } from "react-icons/fa";

function Nav_bar() {

    const [selectedOption, setSelectedOption] = useState(null);

    // Sample location options (replace with your actual location data)
    const locationOptions = [
        { value: "new_york", label: "New York" },
        { value: "los_angeles", label: "Los Angeles" },
        { value: "chicago", label: "Chicago" },
        { value: "pakistan", label: "Pakistan" },
        // Add more location options as needed
    ]

    const handleChange = (selected) => {
        setSelectedOption(selected);
    }

    // // Custom IndicatorsContainer component with search icon on the left and dropdown icon on the right
    // const IndicatorsContainer = ({ children, ...props }) => {
    //     return (
    //         <components.IndicatorsContainer {...props}>
    //             <FaSearch style={{ marginRight: "8px" }} />
    //             {React.Children.toArray(children).reverse()}
    //         </components.IndicatorsContainer>
    //     );
    // };


    // // Custom DropdownIndicator component with dropdown icon
    // const DropdownIndicator = (props) => {
    //     return (
    //         <components.DropdownIndicator {...props}>
    //             <FaChevronDown />
    //         </components.DropdownIndicator>
    //     );
    // };

    // Custom styles to add padding to the Select component
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            padding: "4px 2px 4px 2px",
            border: state.isFocused ? "1px solid #808080" : provided.border, // Grey border on focus
            // Adjust the padding value as per your preference
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 900, // Set the desired z-index value to make sure the dropdown appears above other elements
        }),
    };



    return (



        <>
            <div className="nav-bar">
                <div className="nav-inner">
                    <div className="header-top">
                        <img className="olx-log-w" src={olxw} alt="olx" />
                        <p className="text">
                            <span>
                                <img className="icon" src={car} alt="" />
                                <img className="hide" src={carb} alt="" />
                            </span>
                            &nbsp; motors
                        </p>
                        <p className="text">
                            <span>
                                <img className="icon" src={build} alt="" />
                                <img className="hide" src={buildb} alt="" />
                            </span>
                            &nbsp; property
                        </p>
                    </div>
                    <div className="header">
                        <div className="logo">
                            <img className="logo-img" src={olxb} alt="" />
                        </div>
                        <div className="inputs">
                            <Select className="location"
                                value={selectedOption}
                                onChange={handleChange}
                                options={locationOptions}
                                placeholder="Type or select a location..."
                                isClearable={true}
                                styles={customStyles} // Apply the custom styles
                            // components={{ IndicatorsContainer, DropdownIndicator }} // Use the custom components
                            />
                            {/* <input className="location" type="text" name="" id="" /> */}
                            <input className="search" placeholder="Find Cars, Mobile Phones and more..." type="text" name="" id="" />
                            <button className="search-btn"><img className="search-icon" src={search} alt="search" /></button>
                        </div>
                        <div className="btns">
                            <button className="login-btn">login</button>
                            <button className="sell-btn"><img className="add-btn" src={add} alt="add" />sell</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="navbar-bottom">
                <div className="bottom-inner">
                    <ul>
                        <li>all categories <FaChevronDown /></li>
                        <li>mobile phones</li>
                        <li>cars</li>
                        <li>motorcycles</li>
                        <li>houses</li>
                        <li>tv-video-audio</li>
                        <li>tablets</li>
                        <li>land & plots</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Nav_bar