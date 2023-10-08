import React from "react";
import "./PersonalInfo.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export default function PersonalInfo() {
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: ""
    });


    const [errorMsg, setErrorMsg] = React.useState({
        name: "",
        email: "",
        phone: ""
    });


    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        });
    }

    function isFieldEmpty() {
        if (!formData.name || !formData.email || !formData.phone) return true;
        return false;
    }

    function resetError() {
        setErrorMsg(_ => {
            return {
                name: "",
                email: "",
                phone: ""
            }
        });
    }

    function setErrorEmpty() {
        const objMsg = {
            name: "",
            email: "",
            phone: ""
        };

        if (!formData.name) objMsg.name = "This field is required";
        if (!formData.email) objMsg.email = "This field is required";
        if (!formData.phone) objMsg.phone = "This field is required";

        setErrorMsg(_ => {
            return {
                ...objMsg
            }
        });
    }

    function submitForm(event) {
        event.preventDefault();
        resetError();
        if (!isFieldEmpty()) {
            navigate('/select');
        }
        setErrorEmpty();
    }

    return (
        <div className="personal-info-container">
            <div className="title-subtitle-container">
                <h1>Personal Info</h1>
                <p>Please provide your name, email address, and phone number.</p>
            </div>
            <div className="form-container">
                <form className="form">
                    <div className="label-container">
                        <label className="label-form">Name</label>
                        <span className={`${ errorMsg.name.length > 0 ? "error-msg" : "span-msg"}`}>{errorMsg.name}</span>
                    </div>
                    <input
                        onChange={handleChange}
                        name="name"
                        value={formData.name}
                        className="input-form" placeholder="e.g. Stephen King" type="text"/>
                    <div className="label-container">
                        <label className="label-form">Email Address</label>
                        <span className={`${ errorMsg.email.length > 0 ? "error-msg" : "span-msg"}`}>{errorMsg.email}</span>
                     </div>
                    <input
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                        className="input-form" placeholder="e.g. stephenking@lorem.com" type="text" />
                    <div className="label-container">
                        <label className="label-form">Phone number</label>
                        <span className={`${ errorMsg.phone.length > 0 ? "error-msg" : "span-msg"}`}>{errorMsg.phone}</span>
                    </div>
                    <input
                        onChange={handleChange}
                        name="phone"
                        value={formData.phone}
                        className="input-form" placeholder="e.g. + 1 234 567 890" type="text" />
                </form>
            </div>
            <div className="btn-container-info">
                <Link className="link-go-back-desactive">Go Back</Link>
                <Link to="/select" className="link-next">
                    <button className="form-submit" onClick={submitForm}>Next Step</button>
                </Link>
            </div>
        </div>
    );
}