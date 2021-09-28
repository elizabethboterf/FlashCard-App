import React from "react";

const ErrorMessage = ({ error }) => {
    console.log(error);
    return(
        <div>
            <p style={{ color: "red" }}>ERROR: {error.message}</p>
        </div>
    );
}

export default ErrorMessage;