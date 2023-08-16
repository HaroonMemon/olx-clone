import React, { useState } from "react";
import { addMainCategory } from "../../Firebase/Firebase";
import "./mainCatergory.css";

const MainCatergory = () => {

    const [categoryName, setCategoryName] = useState("");
    const [file, setFile] = useState(null);

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setCategoryName(value);

        // Enable/disable the file input based on the category name's presence
        const fileInput = document.getElementById("fileInput");
        if (value) {
            fileInput.removeAttribute("disabled");
        } else {
            fileInput.setAttribute("disabled", "disabled");
            setFile(null); // Reset the file when category name is empty
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = () => {
        if (categoryName && file) {
            // Save data to Firebase Realtime Database using the function from firebase.js
            addMainCategory(categoryName, "URL_TO_IMAGE"); // Replace with the actual image URL
            setCategoryName("");
            setFile(null);
        }
    };

    return (
        <div className="mainCategory">
            <h2>Main Category</h2>
            <div className="uplaod">
                <h3>main Category</h3>
                <input
                    type="text"
                    placeholder="Category Name"
                    value={categoryName}
                    onChange={handleCategoryChange}
                />
                <input
                    type="file"
                    id="fileInput"
                    disabled={!categoryName}
                    onChange={handleFileChange}
                />
                <button onClick={handleSubmit} disabled={!categoryName || !file}>
                    Save
                </button>
            </div>
            <div className="data">
                <table>
                    <tr>
                        <thead>
                            <th>main category</th>
                            <th>ID</th>
                            <th>image URL</th>
                            <th>action</th>
                        </thead>
                    </tr>
                    <tr>
                        <tbody>
                            <td></td>
                        </tbody>
                    </tr>
                    <tr>
                        <tfoot>
                            <th>pages</th>
                        </tfoot>
                    </tr>

                </table>
            </div>
        </div>
    )
}

export default MainCatergory;