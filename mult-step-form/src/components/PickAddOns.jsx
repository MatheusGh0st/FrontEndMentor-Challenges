import React from "react";
import "./PickAddOns.css";
import { Link } from "react-router-dom";

export default function PickAddOns() {

    const [pick, setPick] = React.useState({
        pick1: false,
        pick2: false,
        pick3: false
    });

    function filterTrue() {
        const trueValues = 
            Object.fromEntries(
                Object.entries(pick)
                .filter(([_, value]) => value === true));
        return trueValues;
    }

    function selectPicks() {
        const keysTrue = filterTrue();
        if (Object.keys(keysTrue).length > 0) {
            const filteredKeys = Object.keys(servicesObj).filter(key => Object.keys(keysTrue).includes(key));
            const filteredObj = Object.fromEntries(filteredKeys.map(key => [key, servicesObj[key]]));
            return filteredObj;
        }

        return {};
    }

    const servicesObj = {
        pick1: {
            name: "Online service",
            description: "Acess to multiplayer games",
            valueMonth: "1",
            valueYear: "10"
        },
        pick2: {
            name: "Larger storage",
            description: "Extra 1TB of cloud save",
            valueMonth: "2",
            valueYear: "20"
        },
        pick3: {
            name: "Customizable Profile",
            description: "Custom theme on your profile",
            valueMonth: "2",
            valueYear: "20"
        }
    }

    function setPickServices(event) {
        const name = event.target.getAttribute('name');
        
        const services = ["pick1", "pick2", "pick3"];

        if (services.includes(name)) {
            setPick(prevPick => {
                return {
                    ...prevPick,
                    [name]: !prevPick[name]
                }
            });
        }
    }

    return (
        <div className="pick-add-container">
            <div className="title-subtitle-container">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience</p>
            </div>
            <div className="options-container">
                <div className={`option-container ${pick.pick1 ? "option-container-active" : ""}`}>
                    <input className="input-check" type="checkbox" name="pick1"  onClick={setPickServices} />
                    <div className="text-option">
                        <span className="span-text">Online service</span>
                        <p className="p-text">Acess to multiplayer games</p>
                    </div>
                    <p className="p-text-pick">+$1/mo</p>
                </div>
                <div className={`option-container ${pick.pick2 ? "option-container-active" : ""}`}>
                    <input className="input-check" type="checkbox" name="pick2"  onClick={setPickServices} />
                    <div className="text-option">
                        <span className="span-text">Larger storage</span>
                        <p className="p-text">Extra 1TB of cloud save</p>
                    </div>
                    <p className="p-text-pick">+$2/mo</p>
                </div>
                <div className={`option-container ${pick.pick3 ? "option-container-active" : ""}`}>
                    <input className="input-check" type="checkbox" name="pick3"  onClick={setPickServices} />
                    <div className="text-option">
                        <span className="span-text">Customizable Profile</span>
                        <p className="p-text">Custom theme on your profile</p>
                    </div>
                    <p className="p-text-pick">+$2/mo</p>
                </div>
            </div>
            <div className="btn-container">
                <Link to="/select" className="link-go-back-active">Go Back</Link>
                <Link to="/finish" state={{ services: selectPicks(), yearOrMonth: false }} className="link-next">
                    <button className="form-submit">Next Step</button>
                </Link>
            </div>
        </div>
    );
}