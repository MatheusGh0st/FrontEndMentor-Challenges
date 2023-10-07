import React from "react";
import "./PersonalInfo.css";

export default function PersonalInfo() {
    return (
        <div className="personal-info-container">
            <div className="title-subtitle-container">
                <h1>Personal Info</h1>
                <p>Please provide your name, email address, and phone number.</p>
            </div>
            <div className="form-container">
                <form className="form">
                    <label>Name</label>
                    <input placeholder="e.g. Stephen King" type="text"/>
                    <label>Email Address</label>
                    <input placeholder="e.g. stephenking@lorem.com" type="text" />
                    <label>Phone number</label>
                    <input placeholder="e.g. + 1 234 567 890" type="text" />
                </form>
            </div>
            <div className="btn-container">
                <a>Go Back</a>
                <button className="form-submit">Next Step</button>
            </div>
        </div>
    );
}