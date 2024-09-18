import React from "react";
import "./styles.css";

const SignInput = ({label, typeInput, handleChange, value}) => {
    return (
        <div className="signInput">  
            <label>{label}</label>
            <input type={typeInput} onChange={handleChange} value={value}></input>
        </div>
    )
}

SignInput.defaultProps = {
    typeInput: 'text', 
    label: ''
};

export default SignInput;