import React from "react";
import './EmailForm.css';

export default function EmailForm(props) {
    const [formData, setFormData] = React.useState({ email: "" });
    const [isSuccess, setIsSuccess] = React.useState(false);

    function handleChange(event) {
        const { value } = event.target;
        setFormData(prevFormData => {
            return { email: value };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        let pEmail = formData.email;
        if (isEmailValid(pEmail)) {
            setIsSuccess(true);
            props.onChildProps2({ success: isSuccess, email: pEmail });
        }
    }

    function isEmailValid(email) {
        if (email.includes('@')) { return true };
        return false;
    }

    return (
        <div className="form-container">
            <div className="label-container">
                <label>Email address</label>
                {
                    formData.email.length === 0 || isEmailValid(formData.email) ?
                        "" : <label className="invalid-email">Valid email required</label>
                }
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="email@company.com"
                    name="email"
                    className={
                        formData.email.length === 0 || isEmailValid(formData.email) ?
                            "form-input" : "form-input-invalid"
                    }
                    onChange={handleChange}
                    value={formData.email}
                />
                <button className="form-submit">
                    Subscribe to monthly newsletter
                </button>
            </form>
        </div>
    );
}