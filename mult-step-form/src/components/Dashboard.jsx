import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
    return (
        <section className="dashboard-container">
            <ol className="order-dashboard-container">
                <div className="order-steps">
                    <div className="step-container">
                        <li className="li-number">1</li>
                        <li className="li-step">STEP 1</li>
                        <span className="span-step">YOUR INFO</span>
                    </div>
                    <div className="step-container">
                        <li className="li-number">2</li>
                        <li className="li-step">STEP 2</li>
                        <span className="span-step">SELECT PLAN</span>
                    </div>
                    <div className="step-container">
                        <li className="li-number">3</li>
                        <li className="li-step">STEP 3</li>
                        <span className="span-step">ADD-ONS</span>
                    </div>
                    <div className="step-container">
                        <li className="li-number">4</li>
                        <li className="li-step">STEP 4</li>
                        <span className="span-step">SUMMARY</span>
                    </div>
                </div>
            </ol>
        </section>
    );
}