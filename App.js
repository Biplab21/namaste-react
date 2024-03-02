import React from 'react';
import ReactDOM from 'react-dom';


const parent = React.createElement("div",
    { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "I am a H1 tag!"),
            React.createElement("h2", {}, "I am a H2 tag!!")
        ]
    )
)

console.log(parent);

// const heading = React.createElement("h1", {
//     id: "heading"
// }, "Hello World!")

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);