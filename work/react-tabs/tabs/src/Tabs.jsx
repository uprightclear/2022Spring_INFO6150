import { useState } from "react";

function Tabs(){
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        setActiveTab("tab2");
    };
    const handleTab3 = () => {
        setActiveTab("tab3");
    };

    let content;
    if(activeTab === "tab1"){
        content =(
            <div className="first-tab">
                <p>The National Basketball Association is a professional basketball league in North America. The league is composed of 30 teams and is one of the four major professional sports leagues in the United States and Canada. It is the premier men's professional basketball league in the world.</p>
            </div>
        );
    }else if(activeTab ==="tab2"){
        content = (
            <div className="second-tab">
                <p>The National Football League is a professional American football league that consists of 32 teams, divided equally between the American Football Conference and the National Football Conference.</p>
            </div>
        );
    }else{content = (
        <div className="third-tab">
            <p>Major League Baseball is a professional baseball organization and the oldest major professional sports league in the world. As of 2022, a total of 30 teams play in Major League Baseball—15 teams in the National League and 15 in the American League —with 29 in the United States and 1 in Canada.</p>
        </div>
    )}



    return(
        <div className="tabs">
            <ul>
                <li className={activeTab === "tab1"? "active" : ""} onClick={handleTab1}>NBA</li>
                <li className={activeTab === "tab2"? "active" : ""} onClick={handleTab2}>NFL</li>
                <li className={activeTab === "tab3"? "active" : ""} onClick={handleTab3}>MLB</li>
            </ul>
            <div className="content">
                {content}
            </div>
        </div>
    );
}

export default Tabs;