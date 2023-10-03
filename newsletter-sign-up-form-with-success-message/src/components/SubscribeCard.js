import React from "react";
import iconSuccess from "../assets/images/icon-success.svg";
import "./SubscribeCard.css";

export default function SubscribeCard(props) {

    function reset(event) {
        event.preventDefault();
        props.onGrandchildProps({ success: true, email: ""});
    }

    return (
        <div className="card-container">
            <img src={iconSuccess} className="icon-subs-card"></img>
            <h1 className="h1-card">Thanks for subscribing!</h1>
            <p className="p-card">
                A confirmation email has been sent to <b>{props.uEmail.email}</b>.
                Please open it and click the button inside to confirm your subscription.
            </p>
            <button className="btn-card" onClick={reset}>Dimiss message</button>
        </div>
    )

}