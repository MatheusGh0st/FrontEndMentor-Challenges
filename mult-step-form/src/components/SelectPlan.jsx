import React from "react";
import "./SelectPlan.css";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";
import { Link } from "react-router-dom";

export default function SelectPlan() {

    const [plan, setPlan] = React.useState({
        arcade: false,
        advanced: false,
        pro: false
    });

    const [monOrYear, setMonOrYear] = React.useState(false);

    function setPlanSelect(event) {

        const name = event.target.getAttribute('name');

        const plans = ["arcade", "advanced", "pro"];

        if (plans.includes(name)) {
            setPlan(prevObj => {
                return {
                    ...prevObj,
                    [name]: !prevObj[name]
                }
            });
        }
    }

    function setMonOrYearPlan(event) {
        const checked = event.target.checked;
        setMonOrYear(_ => checked);
    }

    return (
        <div className="select-plan-container">
            <div className="title-subtitle-container">
                <h1>Select your plan</h1>
                <p className="p-text">You have the option of montly or yearly billing.</p>
            </div>
            <div className="plans-container">
                <div 
                    className={`plan-container ${plan.arcade ? "plan-container-active" : ""} `} 
                    name="arcade"
                    onClick={setPlanSelect}>
                    <img src={iconArcade}></img>
                    <span className="span-text">Arcade</span>
                    { !monOrYear ? (
                        <p className="p-text">$9/mo</p>
                    ) : (
                        <>
                            <p className="p-text">$90/yr</p>
                            <p className="p-text-mon">2 months free</p>
                        </>
                    ) }
                </div>
                <div 
                    className={`plan-container ${plan.advanced ? "plan-container-active" : ""} `} 
                    name="advanced"
                    onClick={setPlanSelect}>
                    <img src={iconAdvanced}></img>
                    <span className="span-text">Advanced</span>
                    { !monOrYear ? (
                        <p className="p-text">$12/mo</p>
                    ) : (
                        <>
                            <p className="p-text">$120/yr</p>
                            <p className="p-text-mon">2 months free</p>
                        </>
                    ) }
                    
                </div>
                <div 
                    className={`plan-container ${plan.pro ? "plan-container-active" : ""} `}
                    name="pro"
                    onClick={setPlanSelect}>
                    <img src={iconPro}></img>
                    <span className="span-text">Pro</span>
                    { !monOrYear ? (
                        <p className="p-text">$15/mo</p>
                    ) : (
                        <>
                            <p className="p-text">$150/yr</p>
                            <p className="p-text-mon">2 months free</p>
                        </>
                    ) }
                </div>
            </div>
            <div className="mon-year-container">
            <span className="span-text">Monthly</span>
                <label className="switch-mon-year">
                    <input className="input-checkbox" type="checkbox" onClick={setMonOrYearPlan}/>
                    <span className="slider"></span>
                </label>
                <span className="span-text">Yearly</span>
            </div>
            <div className="btn-container">
                <Link to="/form" className="link-go-back-active">Go Back</Link>
                <Link to={{ pathname: '/pick' }} className="link-next">
                    <button className="form-submit">Next Step</button>
                </Link>
            </div>
        </div>
    );
}