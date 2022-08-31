import React from "react";
import { useLocation } from "react-router-dom";

function Answers(){
    const location = useLocation();
    // const{answer, data} = location.state;
    console.log(location.state)
    return(
        <h1>Answers Page</h1>
    )
}

export default Answers