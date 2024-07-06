 import React from "react";
 import ReactDOM from "react-dom/client";
 
 //const heading = React.createElement("h1", {id:"heading"}, "Hello World React");

 //nested element thorugh React.
 const parent = React.createElement("div", {id:"parent"},[
 React.createElement("h1", {id:"child"}, "I am H1 tag"),
 React.createElement("h2", {}, "I am H2 tag")
]);
 
 
 console.log(parent);
    setInterval(function() {
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
  
    }, 500);
