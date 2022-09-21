import React, { useState } from "react";
import About from "./tabs/About";
import Dev from "./tabs/Dev";
import Misc from "./tabs/Misc";

function ContentArea() {
    const [activeTab, setActiveTab] = useState("tab1");

    const tab1 = () => {
        setActiveTab("tab1");
    };

    const tab2 = () => {
        setActiveTab("tab2");
    };

    
    const tab3 = () => {
        setActiveTab("tab3");
    };

    return(
        <div className="content-container">
            <ul className="tab-nav">
                <li className={activeTab === "tab1" ? "active" : ""}onClick={tab1}>about</li>
                <li className={activeTab === "tab2" ? "active" : ""}onClick={tab2}>development</li>
                <li className={activeTab === "tab3" ? "active" : ""}onClick={tab3}>misc</li>
            </ul>
            <div className="content">
                {activeTab === "tab1" ? 
                <About /> : activeTab === "tab2" ? 
                <Dev/> : <Misc />}
            </div>
        </div>
    )
}

export default ContentArea;