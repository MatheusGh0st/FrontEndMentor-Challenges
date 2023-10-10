import React from "react";
import "./FinishUp.css";
import { Link, useLocation } from "react-router-dom";

export default function FinishUp() {
    
    const location = useLocation();

    const { services } = location.state;

    const [isMonOrYear] = React.useState(false);

    const getServicesContent = _ => {
        let x = 0;
        let content = [];
        for (let key in services) {
            content.push(<div key={x += 1} className="plans-list-container">
                <p className="plans-choose-text">{services[key].name}</p>
                {!isMonOrYear ? (
                    <p className="price-plans-text">+${services[key].valueMonth}/mo</p>
                ) : (
                    <p className="price-plans-text">+${services[key].valueYear}/yr</p>
                )}
            </div>)
        }
        return content;
    }

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
                        <Link to="/select" className="change-link">Change</Link>
                    </div>
                    <div className="price-text-container">
                        <p className="text-price">$9/mo</p>
                    </div>
                </div>

                <hr></hr>

                <div className="list-plans-container">
                    {
                        getServicesContent()
                    }
                </div>
            </div>

            <div className="total-container">
                <p className="text-total-plan">Total (per month)</p>
                <span className="text-price-total">+12/mo</span>
            </div>

            <div className="btn-container">
                <Link to="/pick" className="link-go-back-active">Go Back</Link>
                <Link to="/thank" className="link-next">
                    <button className="form-submit">Next Step</button>
                </Link>
            </div>
        </div>
    );
}