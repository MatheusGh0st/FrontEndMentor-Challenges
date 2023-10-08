import React from "react";
import "./FinishUp.css";

export default function FinishUp() {
    return (
        <div className="finish-container">

            <div className="title-subtitle-container">
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
            </div>

            <div className="lists-plans-container">
                <div className="plans-choose-container">
                    <div className="plan-choose-container">
                        <span className="text-plans">Arcade (Monthly)</span>
                        <a className="change-link">Change</a>
                    </div>
                    <div className="price-text-container">
                        <p className="text-price">$9/mo</p>
                    </div>
                </div>

                <hr></hr>

                <div className="list-plans-container">

                    <div className="plans-list-container">
                        <p className="plans-choose">Online service</p>
                        <p className="price-plans">+$1/mo</p>
                    </div>

                    <div className="plans-list-container">
                        <p className="plans-choose">Larger storage</p>
                        <p className="price-plans">+$2/mo</p>
                    </div>
                    

                </div>
            </div>

            <div className="total-container">
                <p className="text-plan">Total (per month)</p>
                <span className="text-price-total">+12/mo</span>
            </div>

            <div className="btn-container">
                <a className="back-link">Go Back</a>
                <button className="form-submit">Confirm</button>
            </div>
            
        </div>
    );
}