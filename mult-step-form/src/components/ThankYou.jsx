import React from "react";
import "./ThankYou.css";
import iconThankYou from "../assets/images/icon-thank-you.svg";

export default function ThankYou() {
    return (
        <div className="thank-container">
            <img className="img-thank" src={iconThankYou}></img>
            <h1 className="h1-thank">Thank you!</h1>
            <p className="text-thank">Thanks for confirming your subscription! We hope you have</p>
            <p className="text-thank">fun using our platform. If you ever need support, please feel</p>
            <p className="text-thank">free to email us at support@loremgaming.com.</p>
        </div>
    );
}