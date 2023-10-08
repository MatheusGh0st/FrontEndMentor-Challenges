import React from "react";
import "./PickAddOns.css";
import { Link } from "react-router-dom";

export default function PickAddOns() {
    return (
        <div className="pick-add-container">
            <div className="title-subtitle-container">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience</p>
            </div>
            <div className="options-container">
                <div className="option-container">
                    <input className="input-check" type="checkbox"/>
                    <div className="text-option">
                        <span>Online service</span>
                        <p>Acess to multiplayer games</p>
                    </div>
                    <p className="text-price">+$1/mo</p>
                </div>
                <div className="option-container">
                    <input className="input-check" type="checkbox"/>
                    <div className="text-option">
                        <span>Larger storage</span>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <p className="text-price">+$2/mo</p>
                </div>
                <div className="option-container">
                    <input className="input-check" type="checkbox"/>
                    <div className="text-option">
                        <span>Customizable Profile</span>
                        <p>Custom theme on your profile</p>
                    </div>
                    <p className="text-price">+$2/mo</p>
                </div>
            </div>
            <div className="btn-container">
                <Link to="/select" className="link-go-back-active">Go Back</Link>
                <Link to="/finish" className="link-next">
                    <button className="form-submit">Next Step</button>
                </Link>
            </div>
        </div>
    );
}