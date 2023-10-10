import React from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {

    const [isRouteActive, setRouteActive] = React.useState({
        form: false, select: false, pick: false, finish: false,
    });

    const location = useLocation();

    React.useEffect(() => {
        mapLocation();
    }, [location.pathname]);

    function mapLocation() {
        setRouteActive(_ => {
            return {
                form: false, select: false, pick: false, finish: false,
            }
        });

        switch (location.pathname) {
            case "/form":
                setRouteActive(prevObj => {
                    return {
                        ...prevObj,
                        form: true
                    }
                })
                break;
            case "/select":
                setRouteActive(prevObj => {
                    return {
                        ...prevObj,
                        select: true
                    }
                })
                break;
            case "/pick":
                setRouteActive(prevObj => {
                    return {
                        ...prevObj,
                        pick: true
                    }
                })
                break;
            case "/finish":
                setRouteActive(prevObj => {
                    return {
                        ...prevObj,
                        finish: true
                    }
                })
                break;
            case "/thank":
                setRouteActive(prevObj => {
                    return {
                        ...prevObj,
                        finish: true
                    }
                })
                break;
        }
    }

    return (
        <section className="dashboard-container">
            <ol className="order-dashboard-container">
                <div className="order-steps">
                    <div className="step-container">
                        <li className={ `li-number ${isRouteActive.form ? "li-number-active" : ""} `}>1</li>
                        <li className="li-step">STEP 1</li>
                        <span className="span-step">YOUR INFO</span>
                    </div>
                    <div className="step-container">
                        <li className={ `li-number ${isRouteActive.select ? "li-number-active" : ""} `}>2</li>
                        <li className="li-step">STEP 2</li>
                        <span className="span-step">SELECT PLAN</span>
                    </div>
                    <div className="step-container">
                        <li className={ `li-number ${isRouteActive.pick ? "li-number-active" : ""} `}>3</li>
                        <li className="li-step">STEP 3</li>
                        <span className="span-step">ADD-ONS</span>
                    </div>
                    <div className="step-container">
                        <li className={ `li-number ${isRouteActive.finish ? "li-number-active" : ""} `}>4</li>
                        <li className="li-step">STEP 4</li>
                        <span className="span-step">SUMMARY</span>
                    </div>
                </div>
            </ol>
        </section>
    );
}