 import React from "react";
 import ReactDOM from "react-dom/client";
 
//React Element is React.createElement converts element to "Object" not html element => Then render converts to the HTML element
//React Element
const Title1  = (
    <h1 className="head1" tabIndex="6"> 
        React sub title Component
    </h1>
);

//Title Component
const Title  = () => (
    <h1 className="head" tabIndex="6"> 
        React Title Component
    </h1>
);



//jsx code will get transpilled to createElement before render to the browser. -> we are using Parcel that uses babel
const jsxHeading = <h1 id="heading"> React app using JSX</h1>; //internally calls the React.createElement
//JSX is not html. attrubites must be in camelCase
//JSX in multiple line needs to wrapo in round bracket.()

//React Functional Component: It is just a function and use the jsx. 
//Curly brushes: We can write javascript inside the curley brushes. 
//It automatically sanitise the value.
//We can call as a function for the component {Title()}. it is very flexible
const value = "This is value from javascript";// This can be come from the API
const HeadingComponent = ()=> (
    <div id="container">
        {value}, {Title1}, {Title()}
        <Title/>
         <h1 className="heading"> React Functional Component</h1>
    </div>
);
const HeadingComponent1 = ()=>  <h1> React Functional Component</h1>; //same line no need to have return keyword 


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);

root.render(<HeadingComponent />)

//React Component
