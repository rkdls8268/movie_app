import React from "react";
import "./About.css"

function About(props){
    console.log(props);
    return (
        <div className="about_div">
            <span>Hi, there! <br /> 
            This page is made to give you information about movies! <br />
            Go and check your favorite movie!
            </span>
        </div>
    )
}

export default About;