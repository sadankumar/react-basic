 import React from "react";
 import ReactDOM from "react-dom/client";
 
//React Element is React.createElement "Object" not html element => Then render converts to the HTML element

const heading  = React.createElement(
    "h1", 
    {}, 
    "This is React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
