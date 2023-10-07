import React from "react";
import "./SelectPlan.css";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";

export default function SelectPlan() {
    return (
        <div className="select-plan-container">
            <div className="title-subtitle-container">
                <h1>Select your plan</h1>
                <p>You have the option of montly or yearly billing.</p>
            </div>
            <div className="plans-container">
                <div className="plan-container">
                    <img src={iconArcade}></img>
                    <span>Arcade</span>
                    <p>$9/mo</p>
                </div>
                <div className="plan-container">
                    <img src={iconAdvanced}></img>
                    <span>Advanced</span>
                    <p>$12/mo</p>
                </div>
                <div className="plan-container">
                    <img src={iconPro}></img>
                    <span>Pro</span>
                    <p>$15/mo</p>
                </div>
            </div>
            <div className="mon-year-container">
                <span>Monthly</span>
                <label className="switch-mon-year">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                </label>
                <span>Yearly</span>
            </div>
            <div className="btn-container">
                <a>Go Back</a>
                <button className="form-submit">Next Step</button>
            </div>
        </div>
    );
}