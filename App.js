// const heading= document.createElement("h1");
// heading.innerHTML="This is a food app in javascipt"
// const root=document.getElementById("root").appendChild(heading);

import React from "react";
import ReactDOM from "react-dom/client";

// // const heading= React.createElement("h1",{id:"head"},"I am react heading");
// // const heading=("hi");
// const heading=<h1>this is jsx element</h1>
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//Functional component
// const FunctionalComponent=()=>{
//     return(
//         <h1>This is a functional component</h1>
//     );
// }
// const FunctionalComponent=()=>(
//     <h1>This is also a functional component but used for one line usually</h1>
// )
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FunctionalComponent/>);

//Composite component
const span='span element';
const Jcompo= ( <h1>This is a jsx element</h1>);//this variable name starts with capital keep in mind
const jcomponent= ( <h1>This is a jsx element</h1>);

const FunctionalComponent1=()=>(
    <h1>Functional component1</h1>
)
const FunctionalComponent2=()=>{
    return (
        <div id="child">
            <h2>{200+400}</h2>
            <h1>This is functoinal component2</h1>
        </div>
    )
}
const functionalComponent3=()=>{
    return (
        <div id="child">
            <h2>{200+400}</h2>
            <h1>This is functoinal component2</h1>
        </div>
    )
}
 
const Rendered=()=>{
    return(
        <div id="parent">
            <h1>{span}</h1>
            {Jcompo}
            {jcomponent}
            <span>{FunctionalComponent1()}</span>
            <FunctionalComponent1/>
            {/* {FunctionalComponent1} not valid */}
            <span>{FunctionalComponent2()}</span>
            <FunctionalComponent2/>
            {functionalComponent3()}
        </div>
    );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Rendered/>)