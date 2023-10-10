import React from "react";
import iconArrow from "../assets/images/icon-arrow.svg";
import './Calculator.css';

export default function Calculator() {
    const [formDate, setFormDate] = React.useState({
        day: "",
        month: "",
        year: "",
    });


    const [dates, setDates] = React.useState({
        day: '--',
        month: '--',
        year: '--'
    });


    const [errorMsg, setErrorMsg] = React.useState({
        day: "",
        month: "",
        year: "",
    });


    function isInRange(num, min, max) {
        return num >= Math.min(min, max) && num <= Math.max(min, max);
    }


    function defineMessagesInvalid() {
        const objMsg = { 
            day: "",
            month: "",
            year: ""
        }

        const { day, month, year } = formDate;
        const dayMax = new Date(year, month, 0).getDate();
        const yearMax = new Date().getFullYear();

        if (!isInRange(day, 1, dayMax)) {
            objMsg.day = "Must be a valid day";
        }
        if (!isInRange(month, 1, 12)) {
            objMsg.month = "Must be a valid month";
        }
        if (!isInRange(year, 1, yearMax)) {
            objMsg.year = "Must be a valid year";
        }
        
        return objMsg;
    }


    function handleChangeForm(event) {
        const { value, name } = event.target;
        setFormDate(prevFormDate => {
            return {
                ...prevFormDate,
                [name]: value
            };
        });
    }
    

    function defineMessagesEmpty() {
        const objMsg = { 
            day: "",
            month: "",
            year: ""
        }

        const { day, month, year } = formDate;

        if (!day) objMsg.day = "This field is required";
        if (!month) objMsg.month = "This field is required";
        if (!year) objMsg.year = "This field is required";

        return objMsg;
    }


    function isDateEmpty() {
       if (!formDate.day || !formDate.month || !formDate.year) return true;
       return false;
    }


    function calcAndSetDates() {
        const d = formDate;
        const dateForm = new Date(`${d.year}/${d.month}/${d.day}`);
        const currentDate = new Date();

        const timeStampF = dateForm.getTime();
        const timeStampC = currentDate.getTime();

        const difference = timeStampC - timeStampF;

        if (difference < 0) difference = -difference;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const months = Math.floor(days / 31);
        const years = Math.floor(months / 12);

        setDates(_ => {
            return {
                day: days % 31,
                month: months % 12,
                year: years
            }
        });
    }


    function isDateInvalid() {
        const { day, month, year } = formDate;
        const dayMax = new Date(year, month, 0).getDate();
        const yearMax = new Date().getFullYear();

        if (!isInRange(day, 1, dayMax) || 
            !isInRange(month, 1, 12) || 
            !isInRange(year, 1, yearMax)) return true;

        return false; 
    }


    function setInvalidMsg() {
        const errorInvalid = defineMessagesInvalid();

        setErrorMsg(_ => {
            return {
                ...errorInvalid
            }
        });
    }


    function resetStateMsg() {
        setEmptyMsg(_ => {
            return {
                day: "",
                month: "",
                year: ""
            }
        });
    }


    function setEmptyMsg() {
        const errorEmpty = defineMessagesEmpty();
        
        setErrorMsg(_ => {
            return {
                day: errorEmpty.day,
                month: errorEmpty.month,
                year: errorEmpty.year
            }
        });
    }


    function getResult() {

        resetStateMsg();
        
        if (!isDateEmpty()) {

            if (!isDateInvalid()) {
                calcAndSetDates();
            } else {
                setInvalidMsg();
            }
        } else {
            setEmptyMsg();
        }

    }


    return (
        <>
            <div className="calculator-container">
                <div className="calculator-card">
                    <div className="date-card">
                        <label className={`date-label ${errorMsg.day.length ? "date-label-error" : ""}`}>Day</label>
                        <div className="input-container">
                            <input
                                className={`date-input ${errorMsg.day.length ? "date-input-error" : ""}`}
                                type="number"
                                placeholder="DD"
                                onChange={handleChangeForm}
                                name="day"
                                value={formDate.day}
                            />
                            <span className="error-msg">{errorMsg.day}</span>
                        </div>
                    </div>
                    <div className="date-card">
                        <label className={`date-label ${errorMsg.month.length ? "date-label-error" : ""}`}>Month</label>
                        <div className="input-container">
                            <input
                                className={`date-input ${errorMsg.month.length ? "date-input-error" : ""}`}
                                type="number"
                                placeholder="MM"
                                onChange={handleChangeForm}
                                name="month"
                                value={formDate.month}
                            />
                            <span className="error-msg">{errorMsg.month}</span>
                        </div>
                    </div>
                    <div className="date-card">
                        <label className={`date-label ${errorMsg.year.length ? "date-label-error" : ""}`}>Year</label>
                        <div className="input-container">
                            <input 
                                className={`date-input ${errorMsg.year.length ? "date-input-error" : ""}`}
                                type="number"
                                placeholder="YYYY"
                                onChange={handleChangeForm}
                                name="year"
                                value={formDate.year}
                            />
                            <span className="error-msg">{errorMsg.year}</span>
                        </div>
                    </div>
                </div>

                <div className="icon-card">
                    <hr></hr>
                    <img className="img-icon-arrow" src={iconArrow} onClick={getResult}></img>
                </div>
                
                <div className="result-card">
                    <div className="age-result">
                        <div className="date-result">
                            <p 
                                className="year-result"
                                name="years"
                                ><span className="date-value">{dates.year}</span> years</p>
                        </div>
                        <div className="months-result">
                            <p 
                                className="date-result"
                                name="months"
                                ><span className="date-value">{dates.month}</span> months</p>
                        </div>
                        <div className="days-result">
                            <p 
                                className="date-result"
                                name="days"
                                ><span className="date-value">{dates.day}</span> days</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}