import React from "react";
import Section from "./Section";
import newsLetterLogo from "../assets/images/illustration-sign-up-desktop.svg";
import SubscribeCard from "./SubscribeCard";
import './Main.css';

export default function Main() {
    const [isSuccessForm, setIsSuccessForm] = React.useState(false);
    const [vEmail, setEmail] = React.useState({ email: "" });

    function getSuccess({ success, email }) {
        setIsSuccessForm(prevSucess => !success);
        setEmail(prevEmail => {
             return { email: email };
        });
    }

    return (
        <>
            {
                isSuccessForm ? (
                    <SubscribeCard uEmail={vEmail} onGrandchildProps={getSuccess} />
                )
             : (
                <div className="letter-container">
                     <Section onGrandchildProps={getSuccess} />
                     <img src={newsLetterLogo}></img>
                 </div>
                )
            }
        </>
    );
}