import React from "react";
import "./SelectPlan.css";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";
import { Link } from "react-router-dom";

export default function SelectPlan() {
    return (
        <div className="select-plan-container">
            <div className="title-subtitle-container">
                <h1>Select your plan</h1>
                <p className="p-text">You have the option of montly or yearly billing.</p>
            </div>
            <div className="plans-container">
                <div className="plan-container">
                    <img src={iconArcade}></img>
                    <span className="span-text">Arcade</span>
                    <p className="p-text">$9/mo</p>
                </div>
                <div className="plan-container">
                    <img src={iconAdvanced}></img>
                    <span className="span-text">Advanced</span>
                    <p className="p-text">$12/mo</p>
                </div>
                <div className="plan-container">
                    <img src={iconPro}></img>
                    <span className="span-text">Pro</span>
                    <p className="p-text">$15/mo</p>
                </div>
            </div>
            <div className="mon-year-container">
            <span className="span-text">Monthly</span>
                <label className="switch-mon-year">
                    <input className="input-checkbox" type="checkbox"/>
                    <span className="slider"></span>
                </label>
                <span className="span-text">Yearly</span>
            </div>
            <div className="btn-container">
                <Link to="/form" className="link-go-back-active">Go Back</Link>
                <Link to="/pick" className="link-next">
                    <button className="form-submit">Next Step</button>
                </Link>
            </div>
        </div>
    );
}