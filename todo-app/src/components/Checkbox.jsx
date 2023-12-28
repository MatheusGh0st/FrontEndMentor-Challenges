import React from "react";

export default function Checkbox(props) {
    const [isCheck, setCheck] = React.useState(false);

    function setCheckList() {
        setCheck(prevObj => {
            return !prevObj
        });
    }

    return (
        <div className="checkbox-container">
            <input className="input-checkbox" type="checkbox" onClick={setCheckList} />
            <span> className="span-checkbox"{props.title}</span>
        </div>
    )
}