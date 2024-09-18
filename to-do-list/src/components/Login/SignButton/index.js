import React from "react";
import "./styles.css";

const SignButton = ({label, handleClicked, value}) => {
    return (
        <button  id="signButton" onClick={handleClicked} value={value}>{label}</button>
    
    )
}

SignButton.defaultProps = {
    label: ''
};


export default SignButton;