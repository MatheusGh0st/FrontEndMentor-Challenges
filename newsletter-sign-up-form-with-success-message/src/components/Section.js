import React from "react";
import iconSuccess from "../assets/images/icon-success.svg";
import './Section.css';
import EmailForm from "./EmailForm";

export default function Section(props) {

    function handleChildProps2(childProps2) {
        props.onGrandchildProps(childProps2);
    }

    return (
        <div className="section-container">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>

            <ul>
                <li>
                    <img className="icon-success" src={iconSuccess}></img>
                    Product discovery and building what matters
                </li>
                
                <li>
                    <img className="icon-success" src={iconSuccess}></img>
                    Measuring to ensure updates are a success
                </li>
                
                <li>
                    <img className="icon-success" src={iconSuccess}></img>
                    And much more!
                </li>
            </ul>
            <EmailForm onChildProps2={handleChildProps2} />
        </div>
    );
}