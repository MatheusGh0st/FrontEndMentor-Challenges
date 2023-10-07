import React from "react";
import "./PersonalInfo.css";

export default function PersonalInfo() {
    return (
        <div className="personal-info-container">
            <div className="title-subtitle-container">
                <h1>Personal Info</h1>
                <p>Please provide your name, email address, and phone number</p>
            </div>
            <div className="form-container">
                <form className="form">
                    <label className="label-name">Name</label>
                    <input className="input-name" type="text"/>
                    <label className="label-email">Email Address</label>
                    <input className="input-email" type="text" />
                    <label className="label-phone">Phone number</label>
                    <input className="input-phone" type="text" />
                </form>
                <button className="form-submit">Next Step</button>
            </div>
        </div>
    );
}