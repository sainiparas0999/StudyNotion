import React from "react";

function HighlightText({text}){
    return(
       <div>
         <span className="font-bold text-richblue-200">
            {" "}
            {text}</span>
       </div>
    );
}

export default HighlightText ;